console.log('Content script loaded to hide the download button');

// Function to hide the target element
function hideDownloadButton() {
    var downloadButton = document.querySelector('#header > div.sc-ee42b4e6-0.hrQomA.sc-5c6cdb3e-8.hdQJrA > div.sc-5c6cdb3e-1.kHHcun');
    if (downloadButton) {
        downloadButton.style.display = 'none';
        console.log('Download button hidden');
    } else {
        console.log('Download button not found');
    }
}

// Initial attempt to hide the download button in case the element is already present
hideDownloadButton();

// Create a MutationObserver to watch for changes in the DOM
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.addedNodes.length) {
            hideDownloadButton();
        }
    });
});

// Start observing the body for changes
observer.observe(document.body, {
    childList: true,
    subtree: true
});
