import { Then, When } from "@cucumber/cucumber";
import { CartPageOperations } from "@src/main/operations/CartPageOperations";
import { getCartPageApp } from "@src/main/utilities/autoExe-utils";
import { expect } from "playwright/test";
import { TestWorld } from "@src/main/testworld";

let cartPage:CartPageOperations;

Then('User clicks on Cart button', { timeout: 60000 }, async function (this:TestWorld) {
    cartPage = await getCartPageApp(this.page) as CartPageOperations;
    await cartPage.navigateToCartPage();
});

Then('user should be redirected to the cart page', async function (this:TestWorld) {
    expect(await cartPage.getCartPageTitle()).toBeTruthy();  
});

Then('User add first product to cart', async function (this:TestWorld) {
    cartPage = await getCartPageApp(this.page) as CartPageOperations;
    await cartPage.addToCartFirstProduct();
});

Then('User click on continue shopping button', async function (this:TestWorld) {
    cartPage = await getCartPageApp(this.page) as CartPageOperations;
    await cartPage.clickOnContinueShopping();
});

Then('User add second product to cart', async function (this:TestWorld) {
    await cartPage.addToCartSecondProduct();
});

Then('User navigates to cart page', async function (this:TestWorld) {
    cartPage = await getCartPageApp(this.page) as CartPageOperations;
    await cartPage.navigateToCartPage();
});

Then('Verify all products added to cart', async function (this:TestWorld) {
    expect(await cartPage.verifyAllProductsAddedToCart()).toBeTruthy();
});

Then('User verify price quantity and total price', async function (this:TestWorld) {
    expect(await cartPage.verifyPriceQuantityAndTotalPrice()).toBeTruthy();
});

Then('User validate with expected product quantity {string}', async function (this:TestWorld, quantity: string) {
    expect(await cartPage.verifyProductQuantityInShoppingCart(parseInt(quantity))).toEqual(parseInt(quantity));
});

Then('User click on Proceed To Checkout button', async function (this:TestWorld) {
    await cartPage.clickOnProceedToCheckout();
});

Then('User click on Register Login button', async function (this:TestWorld) {
    await cartPage.clickOnRegisterLogin();
});

Then('User verify address details and review order', async function (this:TestWorld) {
    await cartPage.doVerifyShippingAddress();
    await cartPage.doVerifyBillingAddress();
    await cartPage.doReviewYourOrder();
});

Then('User enter description', async function (this:TestWorld) {
    await cartPage.enterDescription();
});

Then('User click on place order button', async function (this:TestWorld) {
    await cartPage.buttonClickPlaceOrder();
});

Then('User remove product from cart', async function (this:TestWorld) {
    await cartPage.removeProductFromCart();
});

Then('User validate cart is empty', async function (this:TestWorld) {
    expect(await cartPage.getEmptyCartHeader()).toBeTruthy();
});

Then('User click on click here link', async function (this:TestWorld) {
    await cartPage.clickHereLinkRedirectHomePage();
});

Then('User clicks on place order button', async function (this:TestWorld) {
    await cartPage.placeOrder();
});
Then('User Enter payment details', async function (this:TestWorld) {
    await cartPage.paymentDetails();
});
Then('User Confirm order', async function (this:TestWorld) {
    await cartPage.getOrderConfirmation();
});
Then('User verify congatulations message', async function (this:TestWorld) {
    await cartPage.getCongratulationsMessage();
});
Then('User Download Invoice & verify invoice downloaded', async function (this:TestWorld) {
    await cartPage.doDownloadInvoice();
});



