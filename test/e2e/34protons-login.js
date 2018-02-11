var config = require('../../nightwatch.conf.js');
var loginFormTimeout = 6000;

this.loginTestUsingExpect = function (browser) {
    var loginPage = browser.page.login();
    loginPage.navigate();
    loginPage.loginAsDefaultUser();
    var homePage = loginPage.submitLoginForm();
    loginPage.expect.element('@loginForm').to.not.be.present;//.after(loginFormTimeout);

    homePage.waitForElementVisible('@inputDelayField', 1000);
    browser.end();
}

this.loginTestUsingAssert = function (browser) {
    var myResult;
    var loginPage = browser.page.login();
    loginPage.navigate();
    loginPage.loginAsDefaultUser();
    loginPage.submitLoginForm();
    browser.waitForElementNotPresent('id', 'login', loginFormTimeout, function(result) {
        myResult = result;
        console.log("Current time is:", new Date().getTime());
        console.log("My result is:", result);
    })
    .perform(function () { //allows debug message to be printed.
        //console.log("Current time is:", new Date().getTime());
        console.log('my result is: ', myResult);
    });

    var homePage = browser.page.home();
    homePage.waitForElementVisible('@inputDelayField', 1000);
    browser.end();
}

/*
this.dragObjectTest = function (browser) {
    var homepage = browser.page.home();
    homepage.isSelectedRadioBtn()
        .ex

    browser.end();
}*/
