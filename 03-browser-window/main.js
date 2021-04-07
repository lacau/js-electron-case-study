console.log('main process working');

const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");
const { brotliCompress } = require("zlib");

let win, dimensionWin, colorWin, framelessWin;
let parentWin, chieldWin;

createWindow = () => {
    win = new BrowserWindow();
    dimensionWin = new BrowserWindow({
        width: 400,
        height: 400,
        maxWidth: 600,
        maxHeight: 600
    });
    colorWin = new BrowserWindow({
        backgroundColor: '#228b22'
    });
    framelessWin = new BrowserWindow({
        backgroundColor: '#800000',
        frame: false
    });

    parentWin = new BrowserWindow({
        title: 'parent'
    });
    chieldWin = new BrowserWindow({
        parent: parentWin,
        title: 'child',
        modal: true,
        show: false
    });
    chieldWin.loadURL("https://github.com");
    chieldWin.once('ready-to-show', () => {
        chieldWin.show();
    });
}

app.on('ready', createWindow);
