import { SignUpLoginPage } from "@src/main/web-implementation/SignUpLoginPage";
import { expect } from "@playwright/test";
import { SignUpLoginPageOperations } from "@src/main/operations/SignUpLoginPageOperations";
import { getSignUpLoginApp } from "@src/main/utilities/autoExe-utils";
import { faker } from "@faker-js/faker";
import { Given, When, Then, DataTable } from "@cucumber/cucumber";

let signUpLoginPage: SignUpLoginPageOperations;
When('User Clicks on Signup', async function () {
    const page = (global as any).page;
    signUpLoginPage = await getSignUpLoginApp(page) as SignUpLoginPageOperations;
    await signUpLoginPage.doSignUpLogin();
});

Then('user should be redirected to the signup page', async function () {
    const page = (global as any).page;
    expect(await page.url().toLowerCase()).toContain('login');
});

Then('user should be able to enter the username {string}', async function (username: string) {
    await signUpLoginPage.getUserName(username);
});

Then('user should be able to enter the fresh user', async function () {
    const username = faker.person.firstName();
    await signUpLoginPage.getFreshUserName(username);
});

Then('user should be able to enter the email address {string}', async function (emailaddress: string) {
    await signUpLoginPage.getEmailAddress(emailaddress);
});

Then('user should be able to enter the fresh email address', async function () {
    const emailaddress = faker.internet.email();
    await signUpLoginPage.getFreshEmailAddress(emailaddress);
});

Then('user should be able to click on signup button', async function () {
    const page = (global as any).page;
    signUpLoginPage = await getSignUpLoginApp(page) as SignUpLoginPageOperations;
    // First navigate to signup/login page
    await signUpLoginPage.doSignUpLogin();
    // Fill in fresh user name and email
    await signUpLoginPage.getFreshUserName(faker.person.firstName());
    await signUpLoginPage.getFreshEmailAddress(faker.internet.email());
    // Then click the signup button
    await signUpLoginPage.doSignUp();
});

Then('user should be able to verify creation of new user', async function () {
    const newCreatedUser = await signUpLoginPage.verifyCreationOfNewUser();
    expect(newCreatedUser).toBeTruthy();
});
// Then('user fill the user information', async function () {
//     await signUpLoginPage.fillUserInfo();
// });
Then('user fill the user password information', async function () {
    await signUpLoginPage.getUserPassword();
});
Then('user fill the user DOB information', async function () {
    await signUpLoginPage.getUserDOB();
});
Then('user fill the user news letter information', async function () {
    await signUpLoginPage.getSignUpNewsLetter();
});
Then('user fill the user special offers information', async function () {
    await signUpLoginPage.getReceiveSpecialOffers();
});
Then('user fill the user address information', async function (dataTable: DataTable) {
    const data = dataTable.hashes()[0];
    await signUpLoginPage.getUserAddressInfo(
        data.country,
        data.state,
        data.city,
        data.zipCode,
        data.mobileNumber
    );
});
Then('user should be able to submit the signup form', async function () {
    await signUpLoginPage.doSubmitForm();
});
Then('user should be able to verify account created confirmation', async function () {
    const accountCreatedConfirmation = await signUpLoginPage.getAccountCreatedConfirmation();
    expect(accountCreatedConfirmation).toBeTruthy();
});
Then('user clicks on continue button', async function () {
    await signUpLoginPage.doContinue();
});
Then('user should be able to verify loggedin user', async function () {
    expect(await signUpLoginPage.getLoggedInUser()).toContain('Logged in as');
});
Then('user should able to delete the account', async function () {
    await signUpLoginPage.deleteAccount();
});
Then('user verify the account deleted confirmation', async function () {
    const accountDeletedConfirmation = await signUpLoginPage.getAccountDeletedConfirmation();
    expect(accountDeletedConfirmation).toBeTruthy();
});

Then('user login with correct email and password', async function (dataTable) {
    const data = dataTable.hashes()[0]; // Get first row of data table
    await signUpLoginPage.getUserLoginInfo(
        data.emailaddress,
        data.password
    );
});
Then('user login with incorrect email and password', async function (dataTable) {
    const data = dataTable.hashes()[0]; // Get first row of data table
    await signUpLoginPage.getUserLoginInfo(
        data.emailaddress,
        data.password
    );
});
Then('user should be able to verify login failed confirmation', async function () {
    const loginFailedConfirmation = await signUpLoginPage.getLoginFailedConfirmation();
    expect(loginFailedConfirmation).toBeTruthy();
});

Then('user logout from the application', async function () {
    await signUpLoginPage.logout(); 
});

Then('user should be on login page', async function () {
    const page = (global as any).page;
    const currentUrl = page.url();
    const pageTitle = await page.title();
    expect(currentUrl.toLowerCase()).toContain('login');
    expect(pageTitle.toLowerCase()).toContain('login');
});

Then('user validate the error message {string}', async function (errormessage: string) {
    const emailAlreadyExist = await signUpLoginPage.getAlreadyExistEmail();
    expect(emailAlreadyExist).toContain(errormessage);
});

Then('user should be able to enter existing username {string}', async function (username: string) {
    await signUpLoginPage.getUserName(username);
});
Then('user should be able to enter existing email address {string}', async function (emailaddress: string) {
    await signUpLoginPage.getEmailAddress(emailaddress);
});

Then('User signup and create account', {timeout: 10000}, async function (){
    const page = (global as any).page;
    signUpLoginPage = await getSignUpLoginApp(page) as SignUpLoginPageOperations;
    await signUpLoginPage.createAccount();
});
