console.log('main process working');

const { app, BrowserWindow, Menu, MenuItem, globalShortcut, shell } = require("electron");
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

app.on('will-quit', () => {
    globalShortcut.unregisterAll();
});

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
            submenu: [{
                label: 'About electron',
                click: () => {
                    shell.openExternal('http://electronjs.org');
                },
                accelerator: 'CmdOrCtrl + Shift + H'
            }]
        }
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);


    const ctxMenu = new Menu();
    ctxMenu.append(new MenuItem({
        label: 'Hello',
        click: () => {
            console.log('Context menu item clicked');
        }
    }));
    ctxMenu.append(new MenuItem({ role: 'selectall' }));
    win.webContents.on('context-menu', (event, params) => {
        ctxMenu.popup(win, params.x, params.y);
    });

    globalShortcut.register('Alt +1 ', () => {
        win.show();
    })
});
