module.exports = {
    'detailsSegment test' : function (browser) {
      browser
        .url('http://localhost:3000/')
        .waitForElementVisible('body', 1000)
        .assert.visible('#details-text1')
        .assert.containsText('#details-text1', 'Install it like an application')
        .assert.visible('#details-text2')
        .assert.containsText('#details-text2', 'Easy join')
        .assert.visible('.center.aligned.twelve.wide.column > img')
        .assert.visible('.ui.horizontal.divider.header > a')
        .end();
    }
  };