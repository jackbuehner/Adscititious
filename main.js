// Modules to control application life and create native browser window
const {app, BrowserWindow, ipcMain, globalShortcut} = require('electron')
const {autoUpdater} = require("electron-updater")

const log = require('electron-log');

autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = 'info';
log.info('App starting...');


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function sendStatusToWindow(text) {
  log.info(text);
  win.webContents.send('message', text);
}

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    height: 1000,
    width: 1200,
	frame: false,
	backgroundColor: '#000000',
    webPreferences: {
      experimentalFeatures: true,
	  nativeWindowOpen: true
    }
  })

  win.webContents.on('new-window', (event, url, frameName, disposition, options, additionalFeatures) => {
    {
      event.preventDefault()
      Object.assign(options, {
        modal: false,
        width: 1100,
        height: 800
      })
      event.newGuest = new BrowserWindow(options)
    }
  })
	
  // and load the index.html of the app.
  win.loadURL(`file://${__dirname}/docs/home.html#v${app.getVersion()}`)

  // Open the DevTools.
  // win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}


//electron-builder update statuses
//after each status change, a message is sent using ipcMain
autoUpdater.on('checking-for-update', () => {
  sendStatusToWindow('Checking for update...');
})
autoUpdater.on('update-available', (info) => {
  sendStatusToWindow('Update available.');
})
autoUpdater.on('update-not-available', (info) => {
  sendStatusToWindow('Update not available.');
})
autoUpdater.on('error', (err) => {
  sendStatusToWindow('Error in auto-updater. ' + err);
})
autoUpdater.on('download-progress', (progressObj) => {
  let log_message = "Download speed: " + progressObj.bytesPerSecond;
  log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
  log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
  sendStatusToWindow(log_message);
})
autoUpdater.on('update-downloaded', (info) => {
  sendStatusToWindow('Update downloaded');
  sendStatusToWindow('Restart Adscititious to install update');
});


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', function() {
  createWindow()
  autoUpdater.checkForUpdatesAndNotify();
  globalShortcut.register('Control+Shift+U', () => {
	//keyboard shortcut for viewing updates info
    win.webContents.send('hideIFrame','none');
	console.log('Control+Shift+U is pressed; hiding frame and showing update info');
	win.webContents.insertCSS('.iframe_a{display:none;}#updater-info{color:white;}');
  });
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// when receiving a quitAndInstall signal, quit and install the new version ;)
ipcMain.on("quitAndInstall", (event, arg) => {
  autoUpdater.quitAndInstall();
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.