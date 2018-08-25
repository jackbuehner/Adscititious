// JavaScript Document
var electronInstaller = require('electron-winstaller');

resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: './dist/Adscititious-win32-x64',
    outputDirectory: './dist/installers/Adscititious-win32-x64',
    exe: 'Adscititious.exe',
	setupIcon: './icon/icon-16-24-32-48-64-96-128-256-1100.ico',
	loadingGif: './icon/install.gif'
  });

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));