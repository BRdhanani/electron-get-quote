const electron = require('electron');
const path = require('path');
const url = require('url');

const {app, BrowserWindow} = electron;

let mainWindow;

// Listen for app to be ready
app.on('ready', function(){
  // Create new window
  mainWindow = new BrowserWindow({
  	height: 200,
  	width: 500,
  	frame: false,
  	webPreferences: {
        nodeIntegration: true
    },
    show: false
  });
  // Load html in window
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'mainWindow.html'),
    protocol: 'file:',
    slashes:true
  }));

  // Quit app when closed
  mainWindow.on('closed', function(){
    app.quit();
  });

  mainWindow.once('ready-to-show', function(){
    mainWindow.show();
  });
});
