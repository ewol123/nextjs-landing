module.exports = {
    'headingSegment test' : function (browser) {
      browser
        .url('http://localhost:3000/')
        .waitForElementVisible('body', 1000)
        .assert.containsText('body', 'Chat everywhere')
        .waitForElementVisible('.ui.huge.primary.button', 1000)
        .click('.ui.huge.primary.button')
        .waitForElementVisible('.ui.teal.center.aligned.header', 3000)
        .assert.visible('.info.icon')
        .end();
    }
  };