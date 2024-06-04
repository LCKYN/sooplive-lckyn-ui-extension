console.log('Content script loaded to remove max-width');

// Function to remove the max-width of the main content
function removeMaxWidth() {
    var mainContent = document.querySelector('body > div.sc-85509bb-0.elcjDY.main-layout > main > div');
    if (mainContent) {
        mainContent.style.maxWidth = 'none';
        console.log('Main content max-width removed');
    } else {
        console.log('Main content not found');
    }
}

// Initial attempt to remove the max-width in case the element is already present
removeMaxWidth();

// Create a MutationObserver to watch for changes in the DOM
var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.addedNodes.length) {
            removeMaxWidth();
        }
    });
});

// Start observing the body for changes
observer.observe(document.body, {
    childList: true,
    subtree: true
});
