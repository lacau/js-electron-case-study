console.log('main process working');

const { app, BrowserWindow, Menu, shell } = require("electron");
const path = require("path");
const url = require("url");

let win;

createWindow = () => {
    win = new BrowserWindow();
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

app.on('ready', () => {
    createWindow();
    const template = [
        {
            label: 'Edit',
            submenu: [
                { role: 'undo' },
                { role: 'redo' },
                { type: 'separator' },
                { role: 'cut' },
                { role: 'copy' },
                { role: 'paste' },
                { role: 'pasteandmatchstyle' },
                { role: 'delete' },
                { role: 'selectall' }
            ]
        },
        {
            label: 'Demo',
            submenu: [
                {
                    label: 'submenu 1',
                    click: () => {
                        console.log('Clicked submenu 1');
                    }
                },
                { type: 'separator' },
                {
                    label: 'submenu 2'
                }
            ]
        },
        {
            label: 'Help',
            click: () => {
                shell.openExternal('http://electronjs.org');
            }
        }
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
});
