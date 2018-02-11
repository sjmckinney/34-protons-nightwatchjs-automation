var homeCommands = {
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
    url: function() {
        console.log("Launching url: " + this.api.launch_url);
        return this.api.launch_url;
    },
    commands: [homeCommands],
    elements: {
        inputDelayField: { selector: '#inputDelay' },
        checkbox1: {selector: '#checkbox1'},
        checkbox2: {selector: '#checkbox2'},
        radioUpper: {selector: '#upper'},
        radioLower: {selector: '#lower'}
    }
};
