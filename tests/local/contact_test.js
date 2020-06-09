module.exports = {
    'contact test' : function (browser) {
      browser
        .url('http://localhost:3000/contact')
        .waitForElementVisible('body', 1000)
        .assert.containsText('body', 'Do you have a problem?')
        .end();
    }
  };