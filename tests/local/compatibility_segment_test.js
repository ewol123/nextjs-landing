module.exports = {
    'compatibilitySegment test' : function (browser) {
      browser
        .url('http://localhost:3000/')
        .waitForElementVisible('body', 1000)
        .assert.containsText('body', 'Works on all platforms')
        .assert.visible('.apple.huge.icon')
        .assert.visible('.chrome.huge.icon')
        .end();
    }
  };