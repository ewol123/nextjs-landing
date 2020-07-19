module.exports = {
    'contact test' : function (browser) {
      browser
        .url(`http://localhost:${process.env.BROWSERSTACK_PORT || 3000}/contact`)
        .waitForElementVisible('body', 1000)
        .assert.visible('#contact-text1')
        .assert.containsText('#contact-text1', 'Do you have a problem?')
        .end();
    }
  };