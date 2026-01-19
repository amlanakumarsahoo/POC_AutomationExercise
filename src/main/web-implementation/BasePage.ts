import { AutoExeAppOperations } from "@src/main/operations/AutoExeAppOperations";
export class BasePage implements AutoExeAppOperations {
    protected page: any; // Assuming you have a page object from Playwright or similar
    //Get repo URL
    async getRepoURL(): Promise<string> {
        const repoUrl = await this.page.locator('a[href*="github"]').getAttribute('href');
        return repoUrl || '';
    }
    //Get footer info
    async getFooterInfo(): Promise<string> {
        const footerText = await this.page.locator('footer').textContent();
        return footerText?.trim() || '';
    }
}   