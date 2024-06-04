console.log('Content script loaded');

// Function to remove the target elements and adjust layout
function removeTargetElementsAndAdjustLayout() {
    // Remove second SVG path element
    var svgPath2 = document.querySelector('header div > div > svg > g > path:nth-child(2)');
    if (svgPath2) {
        svgPath2.parentNode.removeChild(svgPath2);
        console.log('Second element removed');
    } else {
        console.log('Second element not found');
    }

    // Adjust layout to remove empty space
    var parentDiv = document.querySelector('#header > div.sc-ee42b4e6-0.eGCkyZ.sc-5c6cdb3e-7.fSxEud');
    if (parentDiv) {
        parentDiv.style.padding = '0';
        parentDiv.style.margin = '0';
        console.log('Layout adjusted');
    } else {
        console.log('Parent div not found');
    }
}

// Create a MutationObserver to watch for changes in the DOM
var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.addedNodes.length) {
            removeTargetElementsAndAdjustLayout();
        }
    });
});

// Start observing the body for changes
observer.observe(document.body, {
    childList: true,
    subtree: true
});

// Initial attempt to remove the elements in case they are already present
removeTargetElementsAndAdjustLayout();
