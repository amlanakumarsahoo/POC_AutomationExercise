import { Given, When, Then, DataTable } from '@cucumber/cucumber';
import { expect, Page } from '@playwright/test';
import { ProductsPageOperations } from '../../main/operations/ProductsPageOperations';
import { getProductsPageApp } from '../../main/utilities/autoExe-utils';
import { productsPage } from './home_page_steps';
import { verify } from 'crypto';

let page = (global as any).page;
// Step: Navigate to Products tab
When('User navigates to Products tab', async function () {
    page = (global as any).page;
    const localProductsPage = await getProductsPageApp(page) as ProductsPageOperations;
    await localProductsPage.navigateToProductsPage();
});

// Step: Verify redirect to All Products page
Then('User should be redirected to All Products page', async function () {
    const page = (global as any).page;
    const localProductsPage = await getProductsPageApp(page) as ProductsPageOperations;
    expect(await localProductsPage.verifyAllProductsPage()).toBe('All Products');
});

// Step: Verify product list is not empty
Then('User verifies product list', async function () {
    const page = (global as any).page;
    const localProductsPage = await getProductsPageApp(page) as ProductsPageOperations;
    expect(await localProductsPage.verifyProductListCount()).toBeGreaterThan(0);
});

// Step: Click on first product
Then('User clicks on first product', async function () {
    const page = (global as any).page;
    const localProductsPage = await getProductsPageApp(page) as ProductsPageOperations;
    await localProductsPage.viewFirstProduct();
});

// Step: Verify product details page
Then('User landed to product detail page', async function () {
    const page = (global as any).page;
    const localProductsPage = await getProductsPageApp(page) as ProductsPageOperations;
    expect(await localProductsPage.verifyProductDetails()).toBeTruthy();
});

// Step: Verify product attributes
Then('User verifies product name, category, price, availability, condition, brand', async function () {
    const page = (global as any).page;
    const localProductsPage = await getProductsPageApp(page) as ProductsPageOperations;
    expect(await localProductsPage.verifyProductDetails()).toBeTruthy();
});

// Step: Search for product
Then('User search for product {string}', async function (productName: string) {
    const page = (global as any).page;
    const localProductsPage = await getProductsPageApp(page) as ProductsPageOperations;
    await localProductsPage.searchProduct(productName);
});

// Step: Increase product quantity
Then('User increse the product quantity to {string}', async function (quantityStr: string) {
    const quantity = parseInt(quantityStr, 10);
    const updatedQuantity = await productsPage.updateQuantity(quantity);
    console.log(`Product quantity updated to: ${updatedQuantity}`);
});

// Step: Click on Add to cart button
Then('User click on Add to cart button', async function () {
    await productsPage.addToCart();
});

Then('User select brand from products page {string}', async function (brand: string) {
    await productsPage.selectBrandFromProductsPage(brand);
});

Then('selected brand products should be displayed {string}', async function (expectedTitle: string) {
    const actualTitle = await productsPage.verifySelectedBrandProducts();
    expect(actualTitle).toContain(expectedTitle);
});

Then('User verifies {string} is visible', async function (expectedText: string) {
    const page = (global as any).page;
    const localProductsPage = await getProductsPageApp(page) as ProductsPageOperations;
    const actualPageTitle = await localProductsPage.verifySearchedProductsPage();
    expect(actualPageTitle).toContain(expectedText);
});

Then('User verifies product details', async function () {
    const page = (global as any).page;
    const localProductsPage = await getProductsPageApp(page) as ProductsPageOperations;
    expect(await localProductsPage.verifySearchResultsProductDetails()).toBeTruthy();
});

Then('User write review details', async function (dataTable: DataTable) {
    const data = dataTable.hashes()[0]; // Get first row of data table
    await productsPage.writeReviewDetails(data.name, data.email, data.review);
});
Then('User submit review', async function () {
    await productsPage.submitReview();
});
Then('User verifies review submitted', async function () {
    expect(await productsPage.verifyReviewSubmitted()).toBeTruthy();
});

// Step: Add recommended items to cart
Then('User add recommended items to cart', async function () {
    const page = (global as any).page;
    const localProductsPage = await getProductsPageApp(page) as ProductsPageOperations;
    await localProductsPage.addRecommendedItemsToCart();
});

// Step: Verify recommended items
Then('User verify "RECOMMENDED ITEMS" is visible', async function () {
    const page = (global as any).page;
    const localProductsPage = await getProductsPageApp(page) as ProductsPageOperations;
    expect(await localProductsPage.verifyRecommendedItems()).toBeTruthy();
});

    // Step: User click on view cart link
    Then('User click on view cart link', async function () {
        const page = (global as any).page;
        const localProductsPage = await getProductsPageApp(page) as ProductsPageOperations;
        await localProductsPage.clickOnViewCartLink();
    });
    
    Then('User verify "Category" is visible', async function () {
        const page = (global as any).page;
        const localProductsPage = await getProductsPageApp(page) as ProductsPageOperations;
        expect(await localProductsPage.verifyCategoryHeader()).toContain('Category');
    });
    Then('User click on women category', async function () {
        const page = (global as any).page;
        const localProductsPage = await getProductsPageApp(page) as ProductsPageOperations;
        await localProductsPage.selectWomenCategory();
    });
    Then('User click on dress subcategory', async function () {
        const page = (global as any).page;
        const localProductsPage = await getProductsPageApp(page) as ProductsPageOperations;
        await localProductsPage.selectDressSubcategory();
    });
    Then('User click on men category', async function () {
        const page = (global as any).page;
        const localProductsPage = await getProductsPageApp(page) as ProductsPageOperations;
        await localProductsPage.selectMenCategory();
    });
    Then('User click on tshirts subcategory', async function () {
        const page = (global as any).page;
        const localProductsPage = await getProductsPageApp(page) as ProductsPageOperations;
        await localProductsPage.selectTshirtsSubcategory();
    });
    
    Then('verify women dress subcategory products are visible', async function () {
        const page = (global as any).page;
        const localProductsPage = await getProductsPageApp(page) as ProductsPageOperations;
        expect(await localProductsPage.verifyWomenDressSubCategoryProductsAreVisible()).toBeTruthy();
    });
    
    Then('verify men tshirts subcategory products are visible', async function () {
        const page = (global as any).page;
        const localProductsPage = await getProductsPageApp(page) as ProductsPageOperations;
        expect(await localProductsPage.verifyMenTshirtsSubCategoryProductsAreVisible()).toBeTruthy();
    });
    
