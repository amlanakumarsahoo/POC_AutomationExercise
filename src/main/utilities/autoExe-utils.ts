import { HomePageOperations } from "../operations/HomePageOperations";
import { HomePage } from "../web-implementation/HomePage";
import { Page } from "@playwright/test";
import { SignUpLoginPage } from "../web-implementation/SignUpLoginPage";
import { SignUpLoginPageOperations } from "../operations/SignUpLoginPageOperations";
// import { getTestConfig } from "../test-config";
// import { TestHelpers } from "./test-helpers";
import { ContactusOperations } from "../operations/ContactusOperations";
import { ContactUsPage } from "../web-implementation/ContactUsPage";
import { TestCasePage } from "../web-implementation/TestCasePage";
import { TestCasePageOperations } from "../operations/TestCasePageOperations";
import { ProductsPageOperations } from "../operations/ProductsPageOperations";
import { ProductsPage } from "../web-implementation/ProductsPage";
import { CartPage } from "../web-implementation/CartPage";
import { CartPageOperations } from "../operations/CartPageOperations";

// export function getAutoExeUrl(): string {
//     // Get URL from config or environment
//     const config = getTestConfig();
//     return config.baseUrl || process.env.BASE_URL || 'http://automationexercise.com';
// }

export async function getAutoExeApp(page: Page): Promise<HomePageOperations> {
    return await HomePage.create(page);
}

export async function getSignUpLoginApp(page: Page): Promise<SignUpLoginPageOperations> {
    return await SignUpLoginPage.create(page);
}

export async function getContactUsApp(page: Page): Promise<ContactusOperations> {
    return await ContactUsPage.create(page);
}

export async function getTestCaseApp(page: Page): Promise<TestCasePageOperations> {
    return await TestCasePage.create(page);
}

export async function getProductsPageApp(page: Page): Promise<ProductsPageOperations> {
    return await ProductsPage.create(page);
}

export async function getCartPageApp(page: Page): Promise<CartPageOperations> {
    return await CartPage.create(page);
}

// Common test data generators
export const testData = {
    validUser: {
        email: 'amlana@gmail.com',
        password: 'Password@1',
        name: 'Amlana Kumar Sahoo'
    },
    invalidUser: {
        email: 'xa@gmail.com',
        password: 'Password@1'
    }
};

// Environment utilities
export function isHeadless(): boolean {
    return process.env.HEADLESS === 'true';
}

export function getBrowserType(): string {
    return process.env.BROWSER || 'chromium';
}

export function getTimeout(): number {
    return parseInt(process.env.TIMEOUT || '30000');
}


