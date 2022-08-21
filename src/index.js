const { app, BrowserWindow, Menu } = require('electron');

const url = require('url');
const path = require('path');

if (process.env.NODE_ENV !== 'production'){
    require('electron-reload')(__dirname,{
        electron: path.join(__dirname, '../node_modules', '.bin', 'electron')
    })
}

let mainWindow

app.on('ready', () => {
    mainWindow = new BrowserWindow({}); 
    mainWindow.loadURL(url.format({
        protocol: 'file',
        pathname: path.join(__dirname, 'views/index.html'),
        slashes: true
    }));



});
/**
const electron = require('electron');
// Importing the net Module from electron remote
const net = electron.remote.net;
  
var get = document.getElementById('get');
get.addEventListener('click', () => {
    const request = net.request({
        method: 'GET',
        protocol: 'http:',
        hostname: 'httpbin.org',
        path: '/get',
        redirect: 'follow'
    });
    request.on('response', (response) => {
        console.log(`STATUS: ${response.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(response.headers)}`);
  
        response.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`)
        });
    });
    request.on('finish', () => {
        console.log('Request is Finished')
    });
    request.on('abort', () => {
        console.log('Request is Aborted')
    });
    request.on('error', (error) => {
        console.log(`ERROR: ${JSON.stringify(error)}`)
    });
    request.on('close', (error) => {
        console.log('Last Transaction has occured')
    });
    request.setHeader('Content-Type', 'application/json');
    request.end();
});
  
var post = document.getElementById('post');
post.addEventListener('click', () => {
    var body = JSON.stringify({ key: 1 });
    const request = net.request({
        method: 'POST',
        protocol: 'http:',
        hostname: 'httpbin.org',
        path: '/post',
        redirect: 'follow'
    });
    request.on('response', (response) => {
        console.log(`STATUS: ${response.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(response.headers)}`);
  
        response.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`)
        });
    });
    request.on('finish', () => {
        console.log('Request is Finished')
    });
    request.on('abort', () => {
        console.log('Request is Aborted')
    });
    request.on('error', (error) => {
        console.log(`ERROR: ${JSON.stringify(error)}`)
    });
    request.on('close', (error) => {
        console.log('Last Transaction has occured')
    });
    request.setHeader('Content-Type', 'application/json');
    request.write(body, 'utf-8');
    request.end();
});






 */



/*
    const mainMenu = Menu.buildFromTemplate(templateMenu);
    Menu.setApplicationMenu(mainMenu);
*/


/*
const templateMenu = [
    {
        label: 'File',
        submenu: [{
            label: 'New Window',
            accelerator: 'Ctrl+N',
            click() {
                alert('NUEVA VENTANA')
            }
        }]
    }
];

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
*/



