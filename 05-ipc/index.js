const { ipcRenderer } = require("electron");

const asyncBtn = document.getElementById('asyncBtn');
const syncBtn = document.getElementById('syncBtn');

asyncBtn.addEventListener('click', () => {
    console.log('async msg 1')
    ipcRenderer.send('async-message');
    console.log('async msg 2');
});

syncBtn.addEventListener('click', () => {
    console.log('sync msg 1')
    const reply = ipcRenderer.sendSync('sync-message');
    console.log(reply);
    console.log('sync msg 2');
});

ipcRenderer.on('async-reply', (event, arg) => {
    console.log(arg);
});