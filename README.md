To run all tests in test directory execute the following code from the root of the project

*node_modules/.bin/nightwatch --config nightwatch.conf.js*

For verbose output add the *--verbose* flag.

A single test can be run by adding the *--test* flag and the path to the test file.

The *--env* and the required environment name will cause a different grouping of test settings to be used. The *default* group will be used if no other names are defined. 