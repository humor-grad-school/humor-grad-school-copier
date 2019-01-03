chrome.browserAction.onClicked.addListener((tab) => {
  // No tabs or host permissions needed!
  console.log('Turning ' + tab.url + ' red!');
  document.addEventListener('keydown', (event) => {
    console.log(event)
  });

  chrome.tabs.executeScript({
    file: 'dist/page.js'
  });
});

chrome.runtime.onMessage.addListener(function(request, sender) {
  console.log(request);
});

const webSocket = new WebSocket('ws://localhost:12333');
webSocket.onmessage = (event) => {
  if (event.data === 'refresh') {
    window.location.reload();
  }
};
