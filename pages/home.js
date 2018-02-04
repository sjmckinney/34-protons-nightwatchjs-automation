var homeCommands = {
    'loginAsDefaultUser': function () {
        this.waitForElementVisible('@userNameField',
                                    2000,
                                    function () {
                                        this.setValue('#username', 'user');
                                        this.setValue('#password', '123');
                                    },
                                    'Failed to set username and password values'
                                    )
        return this;
        },
    'submitLoginForm': function () {
        this.submitForm('@loginForm');
        return this;
    },
    'isSelectedRadioBtn': function () {
        this.waitForElementVisible('@radioUpper',
                                    2000,
                                    function (response) {
                                        return this.elementIdSelected('#upper');
                                    },
                                    'Failed to determine if element was selected'
            )
        return this;
    }
};

module.exports = {
    url: 'https://www.34protons.co.uk/demo_2_0/',
    commands: [homeCommands],
    elements: {
        inputDelayField: { selector: '#inputDelay' },
        checkbox1: {selector: '#checkbox1'},
        checkbox2: {selector: '#checkbox2'},
        radioUpper: {selector: '#upper'},
        radioLower: {selector: '#lower'}
    }
};
