import { HomePageOperations } from '../../main/operations/HomePageOperations';
import { ProductsPageOperations } from '../../main/operations/ProductsPageOperations';
import { getAutoExeApp, getProductsPageApp } from '../../main/utilities/autoExe-utils';
import { expect, Page } from '@playwright/test';
import { Given, When, Then } from '@cucumber/cucumber';

export let homePage: HomePageOperations;
export let productsPage: ProductsPageOperations;
let actualResult: string | null;

// Use regular functions to access 'this'
Given('User Visits HomePage', { timeout: 60000 }, async function () {
    const page = (global as any).page;
    homePage = await getAutoExeApp(page) as HomePageOperations;
});

When('User Observes HomePage Title', async function () {
    actualResult = await homePage.getTitle();
});

Then('title should match {string}', async function (_arg: string) {
    expect(actualResult).toEqual(_arg);
});

When('User Observes sub Title', async function () {
    actualResult = await homePage.getSubTitle();
});

Then('sub title should match {string}', async function (_arg: string) {
    expect(actualResult).toEqual(_arg);
});

  When('Subscription should be visible', async function () {
    expect(await homePage.getSubscriptionHeader()).toBeTruthy();
});

When('User enters email id and clicks on subscribe button', async function () {
    await homePage.enterEmailIdAndClickSubscribeButton();
});

Then('User should be able to verify subscription message {string}', async function (_arg: string) {
    actualResult = await homePage.getSubscriptionMessage();
    expect(actualResult).toEqual(_arg);
}); 

Then('User click on view product from home page', async function() {
    await homePage.clickOnViewProduct();
    // Initialize productsPage object after navigating to product details
    const page = (global as any).page;
    productsPage = await getProductsPageApp(page) as ProductsPageOperations;
});

Then('User clicks on Scroll Up button with Arrow button', async function () {
    await homePage.clickOnScrollUpButton();
});

Then('User clicks on Scroll Up button without Arrow button', async function () {
    await homePage.clickOnScrollUpButtonWithoutArrow();
});
