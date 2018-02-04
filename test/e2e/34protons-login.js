var config = require('../../nightwatch.conf.js');

this.loginTestUsingExpect = function (browser) {
    var loginPage = browser.page.login();
    loginPage.navigate();
    loginPage.loginAsDefaultUser();
    loginPage.submitLoginForm() //returns login page object
             .expect.element('@loginForm').to.not.be.present.after(5000);

    var homePage = browser.page.home();
    homePage.waitForElementVisible('@inputDelayField', 1000);
    browser.end();
}

this.loginTestUsingAssert = function (browser) {
    var myResult;
    var loginPage = browser.page.login();
    loginPage.navigate();
    loginPage.loginAsDefaultUser();
    loginPage.submitLoginForm();
    browser.waitForElementNotPresent('id', 'login', 5000, function(result) {
        myResult = result;
    })
    .perform(function () { //allows debug message to be printed.
        console.log('my result is : ', myResult);
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
