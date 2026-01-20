import { Given, When, Then } from "@cucumber/cucumber";
import { getTestCaseApp } from "@src/main/utilities/autoExe-utils";
import { TestCasePageOperations } from "@src/main/operations/TestCasePageOperations";
import { expect } from "@playwright/test";
export let testCasePage:TestCasePageOperations;
import { TestWorld } from "@src/main/testworld";

When('User Clicks on Test Cases tab', async function (this:TestWorld) {
    testCasePage = await getTestCaseApp(this.page) as TestCasePageOperations;
    await testCasePage.navigateToTestCase();
});

Then('user should be redirected to the test case page', async function (this:TestWorld) {
    let actualResult = await testCasePage.getTestCaseTitle();
    expect(actualResult).toBeTruthy();  
});

Then('user verify the test case page title', async function (this:TestWorld) {
    let actualResult = await testCasePage.getTestCaseTitle();
    expect(actualResult).toContain('Test Cases');
});
