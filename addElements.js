console.log('Content script loaded to add elements');

// Function to create a button
function createButton(text, backgroundColor, hoverColor, url) {
    const button = document.createElement('button');
    button.textContent = text;
    button.style.backgroundColor = backgroundColor;
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.padding = '10px 20px';
    button.style.fontSize = '16px';
    button.style.cursor = 'pointer';
    button.style.marginLeft = '10px'; // Adjust margin if needed

    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = hoverColor;
    });

    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = backgroundColor;
    });

    button.addEventListener('click', () => {
        window.location.href = url;
    });

    return button;
}

// Function to add buttons to the header
function addButtonsToHeader() {
    const header = document.querySelector('#header > div.sc-ee42b4e6-0.eGCkyZ.sc-5c6cdb3e-7.fSxEud');
    if (header) {
        if (!document.querySelector('#custom-following-button')) {
            const followingButton = createButton('Following', 'transparent', '#32cd32', 'https://www.sooplive.com/following');
            followingButton.id = 'custom-following-button';
            header.appendChild(followingButton);
            console.log('Following button added to the header');
        }

        if (!document.querySelector('#custom-browse-button')) {
            const browseButton = createButton('Browse', 'transparent', '#32cd32', 'https://www.sooplive.com/category');
            browseButton.id = 'custom-browse-button';
            header.appendChild(browseButton);
            console.log('Browse button added to the header');
        }
    } else {
        console.error('Header element not found. Please check the selector.');
    }
}

// Initial attempt to add the buttons in case elements are already present
addButtonsToHeader();

// Create a MutationObserver to watch for changes in the DOM
var observer3 = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.addedNodes.length) {
            addButtonsToHeader();
        }
    });
});

// Start observing the body for changes
observer3.observe(document.body, {
    childList: true,
    subtree: true
});
