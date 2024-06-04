console.log('Content script loaded to adjust slide bar');

// Function to inject a global style to adjust slide bar padding
function injectGlobalStyle() {
    var style = document.createElement('style');
    style.innerHTML = `
        @media{
            .jUvYyg {
                padding: 7.2rem 0px 1rem 0rem !important;
            }
        }
    `;
    document.head.appendChild(style);
    console.log('Global style injected to adjust slide bar padding');
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
