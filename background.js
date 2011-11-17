chrome.browserAction.onClicked.addListener(
    function(tab){
        if (localStorage.getItem('paused')=="yes"){ 
           localStorage.removeItem('paused');
           chrome.browserAction. setBadgeText({text:""});
        } else {
           localStorage.setItem('paused',"yes");
           chrome.browserAction. setBadgeText({text:"OFF"});
        }
        chrome.tabs.update(tab.id, {url: tab.url});
});


chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        if (request.checkPaused == "hello")
            sendResponse({maybePaused: localStorage.getItem('paused')});
  });