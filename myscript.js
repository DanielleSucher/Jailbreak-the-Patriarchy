function updateNode(node) {
    return function (response) {
        if (response.value !== "") {
            node.textContent = response.value;
        }
    };
}

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
        chrome.extension.sendRequest(request, updateNode(node));
    }
}

chrome.extension.sendRequest({name: "isPaused"}, function(response) {
    if (!response.value) {
        jailbreak(document.body);
        document.body.addEventListener('DOMNodeInserted', function(event) {
            jailbreak(event.target);
        });
    }
});

