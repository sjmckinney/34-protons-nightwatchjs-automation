var config = require('../../nightwatch.conf.js');

this.demotest = function(browser) {
    var loginPage = browser.page.login();
    loginPage.navigate();
    loginPage.loginAsDefaultUser();
    loginPage.submitLoginForm()
        .expect.element('@loginForm').to.not.be.present.after(5000);

    var homePage = browser.page.home();
    homePage.waitForElementVisible('@inputDelayField', 1000);
    browser.end();
}