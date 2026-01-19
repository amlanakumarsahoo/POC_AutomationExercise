import { expect, Locator, Page } from "@playwright/test";
import { ProductsPageOperations } from "../operations/ProductsPageOperations";
import { BasePage } from "./BasePage";

export class ProductsPage extends BasePage implements ProductsPageOperations {
    private readonly productsTab: Locator;
    private readonly productsPageHeader: Locator;
    private readonly productName: Locator;
    private readonly productCategory: Locator;
    private readonly productPrice: Locator;
    private readonly productAvailability: Locator;
    private readonly productCondition: Locator;
    private readonly productBrand: Locator;
    private readonly viewFirstProductBtn: Locator;
    private readonly productList: Locator;
    private readonly searchProductTextBox: Locator;
    private readonly searchProductBtn: Locator;
    private readonly productQuantityInput: Locator;
    private readonly addToCartBtn: Locator;
    private readonly productTitle: Locator;
    //Serach products page
    private readonly searchProductsPageProductName: Locator;
    private readonly searchProductsPageProductPrice: Locator;
    private readonly searchProductsPageAddToCartBtn: Locator;
    private readonly searchProductsPageViewProductBtn: Locator;
    private readonly writeYourReviewHeader: Locator;
    private readonly writeYourReviewName: Locator;
    private readonly writeYourReviewEmail: Locator;
    private readonly writeYourReviewReview: Locator;
    private readonly writeYourReviewSubmitBtn: Locator;
    private readonly writeYourReviewThankYou: Locator;
    private readonly recommendedItemsHeader: Locator;
    private readonly recommendedItemsAddToCartBtn: Locator;
    private readonly viewCartLink: Locator;
    private readonly categoryHeader: Locator;
    private readonly womenCategory: Locator;
    private readonly dressCategory: Locator;
    private readonly menCategory: Locator;
    private readonly tshirtsCategory: Locator;
    private readonly womenDressSubCategoryHeader: Locator;
    private readonly menTshirtsSubCategoryHeader: Locator;
    
    
    constructor(page: any) {
        super();
        this.page = page;
        this.productsTab = page.getByRole('link', { name: ' Products' });
        //this.productsPageHeader = page.getByRole('heading', { name: 'All Products' })
        this.productsPageHeader = page.locator('[class="title text-center"]').first();
        this.viewFirstProductBtn = page.getByRole('link', { name: ' View Product' }).first();
        this.productName = page.locator('.newarrival + h2');
        this.productCategory = page.locator('.newarrival ~ p').first();
        this.productPrice = page.getByText('Rs.');
        this.productAvailability = page.getByText('Availability: In Stock');
        this.productCondition = page.getByText('Condition: New');
        this.productBrand = page.getByText('Brand: Polo');
        this.productList = page.locator('.single-products');
        this.searchProductTextBox = page.getByRole('textbox', { name: 'Search Product' })
        this.searchProductBtn = page.getByRole('button', { name: '' })
        this.productQuantityInput = page.locator('#quantity');
        this.addToCartBtn = page.getByRole('button', { name: ' Add to cart' })
        this.productTitle = page.locator('.title.text-center');
        this.searchProductsPageProductPrice = page.getByRole('heading', { name: 'Rs.' }).nth(1)
        this.searchProductsPageProductName = page.getByText('Blue Top').nth(1)
        this.searchProductsPageAddToCartBtn = page.getByText('Add to cart').nth(1)
        this.searchProductsPageViewProductBtn = page.getByRole('link', { name: ' View Product' });
        this.writeYourReviewHeader = page.getByRole('link', { name: 'Write Your Review' })
        this.writeYourReviewName = page.getByRole('textbox', { name: 'Your Name' })
        this.writeYourReviewEmail = page.getByRole('textbox', { name: 'Email Address', exact: true })
        this.writeYourReviewReview = page.getByRole('textbox', { name: 'Add Review Here!' })
        this.writeYourReviewSubmitBtn =page.getByRole('button', { name: 'Submit' })
        this.writeYourReviewThankYou = page.getByText('Thank you for your review.')
        this.recommendedItemsHeader =  page.getByRole('heading', { name: 'recommended items' })
        this.recommendedItemsAddToCartBtn = page.locator('.recommended_items div div a').first()
        this.viewCartLink = page.getByRole('link', { name: 'View Cart' })
        this.categoryHeader = page.getByRole('heading', { name: 'Category' })
        this.womenCategory = page.getByRole('link', { name: ' Women' })
        this.dressCategory = page.getByRole('link', { name: 'Dress' })
        this.womenDressSubCategoryHeader = page.getByRole('heading', { name: 'Women - Dress Products' })
        this.menCategory = page.getByRole('link', { name: ' Men' })
        this.tshirtsCategory = page.getByRole('link', { name: 'Tshirts' })
        this.menTshirtsSubCategoryHeader = page.getByRole('heading', { name: 'Men - Tshirts Products' })
    }
    //Create instance of ProductsPage
    static async create(page: Page): Promise<ProductsPage> {
        return new ProductsPage(page);
    }
    //Navigate to products page
    async verifyAllProductsPage(): Promise<string> {
        const text = await this.productsPageHeader.textContent();
        return text?.trim() ?? "";
    }
    async verifyProductListCount(): Promise<number> {
        let productCount: number = await this.productList.count();
        console.log("Product count in ProductsPage: " + productCount);
        return productCount;
    }
    //View first product
    async viewFirstProduct(): Promise<void> {
        await this.viewFirstProductBtn.click();
    }
    //Verify search results product details
    async verifySearchResultsProductDetails(): Promise<boolean> {

        const searchProductsPageProductPrice = await this.searchProductsPageProductPrice.isVisible()
        const searchProductsPageProductName = await this.searchProductsPageProductName.isVisible()
        const searchProductsPageAddToCartBtn = await this.searchProductsPageAddToCartBtn.isVisible()
        const searchProductsPageViewProductBtn = await this.searchProductsPageViewProductBtn.isVisible()

        try {
            if (searchProductsPageProductPrice && searchProductsPageProductName && searchProductsPageAddToCartBtn && searchProductsPageViewProductBtn === true) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.log("Search results product details are not visible");
            return false;
        }
    }
    //Navigate to products page
    async navigateToProductsPage(): Promise<void> {
        await this.productsTab.click();
    }
    async searchProduct(productName: string): Promise<void> {
        await this.searchProductTextBox.fill(productName);
        await this.searchProductBtn.click();
    }
    //Update quantity
    async updateQuantity(quantity: number): Promise<number> {
        await this.productQuantityInput.fill(quantity.toString());
        return quantity;
    }
    //Add to cart
    async addToCart(): Promise<void> {
        await this.addToCartBtn.click();
    }
    //Select brand from products page
    async selectBrandFromProductsPage(brandName: string): Promise<void> {
        try {
            brandName = brandName.trim();
            const brand = `//a[@href='/brand_products/${brandName}']`;
            const brandElement = this.page.locator(brand, { timeout: 5000 });

            // Wait for the brand element to be visible
            await brandElement.waitFor({ state: 'visible', timeout: 10000 });
            await brandElement.click({ timeout: 5000 });
        } catch (error) {
            console.log(`Error selecting brand ${brandName}:`, error);
            throw error;
        }
    }
    //Verify selected brand products
    async verifySelectedBrandProducts(): Promise<string> {
        try {
            // Wait for the element to be visible first
            await this.productTitle.waitFor({ state: 'visible', timeout: 10000 });
            const productPageTitle = await this.productTitle.textContent({ timeout: 5000 });
            return productPageTitle || '';
        } catch (error) {
            console.log('Error getting product title:', error);
            return '';
        }
    }
    //Verify searched products page
    async verifySearchedProductsPage(): Promise<string> {
        const text = await this.productTitle.textContent();
        return text?.trim() ?? "";
    }
    //Verify product details
    async verifyProductDetails(): Promise<boolean> {
        try {
            if (await this.productName.isVisible() && await this.productCategory.isVisible() && await this.productPrice.isVisible() && await this.productAvailability.isVisible() && await this.productCondition.isVisible() && await this.productBrand.isVisible()) {
                return true;
            }
            return false;
        } catch (error) {
            console.log("Product details are not visible");
            return false;
        }
    }
    //Write review details
    async writeReviewDetails(name: string, email: string, review: string): Promise<void> {
        
        // if(await this.writeYourReviewHeader.isVisible()){
        await this.writeYourReviewName.fill(name);
        await this.writeYourReviewEmail.fill(email);
        await this.writeYourReviewReview.fill(review);
   // }
    }
    //Submit review
    async submitReview(): Promise<void> {
        await this.writeYourReviewSubmitBtn.click();
    }
    //Verify review submitted
    async verifyReviewSubmitted(): Promise<boolean> {
        try {
            if (await this.writeYourReviewThankYou.isVisible()) {
                return true;
            }
            return false;
        } catch (error) {
            console.log("Review not submitted");
            return false;
        }
    }
    //Add recommended items to cart
    async addRecommendedItemsToCart(): Promise<void> {
        await this.recommendedItemsAddToCartBtn.click();
    }
    //Verify recommended items
    async verifyRecommendedItems(): Promise<boolean> {
        try {
            if (await this.recommendedItemsHeader.isVisible()) {
                return true;
            }
            return false;
        } catch (error) {
            console.log("Recommended items are not visible");
            return false;
        }
    }
    //Navigate to cart page
    async navigateToCartPage(): Promise<void> {
        await this.recommendedItemsAddToCartBtn.click({ timeout: 5000 });
    }
    //Click on view cart link
    async clickOnViewCartLink(): Promise<void> {
        await this.viewCartLink.click({ timeout: 5000 });
    }

