import { AutoExeAppOperations } from "./AutoExeAppOperations";
export interface HomePageOperations  extends AutoExeAppOperations{
    getTitle(): Promise<string|null>;
    getSubTitle(): Promise<string|null>;
    getAvailableExamples(): Promise<string[]|null>;
    getFooterText(): Promise<string|null>;
    getSubscriptionHeader(): Promise<boolean|null>;
    enterEmailIdAndClickSubscribeButton(): Promise<void>;
    getSubscriptionMessage(): Promise<string|null>;
    clickOnViewProduct(): Promise<void>;
    clickOnScrollUpButton(): Promise<void>;
    clickOnScrollUpButtonWithoutArrow(): Promise<void>;
}

