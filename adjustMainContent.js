console.log('Content script loaded to adjust main content');

// Function to inject a global style to adjust padding and margin
function injectGlobalStyle() {
    var style = document.createElement('style');
    style.innerHTML = `
        @media{
            .kaooaY {
                padding: 0 !important;
                gap: 0.5rem !important;
            }
        }
        body > div.sc-85509bb-0.elcjDY.main-layout > main > div {
            padding-left: 0 !important;
            padding-right: 0 !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
        }
    `;
    document.head.appendChild(style);
    console.log('Global style injected to adjust padding and margin');
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
