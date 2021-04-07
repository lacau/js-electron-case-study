console.log('main process working');

const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

let win;

createWindow = () => {
    win = new BrowserWindow({
        show: false,
        height: 150,
        width: 500,
        frame: false,
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

    // win.webContents.openDevTools();
    win.on('closed', () => {
        win = null;
    });
    win.once('ready-to-show', () => {
        win.show();
    });
}

app.on('ready', createWindow);
