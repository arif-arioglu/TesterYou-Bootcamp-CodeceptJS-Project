Feature('login_test');

Scenario('successful login', ({ I }) => {
    I.amOnPage('http://automationpractice.com');
    I.click('Sign in'); // on the rightside of the navbar
    I.fillField('email', 'ariogluarifcan@gmail.com'); //email
    I.fillField('passwd', '987654321'); //password
    I.click('SubmitLogin'); //button
    I.see('My account');

});
