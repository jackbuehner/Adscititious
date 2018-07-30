// JavaScript Document
const {ipcRenderer} = require('electron')

window.ipc = window.ipc || {},
function(n) {
    ipc.messaging = {
        sendOpenSecondWindowEvent: function() {
            ipcRenderer.send('open-second-window', 'an-argument')
    },

    init: function() {
        $('#open-secondwindow-button').click( function () {
             ipc.messaging.sendOpenSecondWindowEvent()
        })
    }

 };

 n(function() {
     ipc.messaging.init();
 })

}(jQuery);