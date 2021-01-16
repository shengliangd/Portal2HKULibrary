'use strict';

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    let url = new URL(tabs[0].url);
    let hostname = url.hostname.replaceAll('.', '-');

    chrome.tabs.update({
      url: 'https://'+hostname+'.eproxy.lib.hku.hk'+url.pathname
    });
  });
});
