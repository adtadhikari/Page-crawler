# Page-crawler
Google Chrome extension to crawl and parse specific pages. The extension works for crawling LinkedIn and google scholar page and setting the local storage of a website with the output.

manifest.json: manifest file for the extension where you set the permission, content scripts and background scripts. The extension works for linkedin and google scholar. If you want to add other pages you need to add it in the list of matches. Permissions also contains the website whose local storage will be set with the parsed data.

background.js: background script which sends message to content script to get the inner html of the current tab. After getting the DOM of the page it calls the parser to parse the page. After that the output of the parser is set to the local storage of your website.

content.js: content script that listens to message from background script and sends the DOM of the page back to the background script.

grabdata.js: contains the parser that parses the LinkedIn and Google Scholar page and outputs a JSON object.
