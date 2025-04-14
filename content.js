// Function to add download link to VSCode marketplace page
function addDownloadLink() {
  try {
    // Get the version from the page
    const versionElement = document.querySelector('td[aria-labelledby="version"]');
    if (!versionElement) {
      console.log('Version element not found on page');
      return;
    }

    const version = versionElement.innerText;

    // Extract the item details from the URL
    const itemDetails = window.location.search
      .replace('?', '')
      .split('&')
      .filter(str => str.startsWith('itemName='))
      .map(str => str.split('=')[1])[0];

    if (!itemDetails) {
      console.log('Item details not found in URL');
      return;
    }

    console.log(`
      version: ${version}
      itemDetails: ${itemDetails}
    `);

    // Parse author and extension name
    const [author, extension] = itemDetails.split('.');
    const publisher = author.toLowerCase();

    // Create the download URL
    const href = `https://marketplace.visualstudio.com/_apis/public/gallery/publishers/${publisher}/vsextensions/${extension}/${version}/vspackage`;

    // Create list item and link elements
    const liElement = document.createElement('li');
    const element = document.createElement('a');

    // Set attributes for download link
    element.href = href;
    element.innerHTML = `${extension}.${version}.vsix`;
    element.download = `${extension}.${version}.vsix`;

    // Add the link to the page
    liElement.appendChild(element);

    // Find resources section and append link
    const resourcesList = document.querySelector('.ux-section-resources ul');
    if (resourcesList) {
      resourcesList.appendChild(liElement);
      console.log('Download link added successfully');
    } else {
      console.log('Resources list not found on page');
    }
  } catch (error) {
    console.error('Error adding download link:', error);
  }
}

// Wait for page to fully load before attempting to add download link
window.addEventListener('load', () => {
  // Wait a bit for dynamic content to load
  setTimeout(addDownloadLink, 1500);
});

// Also run the function when page is already loaded
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  setTimeout(addDownloadLink, 1500);
} 