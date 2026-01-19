import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { SignUpLoginPageOperations } from "../operations/SignUpLoginPageOperations";
import { faker } from "@faker-js/faker";

export class SignUpLoginPage extends BasePage implements SignUpLoginPageOperations {
    private readonly signupBtn: Locator;
    static doSignUpLogin: any;
    private readonly userName: Locator;
    private readonly emailAddress: Locator;
    private readonly signUpButton: Locator;
    private readonly newCreatedUser: Locator;
    private readonly password: Locator;
    private readonly userDOB_day: Locator;
    private readonly userDOB_month: Locator;
    private readonly userDOB_year: Locator;
    private readonly signUpNewsLetter: Locator;
    private readonly receiveSpecialOffers: Locator;
    private readonly userAddressInfo: Locator;
    private readonly firstName: Locator;
    private readonly lastName: Locator;
    private readonly company: Locator;
    private readonly address1: Locator;
    private readonly address2: Locator;
    private readonly country: Locator;
    private readonly state: Locator;
    private readonly city: Locator;
    private readonly zipCode: Locator;
    private readonly mobileNumber: Locator;
    private readonly createAccountButton: Locator;
    private readonly accountCreatedConfirmation: Locator;
    private readonly continueButton: Locator;
    private readonly loggedInUser: Locator;
    private readonly deleteAccountButton: Locator;
    private readonly accountDeletedConfirmation: Locator;
    private readonly loginEmailAddress: Locator;
    private readonly loginPassword: Locator;
    private readonly loginButton: Locator;
    private readonly loginFailedConfirmation: Locator;
    private readonly logoutButton: Locator;
    private readonly alreadyExistEmail: Locator;
    private readonly loggedInUserText: Locator;

    constructor(page: any) {
        super();
        this.page = page;
        this.signupBtn=this.page.getByRole('link', { name: ' Signup / Login' })
        this.userName = page.getByRole('textbox', { name: 'Name' })
        this.emailAddress = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address')
        this.signUpButton = page.locator('[data-qa="signup-button"]');
        this.newCreatedUser = page.locator("#name");
        this.password = page.locator("#password");
        this.userDOB_day = page.locator("#days");
        this.userDOB_month = page.locator("#months");
        this.userDOB_year = page.locator("#years");
        this.signUpNewsLetter = page.locator("#newsletter");
        this.receiveSpecialOffers = page.locator("#optin");
        this.userAddressInfo = page.locator("#address");
        this.firstName = page.locator("#first_name");
        this.lastName = page.locator("#last_name");
        this.company = page.locator("#company");
        this.address1 = page.locator("#address1");
        this.address2 = page.locator("#address2");
        this.country = page.locator("#country");
        this.state = page.locator("#state");
        this.city = page.locator("#city");
        this.zipCode = page.locator("#zipcode");
        this.mobileNumber = page.locator("#mobile_number");
        this.createAccountButton = page.locator("[data-qa='create-account']");
        this.accountCreatedConfirmation = page.locator("[data-qa='account-created']");
        this.continueButton = page.locator("[data-qa='continue-button']");
        this.loggedInUser = page.locator(".navbar-nav");
        this.deleteAccountButton = page.locator("//a[@href='/delete_account']");
        this.accountDeletedConfirmation = page.locator("[data-qa='account-deleted']");
        this.loginEmailAddress = page.locator("form").filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
        this.loginPassword = page.locator("form").filter({ hasText: 'Login' }).getByPlaceholder('Password')
        this.loginButton = page.locator("form").filter({ hasText: 'Login' }).getByRole('button', { name: 'Login' })
        this.loginFailedConfirmation = page.locator("p:has-text('Your email or password is incorrect')");
        this.logoutButton = page.locator("//a[@href='/logout']");
        this.alreadyExistEmail = page.getByText('Email Address already exist!');
        this.loggedInUserText = page.locator('//i[@class="fa fa-user"]/parent::a');
    }   
    //Get user password
    async getUserPassword(): Promise<void> {
        await this.password.fill(faker.person.firstName()+"@123");
    }
    //Get user name
    async getUserName(username: string): Promise<void> {
        await this.userName.fill(username);
    }
    //Get email address
    async getEmailAddress(emailAddress: string): Promise<void> {
        await this.emailAddress.fill(emailAddress)
    }
    //Get fresh user name
    async getFreshUserName(username: string): Promise<void> {
        await this.userName.fill(username);
    }
    //Get fresh email address
    async getFreshEmailAddress(emailAddress: string): Promise<void> {
        await this.emailAddress.fill(emailAddress);
    }
    //Click on sign up button
    async doSignUp(): Promise<void> {
        await this.signUpButton.click();
    }
    //Create instance of SignUpLoginPage
    static async create(page: Page) {
        const instance = new SignUpLoginPage(page);
        return instance;
    }
    //Do sign up login
    async doSignUpLogin(): Promise<void | null> {
        await this.signupBtn.click();
    }
    //Verify creation of new user
    async verifyCreationOfNewUser(): Promise<boolean | null> {
        if(await this.newCreatedUser.isVisible()) {
            return true;
        }
        return false;
    }
    //Get user DOB
    async getUserDOB(): Promise<void>{
        // Wait for all DOB dropdowns to be ready
        await this.userDOB_day.waitFor({ state: 'visible' });
        await this.userDOB_month.waitFor({ state: 'visible' });
        await this.userDOB_year.waitFor({ state: 'visible' });
        
        // Generate day (1-31, matching available options)
        const day = faker.number.int({ min: 1, max: 31 }).toString();
        await this.userDOB_day.selectOption(day, { timeout: 10000 });
        
        // Small delay to ensure day selection is processed
        await this.page.waitForTimeout(500);
        
        // Generate month name (matching dropdown options)
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                       'July', 'August', 'September', 'October', 'November', 'December'];
        const month = faker.helpers.arrayElement(months);
        await this.userDOB_month.selectOption(month, { timeout: 10000 });
        
