const {
    Given,
    When,
    Then
} = require('cucumber');

const webdriver = require('selenium-webdriver');
const browser = new webdriver.Builder()
  .withCapabilities({'browserName': 'chrome' })
  .build();

Given(/^I am on the (\w+) page$/, (page) => {
    browser.url(`https://the-internet.herokuapp.com/${page}`);
});

When(/^I login with (\w+) and (.+)$/, (username, password) => {
    $('#username').setValue(username);
    $('#password').setValue(password);
    $('button[type="submit"]').click();
});

Then(/^I should see a flash message saying (.*)$/, (message) => {
    expect($('#flash')).toBeExisting();
    expect($('#flash')).toHaveTextContaining(message);
});