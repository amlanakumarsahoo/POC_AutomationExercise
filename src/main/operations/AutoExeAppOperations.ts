export interface AutoExeAppOperations {
    //navigate(): Promise<void>;
    getRepoURL(): Promise<string>;
    getFooterInfo(): Promise<string>;
}
