function updateBadge(paused) {
  badge_text = paused ? "OFF" : "";
  chrome.browserAction.setBadgeText({text: badge_text});
}

function setPaused(paused) {
  localStorage.setItem('paused', paused);
  updateBadge(paused);
}

chrome.browserAction.onClicked.addListener(function(tab){
  localStorage.setItem("lastChangedAt", now());
  state = localStorage.getItem('paused') == 'true'
  setPaused(!state);
  chrome.tabs.update(tab.id, {url: tab.url});
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.name == "isPaused?")
    sendResponse({value: localStorage.getItem('paused')});
  else if (message.name == "setOptions") {
    localStorage.setItem('options', message.options);
    checkForRandomSwap();
    handleNewOptions(JSON.parse(message.options));
  }
});

chrome.runtime.onInstalled.addListener(function() {
  setPaused(true);
});

var ONE_DAY = 1000 * 60 * 60 * 24;
//returns the current time in millis since epoch
function now() {
  return +new Date();
}

var alreadyQueued = false;
function checkForRandomSwap() {
  var options = JSON.parse(localStorage.getItem('options'));
  if (!options.checkDaily) return;

  var lastChangedAt = parseInt(localStorage.getItem("lastChangedAt"), 10);
  //if we've never changed it, or if it's been over a day since it was changed
  if (isNaN(lastChangedAt) || lastChangedAt + ONE_DAY < now()) {
    lastChangedAt = now();
    var paused = Math.random() > 0.5;
    setPaused(paused);
    localStorage.setItem("lastChangedAt", lastChangedAt);
  }
  if (!alreadyQueued) {
    var time_until_next_check = (lastChangedAt + ONE_DAY) - now();
    alreadyQueued = true;
    setTimeout(function() {
      alreadyQueued = false;
      checkForRandomSwap();
    }, time_until_next_check);
  }
}

updateBadge(localStorage.getItem('paused') == true);
checkForRandomSwap();
