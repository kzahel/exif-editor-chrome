// blah
function onAppLaunchMessage(launchInfo) {
    var mainWindow = chrome.app.window.get('mainWindow')
    if (mainWindow) {
        mainWindow.contentWindow.handleLaunch(launchInfo)
    } else {
        chrome.app.window.create('index.html',
                                 {id:'mainWindow'},
                                 function(win) {
                                     win.contentWindow.addEventListener('DOMContentLoaded', function(evt) {
                                         win.contentWindow.handleLaunch(launchInfo)
                                     })
                                 }
                                )
    }
}

chrome.app.runtime.onLaunched.addListener(function(launchData) {
    console.log('onLaunched with launchdata',launchData)
    var info = {type:'onLaunched',
                launchData: launchData}
    onAppLaunchMessage(info)
});

function reload() {
    chrome.runtime.reload()
}