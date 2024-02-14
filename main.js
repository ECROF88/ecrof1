// const electron = require('electron');
// const {app, BrowserWindow} = require('electron');
// const path = require('path');
// const url = require('url');

// let mainWindow;

// function createWindow () {
//     var ico=path.join(__dirname,'1111.png');
//     // Create the browser window.
//     mainWindow = new BrowserWindow({
//         width: 555, 
//         height: 555,
//         transparent: false,
//         frame: true,
//         icon: ico,
//         resizable : true //固定大小
//     });

//     const URL = url.format({
//         pathname: path.join(__dirname, 'index.html'),
//         protocol: 'file:',
//         slashes: true
//       })

//     mainWindow.loadURL(URL);
//     console.log(URL);
//     mainWindow.openDevTools()

//     mainWindow.on('closed', function () {
//       mainWindow = null;
//     });

// }

// app.on('ready', createWindow);

// // Quit when all windows are closed.
// app.on('window-all-closed', function () {
//   // On OS X it is common for applications and their menu bar
//   // to stay active until the user quits explicitly with Cmd + Q
//   if (process.platform !== 'darwin') {
//     app.quit();
//   }
// });

// app.on('activate', function () {
//   // On OS X it's common to re-create a window in the app when the
//   // dock icon is clicked and there are no other windows open.
//   if (mainWindow === null) {
//     createWindow();
//   }
// });
