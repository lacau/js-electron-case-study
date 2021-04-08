const openItemInFolderBtn = document.getElementById('openItemInFolderBtn');
const openPathBtn = document.getElementById('openPathBtn');
const { shell } = require('electron');

openItemInFolderBtn.addEventListener('click', (event) => {
    shell.showItemInFolder('/home/lacau/Downloads/yes.png');
});

openPathBtn.addEventListener('click', (event) => {
    shell.openPath('/home/lacau/Downloads/yes.png');
});