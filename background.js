function updateBadge(paused){
    if (paused){
        chrome.browserAction.setBadgeText({text:"OFF"});
    } else {
        chrome.browserAction.setBadgeText({text:""});
    }
}

chrome.browserAction.onClicked.addListener(
    function(tab){
        if (localStorage.getItem('paused')=="yes"){ 
           localStorage.removeItem('paused');
           updateBadge(false);
        } else {
           localStorage.setItem('paused',"yes");
           updateBadge(true);
        }
        chrome.tabs.update(tab.id, {url: tab.url});
});

chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        if (request.checkPaused == "hello")
            sendResponse({maybePaused: localStorage.getItem('paused')});
  });

updateBadge(localStorage.getItem('paused')=="yes");

var lexer = new Lexer();
var tagger = new POSTagger();
chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        var tokens = lexer.lex(request.text);
        var tagged = tagger.tag(tokens);
        sendResponse({tagged: tagged});
  });

