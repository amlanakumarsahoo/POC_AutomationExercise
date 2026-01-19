import { ContactusOperations } from "@src/main/operations/ContactusOperations";
import { expect } from "@playwright/test";
import { getContactUsApp } from "@src/main/utilities/autoExe-utils";
import { Given, When, Then } from "@cucumber/cucumber";

export let contactUsPage:ContactusOperations;

When('User Clicks on Contact Us', { timeout: 60000 }, async function () {
    const page = (global as any).page;
    contactUsPage = await getContactUsApp(page) as ContactusOperations;
    await contactUsPage.navigateToContactUs();
});

Then('user should be redirected to the contact us page', async function () {
    let actualResult = await contactUsPage.getContactUsTitle();
    expect(actualResult).toBeTruthy();  
});

When('User fills the contact us form', async function (dataTable) {
    const data = dataTable.hashes()[0]; // Get first row of data table
    await contactUsPage.fillContactUsForm(
        data.Name, 
        data.Email, 
        data.Subject, 
        data.Message);
});

When('User attaches a file', async function (dataTable) {
    const data = dataTable.hashes()[0]; // Get first row of data table
    await contactUsPage.attachFile(data.filepath);
});

When('User submits the contact us form', { timeout: 60000 }, async function () {
    await contactUsPage.submitContactUsForm();
});

Then('user should be able to press ok button', async function () {
    await contactUsPage.doPressOk();
});

Then('user should be able to verify contact us confirmation', async function () {
    let actualResult = await contactUsPage.getContactUsConfirmation();
    expect(actualResult).toBeTruthy();  
});

When('user navigate to home page', async function () {
    await contactUsPage.navigateToHomePage();
});

Then('user should be able to verify home page title', async function () {
    let actualResult = await contactUsPage.getHomePageTitle();
    expect(actualResult).toBe('Automation Exercise');
});
