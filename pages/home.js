var homeCommands = {
    'loginAsDefaultUser': function () {
        this.waitForElementVisible('@userNameField',
                                    2000,
                                    function () {
                                        this.setValue('#username', 'user');
                                        this.setValue('#password', '123');
                                    }),
                                    'Failed to set username and password values'
        return this;
        },
    'submitLoginForm': function () {
        this.submitForm('@loginForm');
        return this;
    }

};

module.exports = {
    url: 'https://www.34protons.co.uk/demo_2_0/',
    commands: [homeCommands],
    elements: {
        inputDelayField: { selector: '#inputDelay' }
    }
};
