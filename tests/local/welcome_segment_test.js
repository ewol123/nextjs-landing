module.exports = {
    'welcomeSegment test' : function (browser) {
      browser
        .url('http://localhost:3000/')
        .waitForElementVisible('body', 1000)
        .assert.containsText('body', 'We Help People')
        .waitForElementVisible('.ui.huge.button', 1000)
        .click('.ui.huge.button')
        .waitForElementVisible('.ui.teal.center.aligned.header', 3000)
        .assert.visible('.info.icon')
        .end();
    }
  };