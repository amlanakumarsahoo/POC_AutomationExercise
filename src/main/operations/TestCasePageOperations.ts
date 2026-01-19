export interface TestCasePageOperations {
    navigateToTestCase(): Promise<void>;
    getTestCaseTitle(): Promise<string|null>;
}