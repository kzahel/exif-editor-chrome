window.exports = {}
function reload() { chrome.runtime.reload() }

function handleLaunch(launchInfo) {
    console.log('handleLaunch',launchInfo)

    var items = launchInfo.launchData.items
    if (items) {
        for (var i=0; i<items.length; i++) {
            addEntry(items[i].entry)
        }
    }
}

function addEntry(entry) {
    console.log('have entry',entry)
    // analyze entry metadata...
    new ExifImage({image:entry}, function(error,data) {
        console.log('exif result',error,data)
    })

}