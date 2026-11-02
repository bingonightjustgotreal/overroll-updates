const { app, BrowserWindow, Menu, shell, ipcMain, safeStorage, session, dialog } = require('electron');
const fs = require('fs');
const http = require('http');
const https = require('https');
const crypto = require('crypto');
const path = require('path');

function reportStartupError(error) {
    try {
        const folder = app.getPath('userData');
        fs.mkdirSync(folder, { recursive: true });
        fs.appendFileSync(path.join(folder, 'startup-errors.log'), `${new Date().toISOString()}\n${error && error.stack || error}\n\n`, 'utf8');
    } catch (_) {}
}
process.on('uncaughtException', error => {
    reportStartupError(error);
    try { dialog.showErrorBox('Overroll could not start', error && error.message || String(error)); } catch (_) {}
    app.quit();
});
process.on('unhandledRejection', error => reportStartupError(error));

let mainWindow = null;
const SAVE_FILENAME = 'overroll-save-v1.json';

function getOAuthConfig() {
    try { return JSON.parse(fs.readFileSync(path.join(__dirname, 'build', 'google-oauth.json'), 'utf8')); }
    catch (_) { return {}; }
}
function credentialPath() { return path.join(app.getPath('userData'), 'google-auth.dat'); }
function localSavePath() { return path.join(app.getPath('userData'), SAVE_FILENAME); }
function isValidSave(save) {
    return !!save && save.version === 1 && save.data && typeof save.data === 'object' && !Array.isArray(save.data);
}
function readCredentials() {
    try {
        if (!safeStorage.isEncryptionAvailable()) return null;
        return JSON.parse(safeStorage.decryptString(fs.readFileSync(credentialPath())));
    } catch (_) { return null; }
}
function writeCredentials(value) {
    if (!safeStorage.isEncryptionAvailable()) throw new Error('Secure credential storage is unavailable on this computer.');
    fs.writeFileSync(credentialPath(), safeStorage.encryptString(JSON.stringify(value)));
}
function request(options, body) {
    return new Promise((resolve, reject) => {
        const req = https.request(options, res => {
            const chunks = [];
            res.on('data', chunk => chunks.push(chunk));
            res.on('end', () => {
                const buffer = Buffer.concat(chunks), text = buffer.toString('utf8');
                let json = null; try { json = JSON.parse(text); } catch (_) {}
                if (res.statusCode < 200 || res.statusCode >= 300) {
                    const err = new Error((json && (json.error_description || (json.error && json.error.message) || json.error)) || `Google returned HTTP ${res.statusCode}`);
                    err.statusCode = res.statusCode; return reject(err);
                }
                resolve({ json, buffer, statusCode: res.statusCode });
            });
        });
        req.setTimeout(20000, () => req.destroy(new Error('Google request timed out. Check your internet connection and try again.')));
        req.on('error', reject); if (body) req.write(body); req.end();
    });
}
function postForm(urlString, values) {
    const body = new URLSearchParams(values).toString(), url = new URL(urlString);
    return request({ hostname: url.hostname, path: url.pathname + url.search, method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Content-Length': Buffer.byteLength(body) } }, body);
}
async function getAccessToken() {
    const config = getOAuthConfig(), creds = readCredentials();
    if (!config.clientId || !creds) return null;
    if (creds.accessToken && creds.expiresAt > Date.now() + 60000) return { token: creds.accessToken, creds };
    if (!creds.refreshToken) return null;
    const form = { client_id: config.clientId, refresh_token: creds.refreshToken, grant_type: 'refresh_token' };
    if (config.clientSecret) form.client_secret = config.clientSecret;
    const token = (await postForm('https://oauth2.googleapis.com/token', form)).json;
    creds.accessToken = token.access_token; creds.expiresAt = Date.now() + token.expires_in * 1000;
    writeCredentials(creds); return { token: creds.accessToken, creds };
}
function waitForAuthorization(config) {
    return new Promise((resolve, reject) => {
        const state = crypto.randomBytes(24).toString('hex');
        const verifier = crypto.randomBytes(32).toString('base64url');
        const challenge = crypto.createHash('sha256').update(verifier).digest('base64url');
        let finished = false, timer;
        let redirectUri = '';
        const server = http.createServer((req, res) => {
            const callback = new URL(req.url, 'http://127.0.0.1');
            if (callback.pathname !== '/oauth2callback') { res.writeHead(404); return res.end('Not found'); }
            const finish = (err, data) => {
                if (finished) return; finished = true; clearTimeout(timer);
                server.close(() => err ? reject(err) : resolve(data));
            };
            const oauthError = callback.searchParams.get('error');
            if (oauthError) { res.writeHead(400, { 'Content-Type': 'text/html' }); res.end('<h2>Sign-in cancelled</h2>You can close this tab.'); return finish(new Error(oauthError === 'access_denied' ? 'Google sign-in was cancelled.' : `Google sign-in failed: ${oauthError}`)); }
            if (callback.searchParams.get('state') !== state || !callback.searchParams.get('code')) { res.writeHead(400); res.end('Sign-in check failed. You can close this tab.'); return finish(new Error('Google sign-in could not be verified. Please try again.')); }
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); res.end('<!doctype html><title>Overroll</title><h2>Sign-in complete</h2><p>Return to Overroll.</p>');
            finish(null, { code: callback.searchParams.get('code'), verifier, redirectUri });
        });
        server.on('error', err => { if (!finished) { finished = true; clearTimeout(timer); reject(err); } });
        server.listen(0, '127.0.0.1', async () => {
            redirectUri = `http://127.0.0.1:${server.address().port}/oauth2callback`;
            const auth = new URL('https://accounts.google.com/o/oauth2/v2/auth');
            auth.search = new URLSearchParams({ client_id: config.clientId, redirect_uri: redirectUri, response_type: 'code', scope: 'openid email profile https://www.googleapis.com/auth/drive.appdata', state, code_challenge: challenge, code_challenge_method: 'S256', access_type: 'offline', include_granted_scopes: 'true' }).toString();
            timer = setTimeout(() => { if (!finished) { finished = true; server.close(() => reject(new Error('Google sign-in expired. Please try again.'))); } }, 180000);
            try { await shell.openExternal(auth.toString()); }
            catch (_) { if (!finished) { finished = true; clearTimeout(timer); server.close(() => reject(new Error('Could not open your web browser for Google sign-in.'))); } }
        });
    });
}
async function googleSignIn() {
    const config = getOAuthConfig();
    if (!config.clientId) return { ok: false, code: 'not_configured', message: 'Google sign-in needs a Google OAuth desktop client ID in build/google-oauth.json. Your game still saves locally on this computer.' };
    try {
        const { code, verifier, redirectUri } = await waitForAuthorization(config);
        const form = { client_id: config.clientId, code, code_verifier: verifier, grant_type: 'authorization_code', redirect_uri: redirectUri };
        if (config.clientSecret) form.client_secret = config.clientSecret;
        const token = (await postForm('https://oauth2.googleapis.com/token', form)).json;
        const user = (await request({ hostname: 'www.googleapis.com', path: '/oauth2/v3/userinfo', headers: { Authorization: `Bearer ${token.access_token}` } })).json;
        const previous = readCredentials() || {};
        const creds = { accessToken: token.access_token, expiresAt: Date.now() + token.expires_in * 1000, refreshToken: token.refresh_token || previous.refreshToken || null, user: { id: user.sub, email: user.email || '', name: user.name || user.email || 'Google player', picture: user.picture || '' }, saveFileId: previous.saveFileId || null };
        writeCredentials(creds); return { ok: true, user: creds.user };
    } catch (err) { return { ok: false, code: 'sign_in_failed', message: err.message }; }
}
async function getDriveSave() {
    const auth = await getAccessToken(); if (!auth) return null;
    const creds = auth.creds;
    try {
        let id = creds.saveFileId;
        if (!id) {
            const q = new URLSearchParams({ spaces: 'appDataFolder', q: `name='${SAVE_FILENAME}'`, fields: 'files(id,name,modifiedTime)' });
            const files = (await request({ hostname: 'www.googleapis.com', path: `/drive/v3/files?${q}`, headers: { Authorization: `Bearer ${auth.token}` } })).json.files || [];
            if (!files.length) return null;
            id = files[0].id; creds.saveFileId = id; writeCredentials(creds);
        }
        const result = await request({ hostname: 'www.googleapis.com', path: `/drive/v3/files/${encodeURIComponent(id)}?alt=media`, headers: { Authorization: `Bearer ${auth.token}` } });
        try { return JSON.parse(result.buffer.toString('utf8')); } catch (_) { return null; }
    } catch (err) { if (err.statusCode === 404) { creds.saveFileId = null; writeCredentials(creds); return null; } throw err; }
}
async function putDriveSave(save) {
    const auth = await getAccessToken(); if (!auth) return false;
    const boundary = `overroll_${crypto.randomBytes(12).toString('hex')}`;
    const metadata = auth.creds.saveFileId ? {} : { name: SAVE_FILENAME, parents: ['appDataFolder'] };
    const body = Buffer.concat([
        Buffer.from(`--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${JSON.stringify(metadata)}\r\n`),
        Buffer.from(`--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${JSON.stringify(save)}\r\n`),
        Buffer.from(`--${boundary}--`)
    ]);
    const id = auth.creds.saveFileId;
    const result = await request({ hostname: 'www.googleapis.com', path: `/upload/drive/v3/files${id ? `/${encodeURIComponent(id)}` : ''}?uploadType=multipart&fields=id`, method: id ? 'PATCH' : 'POST', headers: { Authorization: `Bearer ${auth.token}`, 'Content-Type': `multipart/related; boundary=${boundary}`, 'Content-Length': body.length } }, body);
    if (result.json && result.json.id && result.json.id !== auth.creds.saveFileId) { auth.creds.saveFileId = result.json.id; writeCredentials(auth.creds); }
    return true;
}

ipcMain.handle('google:bootstrap', async () => {
    const creds = readCredentials(); let cloudSave = null;
    try { cloudSave = await getDriveSave(); } catch (_) {}
    return { configured: !!getOAuthConfig().clientId, account: creds && creds.user || null, cloudSave };
});
ipcMain.handle('save:load-local', () => {
    try {
        const save = JSON.parse(fs.readFileSync(localSavePath(), 'utf8'));
        return isValidSave(save) ? save : null;
    } catch (_) { return null; }
});
ipcMain.on('save:write-local', (_event, save) => {
    if (!isValidSave(save)) return;
    try {
        const target = localSavePath();
        const temporary = `${target}.tmp`;
        fs.writeFileSync(temporary, JSON.stringify(save), 'utf8');
        fs.renameSync(temporary, target);
    } catch (error) {
        if (mainWindow && !mainWindow.isDestroyed()) mainWindow.webContents.send('google:sync-status', { ok: false, message: `Local backup could not be written: ${error.message}` });
    }
});
ipcMain.handle('google:sign-in', googleSignIn);
ipcMain.handle('google:sign-out', () => { try { fs.unlinkSync(credentialPath()); } catch (_) {} return true; });
ipcMain.on('google:queue-save', (_event, save) => {
    if (!mainWindow || !getOAuthConfig().clientId || !readCredentials()) return;
    clearTimeout(mainWindow.cloudSaveTimer);
    mainWindow.cloudSaveTimer = setTimeout(() => putDriveSave(save).then(synced => {
        if (mainWindow && !mainWindow.isDestroyed()) mainWindow.webContents.send('google:sync-status', { ok: !!synced, message: synced ? 'Google cloud backup is up to date.' : 'Sign in to enable Google cloud backup. Local progress is safe.' });
    }).catch(() => {
        if (mainWindow && !mainWindow.isDestroyed()) mainWindow.webContents.send('google:sync-status', { ok: false, message: 'Cloud backup could not sync. Your local save is still safe.' });
    }), 1800);
});

function createWindow(resetPlayer = false) {
    mainWindow = new BrowserWindow({
        width: 960,
        height: 620,
        show: false,
        fullscreen: true,
        minWidth: 640,
        minHeight: 420,
        resizable: true,
        backgroundColor: '#0f0f1a',
        title: 'Overroll',
        autoHideMenuBar: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false,
            sandbox: true,
            autoplayPolicy: 'no-user-gesture-required'
        }
    });

    mainWindow.once('ready-to-show', () => {
        if (!mainWindow || mainWindow.isDestroyed()) return;
        mainWindow.setFullScreen(true);
        mainWindow.show();
        mainWindow.webContents.send('app:intro-start');
    });

    mainWindow.loadFile(path.join(__dirname, 'index.html'), resetPlayer ? { query: { resetPlayer: '1' } } : undefined);

    // Optional: open external links (none currently) in the system browser
    mainWindow.webContents.setWindowOpenHandler(({ url }) => {
        shell.openExternal(url);
        return { action: 'deny' };
    });

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

// A minimal application menu (File → Quit, View → Fullscreen/Reload)
function buildMenu() {
    const template = [
        {
            label: 'File',
            submenu: [
                { role: 'quit', accelerator: 'CmdOrCtrl+Q' }
            ]
        },
        {
            label: 'View',
            submenu: [
                { role: 'togglefullscreen', accelerator: 'F11' },
                { role: 'reload', accelerator: 'CmdOrCtrl+R' },
                { role: 'toggleDevTools', accelerator: 'CmdOrCtrl+Shift+I' },
                { type: 'separator' },
                { role: 'zoomIn' },
                { role: 'zoomOut' },
                { role: 'resetZoom' }
            ]
        }
    ];
    Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

app.whenReady().then(async () => {
    const resetPlayer = process.argv.includes('--reset-player');
    if (resetPlayer) {
        await session.defaultSession.clearStorageData({ storages: ['localstorage'] });
        try { fs.unlinkSync(localSavePath()); } catch (_) {}
    }
    buildMenu();
    createWindow(resetPlayer);

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
