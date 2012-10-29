function ProgressBar () {
    this.queued = 0;
    this.done = 0;
    this.timeout = null;
    $("head").append("<style>\
.invisibleProgressBar { display: none; } \
.visibleProgressBar {\
position: fixed;\
bottom: 0px;\
right: 0px;\
left: 0px;\
text-align: center;\
font-size: large; \
background-color: #aaa; \
} \
</style>");
    $("body").prepend("<div id='progressbar'></div>");
}
ProgressBar.prototype.render = function() {
    var bar = $("#progressbar");
    bar.empty()
    bar.prepend("Jailbreaking the Patriarchy one DOM node at a time..." + this.done + " / " + this.queued);
    if (!bar.hasClass("visibleProgressBar")) {
        bar.addClass("visibleProgressBar");
    }
};
ProgressBar.prototype.start = function () {
    if (this.timeout == null && this.done < this.queued) {
        console.log({name: "progressbar.start",
                     done: this.done,
                     queued: this.queued,
                    });
        this.timeout = setTimeout(this.update, 0, this);
    }
};
ProgressBar.prototype.update = function (bar) {
    console.log({name: "progressbar.update",
                 done: bar.done,
                 queued: bar.queued,
                });
    bar.render();
    var f = bar.done < bar.queued ? bar.update : bar.remove;
    bar.timeout = setTimeout(f, 300, bar);
};
ProgressBar.prototype.remove = function (bar) { 
    $('#progressbar')
        .removeClass("visibleProgressBar")
        .addClass("invisibleProgressBar");
    console.log({name: "progressbar.remove",});
};

var progressbar = new ProgressBar();

function jailbreak(node){
    var treeWalker = document.createTreeWalker(  
        node,  
        NodeFilter.SHOW_TEXT,  
        { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },  
        false  
    ); 
    while(treeWalker.nextNode()) {
        var node = treeWalker.currentNode;
        var request = {name: "swapGenders", text: node.textContent};
        progressbar.queued += 1;
        chrome.extension.sendRequest(request, updateNode);
        function updateNode (response) {
            if (response.value !== "") {
                node.textContent = response.value;
            }
            progressbar.done += 1; 
        }
    }
    progressbar.start();
}

chrome.extension.sendRequest({name: "isPaused"}, function(response) {
    if (!response.value) {
        jailbreak(document.body);
        document.body.addEventListener('DOMNodeInserted', function(event) {
            console.log("DomNodeInserted");
            jailbreak(event.target);
        });
    }
});

