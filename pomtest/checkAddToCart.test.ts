import { expect, test } from "@playwright/test";
import greenKartPage from "../pages/greenKartPage";
test.describe("Check add to cart", async() => {

    test("Check add to cart", async ({ page, baseURL }, testInfo) => {
    console.log('TITLE:' + testInfo.title);
    const addtoCartcheck = new greenKartPage(page);
    await page.goto(`https://rahulshettyacademy.com/seleniumPractise/#/`);
    await addtoCartcheck.seachClick();
    await addtoCartcheck.seacrchTextbox("ca");
    // expect (await addtoCartcheck.countProduct).toEqual(4);
    await addtoCartcheck.addToCart();
    await addtoCartcheck.clickToCart();
    let price60 = await addtoCartcheck.price60nearAddToCart()
    let price60Cart = await addtoCartcheck.price60InTheCart()
    expect (price60).toEqual(price60Cart);
    let totalQuan = await addtoCartcheck.totalQuantity();
    console.log("totalQuan: "+totalQuan)
    console.log("price60: "+price60)
    console.log("price60Cart: "+price60Cart)

    let totalPrice = price60Cart * totalQuan
    console.log("totalPrice: "+totalPrice)
    // console.log("7879: "+await addtoCartcheck.totalMoney())
    let totalM = await addtoCartcheck.totalMoney()
    console.log(totalM)
    // expect (await addtoCartcheck.totalMoney()).toEqual(totalPrice)
   
    })
})