console.log('Content script loaded to apply combined adjustments');

// Function to inject global styles to apply various adjustments
function injectGlobalStyle() {
    var style = document.createElement('style');
    style.innerHTML = `
        [type="live"] {
            max-height: none !important;
            width: 100% !important;
            height: auto !important;
        }
        body > div.sc-85509bb-0.elcjDY.main-layout > nav {
            padding: 7.2rem 0px 1rem 0rem !important;
        }
        body > div.sc-85509bb-0.elcjDY.main-layout > main > div {
            padding-left: 0 !important;
            padding-right: 0 !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            max-width: none !important;
        }
        div, img, button, svg, video {
            border-radius: 0 !important;
        }
        #header > div.sc-ee42b4e6-0.hrQomA.sc-5c6cdb3e-8.hdQJrA > div.sc-5c6cdb3e-1.kHHcun {
            display: none !important;
        }
        @media (min-width: 1280px) {
            .kaooaY {
                padding: 0px 0px !important;
                gap: 0.5rem !important;
            }
        }
    `;
    document.head.appendChild(style);
    console.log('Global style injected to apply various adjustments');
}

// Function to hash a string and return a hash code
function hashString(str) {
    var hash = 0, i, chr;
    if (str.length === 0) return hash;
    for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

// Function to change the text color of chat names
function changeChatNameColor() {
    var chatNameSpans = document.querySelectorAll('body > div.sc-85509bb-0.elcjDY.main-layout > main > div > div > div.sc-7ceadb57-0.oxIey.sc-34c0d3bf-4.gOWFRI > div > div > div.sc-7ceadb57-0.cRTUYN.sc-6739afc5-2.jBIiaw > div.sc-6739afc5-5.hJKVGV > div > div > div > div > div > div > button > span');
    chatNameSpans.forEach(function (span) {
        var name = span.textContent;
        var hash = hashString(name);
        var color = colorSet[Math.abs(hash) % colorSet.length];
        span.style.color = color;
    });
}

// Initial attempt to inject the global style and change chat name color in case elements are already present
injectGlobalStyle();
changeChatNameColor();

// Create a MutationObserver to watch for changes in the DOM
var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.addedNodes.length) {
            injectGlobalStyle();
            changeChatNameColor();
        }
    });
});

// Start observing the body for changes
observer.observe(document.body, {
    childList: true,
    subtree: true
});




