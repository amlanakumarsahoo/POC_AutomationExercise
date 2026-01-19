import { ContactusOperations } from "../operations/ContactusOperations";
import { Locator, Page } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { BasePage } from "./BasePage";


export class ContactUsPage extends BasePage implements ContactusOperations {
    private readonly contactUsBtn: Locator;
    private readonly getInTouchFormTitle: Locator;
    private readonly name: Locator;
    private readonly email: Locator;
    private readonly subject: Locator;
    private readonly message: Locator;
    private readonly fileAttachment: Locator;
    private readonly submitButton: Locator;
    private readonly okButton: Locator;
    private readonly confirmationMessage: Locator;
    private readonly homePageBtn: Locator;

    constructor(page: any) {
        super();
        this.page = page;
        this.contactUsBtn = page.getByRole('link', { name: ' Contact us' });
        this.getInTouchFormTitle = page.getByRole('heading', { name: 'Get In Touch' });
        this.name = page.getByRole('textbox', { name: 'Name' });
        this.email = page.getByRole('textbox', { name: 'Email', exact: true });
        this.subject = page.getByRole('textbox', { name: 'Subject' });
        this.message = page.getByRole('textbox', { name: 'Your Message Here' });
        this.fileAttachment = page.getByRole('button', { name: 'Choose File' });
        this.submitButton = page.getByRole('button', { name: 'Submit' });
        this.okButton = page.getByRole('button', { name: 'OK' });
        this.confirmationMessage = page.getByRole('alert');
        this.homePageBtn = page.getByRole('link', { name: 'Home' });
    }
    
    static async create(page: Page) {
        const instance = new ContactUsPage(page);
        return instance;
    }
    //Navigate to contact us
    async navigateToContactUs(): Promise<void> {
        await this.contactUsBtn.click();
        await this.getInTouchFormTitle.waitFor({ state: 'visible', timeout: 10000 });
    }
    //Get contact us title
    async getContactUsTitle(): Promise<boolean | null> {
        return this.getInTouchFormTitle.isVisible();
    }
    //Fill contact us form
    async fillContactUsForm(Name: string, Email: string, Subject: string, Message: string): Promise<void | null> {
        await this.name.fill(Name);
        await this.email.fill(Email);
        await this.subject.fill(Subject);
        await this.message.fill(Message);
    
    }
    //Attach file
    async attachFile(filepath:string): Promise<void | null> {
        await this.fileAttachment.setInputFiles(filepath,{timeout: 10000});
    }
    //Submit contact us form
    async submitContactUsForm(): Promise<void | null> {
        await this.submitButton.click({timeout: 10000});
        await this.page.waitForTimeout(9000);
    }
    //Do press ok
    async doPressOk(): Promise<void | null> {
        await this.okButton.click({timeout: 10000});
    }
    //Get contact us confirmation
    async getContactUsConfirmation(): Promise<string | null> {
        return this.confirmationMessage.textContent();
    }
    //Navigate to home page
    async navigateToHomePage(): Promise<void> {
        await this.homePageBtn.click();
    }
    //Get home page title
    async getHomePageTitle(): Promise<boolean | null> {
        return this.page.title();
    }
}
