export interface ProductsPageOperations {
    navigateToProductsPage(): Promise<void>;
    verifyAllProductsPage(): Promise<string>;
    verifyProductListCount(): Promise<number>;
    viewFirstProduct(): Promise<void>;
    verifyProductDetails(): Promise<boolean>;
    verifySearchResultsProductDetails(): Promise<boolean>;
    searchProduct(productName: string): Promise<void>;
    updateQuantity(quantity: number): Promise<number>;
    addToCart(): Promise<void>;
    selectBrandFromProductsPage(brand: string): Promise<void>;
    verifySelectedBrandProducts(): Promise<string>;
    verifySearchedProductsPage(): Promise<string>;
    writeReviewDetails(name: string, email: string, review: string): Promise<void>;
    submitReview(): Promise<void>;
    verifyReviewSubmitted(): Promise<boolean>;
    addRecommendedItemsToCart(): Promise<void>;
    verifyRecommendedItems(): Promise<boolean>;
    navigateToCartPage(): Promise<void>;
    clickOnViewCartLink(): Promise<void>;
    verifyCategoryHeader(): Promise<string>;
    selectWomenCategory(): Promise<void>;
    selectDressSubcategory(): Promise<void>;
    selectMenCategory(): Promise<void>;
    selectTshirtsSubcategory(): Promise<void>;
    verifyWomenDressSubCategoryProductsAreVisible(): Promise<boolean>;
    verifyMenTshirtsSubCategoryProductsAreVisible(): Promise<boolean>;
}