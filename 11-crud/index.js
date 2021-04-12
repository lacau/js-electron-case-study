const fs = require('fs');
const path = require('path');

fileName = document.getElementById('fileName');
fileContents = document.getElementById('fileContents');
btnCreate = document.getElementById('btnCreate');
btnRead = document.getElementById('btnRead');
btnDelete = document.getElementById('btnDelete');

let pathName = path.join(__dirname, 'files');

btnCreate.addEventListener('click', (event) => {
    let file = path.join(pathName, fileName.value);
    let contents = fileContents.value;

    fs.writeFile(file, contents, (err) => {
        if(err) {
            return console.log(err);
        }

        console.log("The file was created");
    });
});

btnRead.addEventListener('click', (event) => {
    let file = path.join(pathName, fileName.value);

    fs.readFile(file, (err, data) => {
        if(err) {
            return console.log(err);
        }

        fileContents.value = data;
        console.log("The file was read!");
    });
});

btnDelete.addEventListener('click', (event) => {
    let file = path.join(pathName, fileName.value);

    fs.unlink(file, (err) => {
        if(err) {
            return console.log(err);
        }

        fileName.value = '';
        fileContents.value = '';
        console.log("The file was deleted!");
    });
});