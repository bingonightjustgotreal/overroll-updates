const path = require('path');
const fs = require('fs');
const { spawn } = require('child_process');

const gameFolder = path.resolve(__dirname, '..');
const renamedExecutable = path.join(gameFolder, 'Roundy.exe');
const legacyExecutable = path.join(gameFolder, 'Overroll.exe');
const executable = fs.existsSync(renamedExecutable) ? renamedExecutable : legacyExecutable;
const child = spawn(executable, process.argv.slice(2), {
    cwd: gameFolder,
    detached: true,
    stdio: 'ignore'
});

child.once('error', error => {
    console.error(`Could not start ${executable}: ${error.message}`);
    process.exitCode = 1;
});
child.once('spawn', () => {
    console.log(`Started ${path.basename(executable)}`);
    child.unref();
});
