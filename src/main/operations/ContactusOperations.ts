export interface ContactusOperations {
    navigateToContactUs(): Promise<void>;
    getContactUsTitle(): Promise<boolean|null>;
    fillContactUsForm(Name:string, Email:string, Subject:string, Message:string): Promise<void|null>;
    attachFile(filepath:string): Promise<void|null>;
    submitContactUsForm(): Promise<void|null>;
    doPressOk(): Promise<void|null>;
    getContactUsConfirmation(): Promise<string|null>;
    navigateToHomePage(): Promise<void>;
    getHomePageTitle(): Promise<boolean|null>;
}