import { BasePage } from "./BasePage";
import { TestCasePageOperations } from "../operations/TestCasePageOperations";
import { Locator, Page } from "@playwright/test";

export class TestCasePage extends BasePage implements TestCasePageOperations {
    private readonly testCasesTab: Locator;
    private readonly testCasesPageTitle: Locator;
    constructor (page:any){
        super();
        this.page = page;
        this.testCasesTab = page.getByRole('link', { name: ' Test Cases' })
        this.testCasesPageTitle = page.getByRole('link', { name: ' Test Cases' })
    }
    //Create instance of TestCasePage
    static create(page: Page): TestCasePage {
        return new TestCasePage(page);
    }
    //Navigate to test cases page
    async navigateToTestCase(): Promise<void> {
        await this.testCasesTab.click();
    }
    //Get test cases page title
    async getTestCaseTitle(): Promise<string|null> {
        return this.testCasesPageTitle.textContent();
    }
}
