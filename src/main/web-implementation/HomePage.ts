import { HomePageOperations } from "@src/main/operations/HomePageOperations";
import { BasePage } from "@src/main/web-implementation/BasePage";
import { Page, Locator } from '@playwright/test';
import { faker } from "@faker-js/faker";
export class HomePage extends BasePage implements HomePageOperations {
    //private readonly page;
    private readonly subTitleSelector: Locator; // data-testid = subtitle
    private readonly titleSelector: Locator;
    private readonly exampleSelector: Locator;
    private readonly signupSelector: Locator;
    private readonly subscriptionHeaderSelector: Locator;
    private readonly emailIdSelector: Locator;
    private readonly subscribeButtonSelector: Locator;
    private readonly subscriptionMessageSelector: Locator;
    private readonly viewProductSelector: Locator;
    constructor(page: any) {
        super();
        // Add null/undefined check for page parameter
        if (!page) {
            throw new Error('Page parameter cannot be null or undefined in HomePage constructor');
        }

        this.page = page;
        this.titleSelector = page.locator('//meta[@name="google-site-verification"]/following-sibling::title'); // data-testid = 'home-title'
        this.subTitleSelector = page.locator('h2'); // data-testid = 'home-subtitle'
        this.exampleSelector = page.locator('#content > ul > li > a');
        this.signupSelector = page.locator('//*[@id="header"]/div/div/div/div[2]/div/ul/li[4]/a');  
        this.subscriptionHeaderSelector = page.getByRole('heading', { name: 'Subscription' });
        this.emailIdSelector = page.getByRole('textbox', { name: 'Your email address' })
        this.subscribeButtonSelector = page.getByRole('button', { name: '' });
        this.subscriptionMessageSelector = page.getByText('You have been successfully')
        this.viewProductSelector = page.getByRole('link', { name: ' View Product' }).first();
    }
    doSignup(): Promise<void | null> {
        this.signupSelector.click();
        this.page.getUrl();
        return this.page.waitForNavigation({ waitUntil: 'domcontentloaded' });
    }
    // Factory method - Only Holds good in Async Libraries
    static async create(page: Page) {
        const instance = new HomePage(page);
        // Do async initialization here (navigation)
        await instance.navigate();
        return instance;
    }
    //Navigate to home page
    async navigate(): Promise<void> {
        try {
            console.log('🌐 Starting navigation to automationexercise.com...');
            
            // Navigate to automation exercise website with explicit timeout
            await this.page.goto('https://automationexercise.com/', {
                waitUntil: 'domcontentloaded',
                timeout: 60000 // 60 seconds timeout
            });
            
            console.log('✅ Navigation completed successfully');
            
            // Wait for page to be fully loaded
            await this.page.waitForLoadState('domcontentloaded');
            console.log('✅ DOM content loaded');
            
        } catch (error: any) {
            console.error('❌ Navigation failed:', error);
            throw new Error(`Failed to navigate to automationexercise.com: ${error?.message || error}`);
        }
    }
    //Get footer text
    getFooterText(): Promise<string | null> {
        throw new Error("Method not implemented.");
    }
    //Get subtitle
    async getSubTitle(): Promise<string | null> {
        await this.page.waitForLoadState('domcontentloaded');
        return this.subTitleSelector.textContent();
    }
    //Get available examples
    async getAvailableExamples(): Promise<string[] | null> {
        await this.page.waitForLoadState('domcontentloaded');
        return this.exampleSelector.allTextContents();
    }
    //Get title
    async getTitle(): Promise<string | null> {
        // Implementation to get the title from the home page
        //await this.page.waitForLoadState('domcontentloaded');
        return this.titleSelector.textContent();
    }
    //Get subscription header
    async getSubscriptionHeader(): Promise<boolean | null> {
        return this.subscriptionHeaderSelector.isVisible();
    }
    //Enter email id and click subscribe button
    async enterEmailIdAndClickSubscribeButton(): Promise<void> {
        await this.emailIdSelector.fill(faker.internet.email());
        await this.subscribeButtonSelector.click();
    }
    //Get subscription message
    async getSubscriptionMessage(): Promise<string | null> {
        return this.subscriptionMessageSelector.textContent();
    }
    //Click on view product
    async clickOnViewProduct(): Promise<void> {
        await this.viewProductSelector.click();
    }
    //Click on arrow at bottom right side to move upward
    async clickOnScrollUpButton(): Promise<void> {
        await this.page.keyboard.press('ArrowUp');
    }
    //Click on arrow at bottom right side to move upward
    async clickOnScrollUpButtonWithoutArrow(): Promise<void> {
        await this.page.mouse.wheel(0, -1000);
    }
}


