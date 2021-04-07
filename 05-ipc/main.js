console.log('main process working');

const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require("path");
const url = require("url");

let win;

createWindow = () => {
    win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    win.webContents.openDevTools();
    win.on('closed', () => {
        win = null;
    });
}

ipcMain.on('async-message', (event) => {
    event.sender.send('async-reply', 'Main process opened error dialog');
});

ipcMain.on('sync-message', (event) => {
    event.returnValue = 'sync-reply';
});

app.on('ready', createWindow);
