var usernameFieldId = '#username';
var passwordFieldId = '#password';
var username = 'user', password = '123';
var loginCommands = {
    'loginAsDefaultUser': function () {
        return this.waitForElementVisible('@userNameField',
                                    2000,
                                    function () {
                                        this.setValue(usernameFieldId, username);
                                        this.setValue(passwordFieldId, password);
                                        console.log("Setting username and password to " + username + " and " + password);
                                    }),
                                    'Failed to set username and password values'
        },
    'submitLoginForm': function () {
        this.submitForm('@loginForm', function () {
            console.log("Submitting login form");
        })
            .waitForElementNotPresent('@loginForm', 6000);
        return this.api.page.home();
        }
};

module.exports = {
    url: function() {
        var targetPage = 'login.php';
        console.log("Launching url: " + this.api.launch_url + targetPage);
        return this.api.launch_url + targetPage;
        },
    commands: [loginCommands],
    elements: {
        userNameField: { selector: usernameFieldId },
        passwordField: { selector: passwordFieldId },
        loginForm: { selector: '#login' },
        submitBtn: { selector: 'input[name=submit]' }
    }
};
