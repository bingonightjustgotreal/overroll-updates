const path = require('path');
const { spawn } = require('child_process');

const gameFolder = path.resolve(__dirname, '..');
const executable = path.join(gameFolder, 'Overroll.exe');
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
    console.log('Started Overroll.exe');
    child.unref();
});
