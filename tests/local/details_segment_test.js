module.exports = {
    'detailsSegment test' : function (browser) {
      browser
        .url('http://localhost:3000/')
        .waitForElementVisible('body', 1000)
        .assert.containsText('body', 'Install it like an application')
        .assert.containsText('body', 'Easy join')
        .assert.visible('.center.aligned.twelve.wide.column > img')
        .assert.visible('.ui.horizontal.divider.header > a', 1000)
        .end();
    }
  };