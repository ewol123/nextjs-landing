module.exports = {
    'welcomeSegment test' : function (browser) {
      browser
        .url(`http://localhost:${process.env.BROWSERSTACK_PORT || 3000}/`)
        .waitForElementVisible('body', 1000)
        .assert.visible('#welcome-text1')
        .assert.containsText('#welcome-text1', 'We Help People')
        .waitForElementVisible('.ui.huge.button', 1000)
        .click('.ui.huge.button')
        .end();
    }
  };