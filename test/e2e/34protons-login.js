var config = require('../../nightwatch.conf.js');

this.demotest = function(browser) {
    browser
        .url('https://www.34protons.co.uk/demo_2_0/login.php')
        .waitForElementVisible('body')
        .setValue('#username', 'user')
        .setValue('#password', '123')
        .submitForm('#login')
        .expect.element('#login').to.not.be.present.after(5000);
        //browser.verify.elementPresent('#inputDelay1');
        browser.waitForElementVisible('#inputDelay', 6000);
        browser.end();
}