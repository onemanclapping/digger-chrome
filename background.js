chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.executeScript(null, {file: "scrapeItems.js"}, ([scrapedPage]) => {
      const createProperties = {
        url: 'https://onemanclapping.github.io/digger'
      }

      chrome.tabs.create(createProperties, (tab) => {
        chrome.runtime.onMessageExternal.addListener((message, sender, sendResponse) => {
            if (message === 'diggerReady') {
                sendResponse({scrapedPage})
            }
        });
      })
    });
});