        // Small delay to ensure month selection is processed
        await this.page.waitForTimeout(500);
        
        // Generate year within available range (1900-2021)
        const year = faker.number.int({ min: 1900, max: 2021 }).toString();
        await this.userDOB_year.selectOption(year, { timeout: 10000 });
    }
    //Get sign up news letter
    async getSignUpNewsLetter(): Promise<void> {
        await this.signUpNewsLetter.click();
    }
    //Get receive special offers
    async getReceiveSpecialOffers(): Promise<void> {
        await this.receiveSpecialOffers.click();
    }
    //Get user address info
    async getUserAddressInfo(country: string, state: string, city: string, zipCode: string, mobileNumber: string): Promise<void> {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const company = faker.company.name();
        const address1 = faker.location.streetAddress();
        const address2 = faker.location.streetAddress();
        
        // Wait for form to be fully loaded and stable
        // await this.page.waitForLoadState('networkidle');
        
        // Fill form fields with proper waits and increased timeout
        await this.firstName.waitFor({ state: 'visible' });
        await this.firstName.fill(firstName, { timeout: 10000 });
        
        await this.lastName.waitFor({ state: 'visible' });
        await this.lastName.fill(lastName, { timeout: 10000 });
        
        await this.company.waitFor({ state: 'visible' });
        await this.company.fill(company, { timeout: 10000 });
        
        await this.address1.waitFor({ state: 'visible' });
        await this.address1.fill(address1, { timeout: 10000 });
        
        await this.address2.waitFor({ state: 'visible' });
        await this.address2.fill(address2, { timeout: 10000 });
        
        await this.country.waitFor({ state: 'visible' });
        await this.country.selectOption(country, { timeout: 10000 });
        
        await this.state.waitFor({ state: 'visible' });
        await this.state.fill(state, { timeout: 10000 });
        
        await this.city.waitFor({ state: 'visible' });
        await this.city.fill(city, { timeout: 10000 });
        
        await this.zipCode.waitFor({ state: 'visible' });
        await this.zipCode.fill(zipCode, { timeout: 10000 });
        
        const usPhone = faker.string.numeric(10);
        await this.mobileNumber.waitFor({ state: 'visible' });
        await this.mobileNumber.fill(usPhone, { timeout: 10000 });
        
        console.log(`User Address Information: First Name: ${firstName}, Last Name: ${lastName}, Company: ${company}, Address1: ${address1}, Address2: ${address2}, Country: ${country}, State: ${state}, City: ${city}, Zip Code: ${zipCode}, Mobile Number: ${usPhone}`);
    }
    //Do submit form
    async doSubmitForm(): Promise<void> {
        // await this.page.waitForLoadState('networkidle');
        await this.createAccountButton.click({ timeout: 5000 }); 
    }
    //Get account created confirmation
    async getAccountCreatedConfirmation(): Promise<boolean | null> {
        const confirmationText = await this.accountCreatedConfirmation.textContent();
        if (confirmationText?.includes('Account Created!')) {
            return true;
        }
        return false;
    }
    //Do continue
    async doContinue(): Promise<void> {
        await this.continueButton.click({ timeout: 9000 }); 
    }
    //Get logged in user
    async getLoggedInUser(): Promise<string | null> {
        const loggedInUserName = await this.loggedInUserText.textContent({ timeout: 5000 });
        return loggedInUserName;
    }
    // Delete Account
    async deleteAccount(): Promise<void> {
        await this.deleteAccountButton.click({ timeout: 9000 }); 
    }  
    //Get account deleted confirmation
    async getAccountDeletedConfirmation(): Promise<boolean | null> {
        const confirmationText = await this.accountDeletedConfirmation.textContent();
        if (confirmationText?.includes('Account Deleted!')) {
            return true;
        }
        return false;
    }
    //Get user login info
    async getUserLoginInfo(emailAddress: string, password: string): Promise<void> {
        await this.loginEmailAddress.fill(emailAddress,{timeout:5000});
        await this.loginPassword.fill(password,{timeout:5000});
        await this.loginButton.click({ timeout: 5000 }); 
    }
    //Verify logged in user
    async verifyLoggedInUser(): Promise<boolean | null> {
        try {
            const loggedInUserText = await this.loggedInUserText.textContent({ timeout: 5000 });
            if (loggedInUserText?.includes('Logged in as')) {
                return true;
            }
            return false;
        } catch (error) {
            console.log('Could not find logged in user text:', error);
            return false;
        }
    } 
    //Get login failed confirmation
    async getLoginFailedConfirmation(): Promise<boolean | null> {
        const failedConfirmationText = await this.loginFailedConfirmation.textContent({ timeout: 9000 });
        if (failedConfirmationText?.includes('Your email or password is incorrect')) {
            return true;
        }
        return false;
    }   
    //Do logout
    async logout(): Promise<void> {
        await this.logoutButton.click({ timeout: 5000 }); 
    }
    //Get already exist email
    async getAlreadyExistEmail(): Promise<string | null> {
        const alreadyExistEmailText = await this.alreadyExistEmail.textContent({ timeout: 9000 });
        return alreadyExistEmailText;
    }
    async createAccount(): Promise<void> {
        // Implementation for creating account
        // This method should contain the logic to create an account
        // using the data that was previously filled in other steps
        
        // Generate fake data for account creation
        const username = faker.person.firstName();
        const emailAddress = faker.internet.email();
        const country = "United States";
        const state = faker.location.state();
        const city = faker.location.city();
        const zipCode = faker.location.zipCode();
        const mobileNumber = faker.phone.number();
        
        await this.getUserName(username);
        await this.getEmailAddress(emailAddress);
        await this.doSignUp();
        await this.getUserPassword();
        await this.getSignUpNewsLetter();
        await this.getReceiveSpecialOffers();
        await this.getUserAddressInfo(country, state, city, zipCode, mobileNumber);
        await this.doSubmitForm();
        await this.doContinue();
    }
    
}