var config = require('../../nightwatch.conf.js');

module.exports = {'Guinea Pig Assert Title': function(browser) {
			browser
			  .url('https://saucelabs.com/test/guinea-pig')
			  .waitForElementVisible('body')
			  .assert.title('I am a page title - Sauce Labs')
			  .saveScreenshot('guinea-pig-test.png')
			  .end();
			}
		};
