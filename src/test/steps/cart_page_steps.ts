import { Then, When } from "@cucumber/cucumber";
import { CartPageOperations } from "@src/main/operations/CartPageOperations";
import { getCartPageApp } from "@src/main/utilities/autoExe-utils";
import { expect } from "playwright/test";

let cartPage:CartPageOperations;

Then('User clicks on Cart button', { timeout: 60000 }, async function () {
    const page = (global as any).page;
    cartPage = await getCartPageApp(page) as CartPageOperations;
    await cartPage.navigateToCartPage();
});

Then('user should be redirected to the cart page', async function () {
    expect(await cartPage.getCartPageTitle()).toBeTruthy();  
});

Then('User add first product to cart', async function () {
    const page = (global as any).page;
    cartPage = await getCartPageApp(page) as CartPageOperations;
    await cartPage.addToCartFirstProduct();
});

Then('User click on continue shopping button', async function () {
    const page = (global as any).page;
    cartPage = await getCartPageApp(page) as CartPageOperations;
    await cartPage.clickOnContinueShopping();
});

Then('User add second product to cart', async function () {
    await cartPage.addToCartSecondProduct();
});

Then('User navigates to cart page', async function () {
    const page = (global as any).page;
    cartPage = await getCartPageApp(page) as CartPageOperations;
    await cartPage.navigateToCartPage();
});

Then('Verify all products added to cart', async function () {
    expect(await cartPage.verifyAllProductsAddedToCart()).toBeTruthy();
});

Then('User verify price quantity and total price', async function () {
    expect(await cartPage.verifyPriceQuantityAndTotalPrice()).toBeTruthy();
});

Then('User validate with expected product quantity {string}', async function (quantity: string) {
    expect(await cartPage.verifyProductQuantityInShoppingCart(parseInt(quantity))).toEqual(parseInt(quantity));
});

Then('User click on Proceed To Checkout button', async function () {
    await cartPage.clickOnProceedToCheckout();
});

Then('User click on Register Login button', async function () {
    await cartPage.clickOnRegisterLogin();
});

Then('User verify address details and review order', async function () {
    await cartPage.doVerifyShippingAddress();
    await cartPage.doVerifyBillingAddress();
    await cartPage.doReviewYourOrder();
});

Then('User enter description', async function () {
    await cartPage.enterDescription();
});

Then('User click on place order button', async function () {
    await cartPage.buttonClickPlaceOrder();
});

Then('User remove product from cart', async function () {
    await cartPage.removeProductFromCart();
});

Then('User validate cart is empty', async function () {
    expect(await cartPage.getEmptyCartHeader()).toBeTruthy();
});

Then('User click on click here link', async function () {
    await cartPage.clickHereLinkRedirectHomePage();
});

Then('User clicks on place order button', async function () {
    await cartPage.placeOrder();
});
Then('User Enter payment details', async function () {
    await cartPage.paymentDetails();
});
Then('User Confirm order', async function () {
    await cartPage.getOrderConfirmation();
});
Then('User verify congatulations message', async function () {
    await cartPage.getCongratulationsMessage();
});
Then('User Download Invoice & verify invoice downloaded', async function () {
    await cartPage.doDownloadInvoice();
});



