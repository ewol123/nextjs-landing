module.exports = {
    'headingSegment test' : function (browser) {
      browser
        .url(`http://localhost:${process.env.BROWSERSTACK_PORT || 3000}/`)
        .waitForElementVisible('body', 1000)
        .assert.visible('#heading-text1')
        .assert.containsText('#heading-text1', 'Chat everywhere')
        .waitForElementVisible('.ui.huge.primary.button', 1000)
        .click('.ui.huge.primary.button')
        .end();
    }
  };