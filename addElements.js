console.log('Content script loaded to add elements');

// Function to add a button to the header
function addButtonToHeader() {
    const header = document.querySelector('#header > div.sc-ee42b4e6-0.eGCkyZ.sc-5c6cdb3e-7.fSxEud');
    if (header && !document.querySelector('#custom-following-button')) {
        const button = document.createElement('button');
        button.id = 'custom-following-button';
        button.textContent = 'Following';
        button.style.backgroundColor = '#007bff';
        button.style.color = '#fff';
        button.style.border = 'none';
        button.style.padding = '10px 20px';
        button.style.fontSize = '16px';
        button.style.cursor = 'pointer';

        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#32cd32'; // Lemon green color
        });

        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = '#007bff'; // Original color
        });

        button.addEventListener('click', () => {
            window.location.href = 'https://www.sooplive.com/following';
        });

        header.appendChild(button);
        console.log('Button added to the header');
    } else if (!header) {
        console.error('Header element not found. Please check the selector.');
    }
}

// Initial attempt to add the button in case elements are already present
addButtonToHeader();

// Create a MutationObserver to watch for changes in the DOM
var observer3 = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.addedNodes.length) {
            addButtonToHeader();
        }
    });
});

// Start observing the body for changes
observer3.observe(document.body, {
    childList: true,
    subtree: true
});
