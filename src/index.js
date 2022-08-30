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
    mainWindow = new BrowserWindow({
        titleBarStyle: 'hidden',
        titleBarOverlay: {
          color: '#050818',
          symbolColor: '#FFFFFF',   
          height: 45
        },
        minHeight: 700,
        minWidth: 1100
    }); 
    mainWindow.loadURL(url.format({
        protocol: 'file',
        pathname: path.join(__dirname, 'views/Login.html'),
        slashes: true
    }));

    
});