    //Select brand category
    // async selectBrandCategory(): Promise<void> {
    //     //select category header
    //     await expect(this.categoryHeader).toBeVisible();
    //     //select women category
    //     await this.womenCategory.click();
    //     //select dress
    //     await this.dressCategory.click();
    //     //select women - dress products header
    //    // await expect(this.womenDressProductsHeader).toBeVisible();

    //     //select men category
    //     await this.menCategory.click();
    //     //select tshirts
    //     await this.tshirtsCategory.click();
    //     //select men - tshirts products header
    //    // await expect(this.menTshirtsProductsHeader).toBeVisible();
    // }

    //Select category
    async verifyCategoryHeader(): Promise<string> {
        const text = await this.categoryHeader.textContent();
        return text?.trim() ?? "";
    }
    //Select women category
    async selectWomenCategory(): Promise<void> {
        await this.womenCategory.click({ timeout: 5000 });
    }
    //Select dress subcategory
    async selectDressSubcategory(): Promise<void> {
        await this.dressCategory.click({ timeout: 5000 });
    }
    //Select men category
    async selectMenCategory(): Promise<void> {
        await this.menCategory.click({ timeout: 5000 });
    }
    //Select tshirts subcategory
    async selectTshirtsSubcategory(): Promise<void> {
        await this.tshirtsCategory.click({ timeout: 5000 });
    }
    //Verify category products are visible -womenDressSubCategoryHeader
    async verifyWomenDressSubCategoryProductsAreVisible(): Promise<boolean> {
        try {
            if (await this.womenDressSubCategoryHeader.isVisible()) {
                return true;
            }
            return false;
        } catch (error) {
            console.log("Women Dress Sub Category products are not visible");
            return false;
        }
    }
    //Verify category products are visible -menTshirtsSubCategoryHeader
    async verifyMenTshirtsSubCategoryProductsAreVisible(): Promise<boolean> {
        try {
            if (await this.menTshirtsSubCategoryHeader.isVisible()) {
                return true;
            }
            return false;
        } catch (error) {
            console.log("Men Tshirts Sub Category products are not visible");
            return false;
        }
    }
}
