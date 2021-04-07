console.log('main process working');
console.log('main.js');

const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

let win1 , win2;


createWindow = () => {
    win1 = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    });
    win2 = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });

    win1.loadURL(url.format({
        pathname: path.join(__dirname, 'index1.html'),
        protocol: 'file',
        slashes: true
    }));
    win2.loadURL(url.format({
        pathname: path.join(__dirname, 'index2.html'),
        protocol: 'file',
        slashes: true
    }));

    win1.webContents.openDevTools();
    win2.webContents.openDevTools();

    win1.on('closed', () => {
        win = null;
    });
    win2.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);
