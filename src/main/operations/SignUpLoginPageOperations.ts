export interface SignUpLoginPageOperations {
    doSignUpLogin(): Promise<void|null>;
    getUserName(username: string): Promise<void>;
    getFreshUserName(username: string): Promise<void>;
    getEmailAddress(emailAddress: string): Promise<void>;
    getFreshEmailAddress(emailAddress: string): Promise<void>;
    doSignUp(): Promise<void>;
    verifyCreationOfNewUser(): Promise<boolean | null>;
    getUserPassword(): Promise<void>;
    getUserDOB(): Promise<void>;
    getSignUpNewsLetter(): Promise<void>;
    getReceiveSpecialOffers(): Promise<void>;
    getUserAddressInfo(country: string, state: string, city: string, zipCode: string, mobileNumber: string): Promise<void>;
    doSubmitForm(): Promise<void>;
    getAccountCreatedConfirmation(): Promise<boolean | null>;
    doContinue(): Promise<void>;
    getLoggedInUser(): Promise<string | null>;
    deleteAccount(): Promise<void>;
    getAccountDeletedConfirmation(): Promise<boolean | null>;
    getUserLoginInfo(emailAddress: string, password: string): Promise<void>;
    verifyLoggedInUser(): Promise<boolean | null>;
    getLoginFailedConfirmation(): Promise<boolean | null>;
    logout(): Promise<void>;
    getAlreadyExistEmail(): Promise<string | null>;
    createAccount(): Promise<void>;

}