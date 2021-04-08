console.log('main process working');

const { app, Menu, Tray } = require("electron");
const path = require("path");
const url = require("url");
const iconPath = path.join(__dirname, 'icon.png');

let tray;

app.on('ready', () => {
    tray = new Tray(iconPath);
    let template = [
        {
            label: 'Audio',
            submenu: [
                {
                    label: 'Low',
                    type: 'radio',
                    checked: true
                },
                {
                    label: 'High',
                    type: 'radio'
                }
            ]
        },
        {
            label: 'Video',
            submenu: [
                {
                    label: '1280x720',
                    type: 'radio',
                    checked: true
                },
                {
                    label: '1920x1080',
                    type: 'radio'
                }
            ]
        }
    ];

    const ctxMenu = Menu.buildFromTemplate(template);
    tray.setContextMenu(ctxMenu);
});
