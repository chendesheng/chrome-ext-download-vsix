Genereated by cursor agent base on this stackoverflow thread: https://stackoverflow.com/questions/37071388/how-can-i-install-visual-studio-code-extensions-offline

# VSCode Extension Downloader

A Chrome extension that adds direct download links for VSCode extensions on the Visual Studio Marketplace.

## Features

- Automatically adds a download link to extension pages on the VS Code Marketplace
- Creates direct links to `.vsix` files with proper naming
- Works with any extension on the marketplace

## Installation

### Loading the unpacked extension in Chrome:

1. Clone or download this repository to your local machine
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" by toggling the switch in the top-right corner
4. Click "Load unpacked" and select the directory containing this extension
5. The extension is now installed and active

## Usage

1. Navigate to any VSCode extension on the marketplace (e.g., https://marketplace.visualstudio.com/items?itemName=ms-python.python)
2. The extension will automatically detect the extension details and add a direct download link to the Resources section
3. Click the link to download the `.vsix` file for manual installation

## Manual Installation of VSCode Extensions

After downloading a `.vsix` file, you can install it in VSCode by:

1. Opening VSCode
2. Going to the Extensions view (Ctrl+Shift+X / Cmd+Shift+X)
3. Clicking on the "..." menu at the top of the Extensions view
4. Selecting "Install from VSIX..." and choosing the downloaded file 
