var usernameFieldId = '#username';
var passwordFieldId = '#password';
var loginCommands = {
    'loginAsDefaultUser': function () {
        return this.waitForElementVisible('@userNameField',
                                    2000,
                                    function () {
                                        this.setValue(usernameFieldId, 'user');
                                        this.setValue(passwordFieldId, '123');
                                    }),
                                    'Failed to set username and password values'
        },
    'submitLoginForm': function () {
        return this.submitForm('@loginForm')
                   .waitForElementNotPresent('@loginForm', 5000);
        }
};

module.exports = {
    url: 'https://www.34protons.co.uk/demo_2_0/login.php',
    commands: [loginCommands],
    elements: {
        userNameField: { selector: usernameFieldId },
        passwordField: { selector: passwordFieldId },
        loginForm: { selector: '#login' },
        submitBtn: { selector: 'input[name=submit]' }
    }
};
