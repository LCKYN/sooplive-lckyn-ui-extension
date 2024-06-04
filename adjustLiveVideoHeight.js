console.log('Content script loaded to adjust live video height');

// Function to inject global styles to adjust live video container
function injectGlobalStyle() {
    var style = document.createElement('style');
    style.innerHTML = `
        [type="live"] {
            max-height: none !important;
            width: 100% !important;
            height: auto !important;
        }
    `;
    document.head.appendChild(style);
    console.log('Global style injected to adjust live video height');
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
