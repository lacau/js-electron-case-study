console.log('From Renderer 1');

const { BrowserWindow } = require('electron').remote;
const path = require('path');
const url = require('url');

const newWindowButton = document.getElementById('newWindowButton');
newWindowButton.addEventListener('click', (event) => {
    let win3 = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });
    win3.loadURL(url.format({
        pathname: path.join(__dirname, 'index3.html'),
        protocol: 'file',
        slashes: true
    }));

    win3.webContents.openDevTools();
});