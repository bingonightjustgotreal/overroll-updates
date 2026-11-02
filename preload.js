const { contextBridge, ipcRenderer } = require('electron');
let introStarted = false;
const introStartCallbacks = [];

ipcRenderer.on('app:intro-start', () => {
    introStarted = true;
    while (introStartCallbacks.length) introStartCallbacks.shift()();
});

contextBridge.exposeInMainWorld('overroll', {
    bootstrap: () => ipcRenderer.invoke('google:bootstrap'),
    signInGoogle: () => ipcRenderer.invoke('google:sign-in'),
    signOutGoogle: () => ipcRenderer.invoke('google:sign-out'),
    loadLocalSave: () => ipcRenderer.invoke('save:load-local'),
    queueLocalSave: save => ipcRenderer.send('save:write-local', save),
    queueCloudSave: save => ipcRenderer.send('google:queue-save', save),
    onCloudSyncStatus: callback => ipcRenderer.on('google:sync-status', (_event, status) => callback(status)),
    onIntroStart: callback => {
        if (introStarted) callback();
        else introStartCallbacks.push(callback);
    }
});
