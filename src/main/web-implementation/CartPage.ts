import { Locator, Page } from "playwright/test";
import { CartPageOperations } from "../operations/CartPageOperations";
import { BasePage } from "./BasePage";

export class CartPage extends BasePage implements CartPageOperations {
    private readonly cartPageTab: Locator;
    private readonly cartPageTitle: Locator;
    private readonly ProductOneAddToCartButton: Locator;
    private readonly ProductTwoAddToCartButton: Locator;
    private readonly continueShoppingBtn: Locator;
    private readonly cartFirstProductPrice: Locator;
    private readonly cartSecondProductPrice: Locator;
    private readonly cartFirstProductQuantity: Locator;
    private readonly cartSecondProductQuantity: Locator;
    private readonly cartFirstProductTotalPrice: Locator;
    private readonly cartSecondProductTotalPrice: Locator;
    private readonly productAddedToCartConfirmationText: Locator;
    private readonly proceedToCheckoutBtn: Locator;
    private readonly registerLoginBtn: Locator;
    private readonly shipping_address_title: Locator;
    private readonly billing_address_title: Locator;
    private readonly review_order_title: Locator;
    private readonly descriptionInput: Locator;
    private readonly placeOrderBtn: Locator;
    private readonly removeProductFromCartBtn: Locator;
    private readonly emptyCartHeader: Locator;
    private readonly clickHereLink: Locator;
    private readonly paymentPageTitle: Locator;
    private readonly nameOnCard: Locator;
    private readonly cardNumber: Locator;
    private readonly cardExpiryDay: Locator;
    private readonly cardExpiryMonth: Locator;
    private readonly cardExpiryYear: Locator;
    private readonly payAndConfirmOrderBtn: Locator;
    private readonly confirmOrderPageTitle: Locator;
    private readonly congratulationsMessage: Locator;
    private readonly downloadInvoiceBtn: Locator;
    private readonly continueBtn: Locator;

    constructor(page: any) {
        super();
        this.page = page;
        this.cartPageTab = page.getByRole('link', { name: ' Cart' });
        this.cartPageTitle = page.getByText('Shopping Cart')
        this.ProductOneAddToCartButton = page.locator('(//a[@data-product-id="1"])[1]');
        this.ProductTwoAddToCartButton = page.locator('(//a[@data-product-id="2"])[1]');
        this.continueShoppingBtn = page.getByRole('button', { name: 'Continue Shopping' });
        this.cartFirstProductPrice = page.locator('#product-1 td + td + td p').first();
        this.cartSecondProductPrice = page.locator('#product-2 td + td + td p').first();
        this.cartFirstProductQuantity = page.locator('.disabled').nth(0);
        this.cartSecondProductQuantity = page.locator('.disabled').nth(1);
        this.cartFirstProductTotalPrice = page.locator('.cart_total').nth(0);
        this.cartSecondProductTotalPrice = page.locator('.cart_total').nth(1);
        this.productAddedToCartConfirmationText = page.getByText('Product has been added to your cart');
        this.proceedToCheckoutBtn = page.getByText('Proceed To Checkout');
        this.registerLoginBtn = page.getByText('Register / Login').nth(1);
        this.shipping_address_title = page.locator('.address_title > h3').first();
        this.billing_address_title = page.locator('.address_title > h3').nth(1);
        this.review_order_title = page.getByText('Review Your Order');
        this.descriptionInput = page.locator('.form-control');
        this.placeOrderBtn = page.getByText('Place Order');
        this.removeProductFromCartBtn = page.getByRole('cell', { name: '' }).locator('a');
        this.emptyCartHeader = page.getByText('Cart is empty!');
        this.clickHereLink = page.getByRole('link', { name: 'here' })

        this.paymentPageTitle = page.getByRole('heading', { name: 'Payment' });
        this.nameOnCard = page.locator('input[name="name_on_card"]');
        this.cardNumber = page.locator('input[name="card_number"]');
        this.cardExpiryDay = page.getByRole('textbox', { name: 'ex.' });
        this.cardExpiryMonth = page.getByRole('textbox', { name: 'MM' });
        this.cardExpiryYear = page.getByRole('textbox', { name: 'YYYY' });
        this.payAndConfirmOrderBtn = page.getByRole('button', { name: 'Pay and Confirm Order' });
        this.confirmOrderPageTitle = page.getByText('Order Placed!');
        this.congratulationsMessage = page.getByText('Congratulations! Your order');
        this.downloadInvoiceBtn = page.getByRole('link', { name: 'Download Invoice' });
        this.continueBtn = page.getByRole('link', { name: 'Continue' });
    }


    //Create instance of CartPage
    static async create(page: Page) {
        const instance = new CartPage(page);
        return instance;
    }

    //Navigate to cart page
    async navigateToCartPage(): Promise<void> {
        await this.cartPageTab.click();
        await this.cartPageTitle.waitFor({ state: 'visible', timeout: 10000 });
    }

