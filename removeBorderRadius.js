console.log('Content script loaded to remove border radius');

// Function to inject a global style to remove border-radius
function injectGlobalStyle() {
    var style = document.createElement('style');
    style.innerHTML = '* { border-radius: 0 !important; }';
    document.head.appendChild(style);
    console.log('Global style injected to remove border radius');
}

// Initial attempt to inject the global style in case elements are already present
injectGlobalStyle();

// Create a MutationObserver to watch for changes in the DOM
var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.addedNodes.length) {
            injectGlobalStyle();
        }
    });
});

// Start observing the body for changes
observer.observe(document.body, {
    childList: true,
    subtree: true
});