    //Get cart page title
    async getCartPageTitle(): Promise<string | null> {
        return this.cartPageTitle.textContent();
    }

    //Click on first product and add to cart
    async addToCartFirstProduct(): Promise<void> {
        await this.ProductOneAddToCartButton.click();
    }

    //Click on second product and add to cart
    async addToCartSecondProduct(): Promise<void> {
        await this.ProductTwoAddToCartButton.click();
    }
    //Click on continue shopping button
    async clickOnContinueShopping(): Promise<void> {
        await this.continueShoppingBtn.click();
    }
    //Verify all products added to cart
    async verifyAllProductsAddedToCart(): Promise<boolean> {
        return this.productAddedToCartConfirmationText.isVisible();
    }

    //Verify price quantity and total price
    async verifyPriceQuantityAndTotalPrice(): Promise<boolean | null> {
        const firstProductPrice = await this.cartFirstProductPrice.textContent();
        const secondProductPrice = await this.cartSecondProductPrice.textContent();
        const firstProductQuantity = await this.cartFirstProductQuantity.textContent();
        const secondProductQuantity = await this.cartSecondProductQuantity.textContent();
        const firstProductTotalPrice = await this.cartFirstProductTotalPrice.textContent();
        const secondProductTotalPrice = await this.cartSecondProductTotalPrice.textContent();

        // Check if any of the text content is null
        if (!firstProductPrice || !secondProductPrice || !firstProductQuantity ||
            !secondProductQuantity || !firstProductTotalPrice || !secondProductTotalPrice) {
            console.error('One or more cart elements could not be found or have no text content');
            return null;
        }

        const firstProductPriceNumber = Number(firstProductPrice.replace("Rs. ", "").trim());
        const secondProductPriceNumber = Number(secondProductPrice.replace("Rs. ", "").trim());
        const firstProductQuantityNumber = Number(firstProductQuantity);
        const secondProductQuantityNumber = Number(secondProductQuantity);
        const firstProductTotalPriceNumber = Number(firstProductTotalPrice.replace("Rs. ", "").trim());
        const secondProductTotalPriceNumber = Number(secondProductTotalPrice.replace("Rs. ", "").trim());

        if (firstProductPriceNumber * firstProductQuantityNumber === firstProductTotalPriceNumber &&
            secondProductPriceNumber * secondProductQuantityNumber === secondProductTotalPriceNumber) {
            return true;
        }
        else return false;
    }

    //Verify product quantity   
    async verifyProductQuantityInShoppingCart(quantity: number): Promise<number> {
        const productQuantity = await this.cartFirstProductQuantity.textContent();
        return Number(productQuantity);
    }
    //Click on Proceed To Checkout button
    async clickOnProceedToCheckout(): Promise<void> {
        await this.proceedToCheckoutBtn.click();
    }
    //Click on Register / Login button
    async clickOnRegisterLogin(): Promise<void> {
        await this.registerLoginBtn.click();
    }
    async doVerifyShippingAddress(): Promise<void> {
        await this.shipping_address_title.isVisible();

        
    }
    async doVerifyBillingAddress(): Promise<void> {
        await this.billing_address_title.isVisible();
        
    }
    async doReviewYourOrder(): Promise<void> {
        await this.review_order_title.isVisible();
    }
    async enterDescription(): Promise<void> {
        await this.descriptionInput.fill('Test Description');
    }
    async buttonClickPlaceOrder(): Promise<void> {
        await this.placeOrderBtn.click();
    }
    async removeProductFromCart(): Promise<void> {
        await this.removeProductFromCartBtn.click();
    }
    async clickHereLinkRedirectHomePage(): Promise<void> {
        await this.clickHereLink.click();
    }
    async getEmptyCartHeader(): Promise<string | null> {
        return this.emptyCartHeader.textContent();
    }
    async placeOrder(): Promise<void> {
        await this.placeOrderBtn.click();
    }
    async paymentDetails(): Promise<void> {
        if(await this.paymentPageTitle.isVisible()) {
        await this.nameOnCard.fill('Test User');
        await this.cardNumber.fill('1234567890123456');
        await this.cardExpiryDay.fill('01');
        await this.cardExpiryMonth.fill('01');
        await this.cardExpiryYear.fill('2025');
        await this.payAndConfirmOrderBtn.click();
        }
    }
    async getOrderConfirmation(): Promise<string | null> {
        return this.confirmOrderPageTitle.textContent();
        }
    
    async getCongratulationsMessage(): Promise<string | null> {
        return this.congratulationsMessage.textContent();
    }
    async doDownloadInvoice(): Promise<void> {    
        await this.downloadInvoiceBtn.isVisible();
        await this.continueBtn.isVisible();
        await this.downloadInvoiceBtn.click();
        await this.continueBtn.click();
    }       
}
