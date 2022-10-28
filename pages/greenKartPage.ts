
import { Page } from "@playwright/test";
export default class greenKartPage {
    constructor(public page: Page) { }
    async seachClick(){
        await this.page.click("//input[@placeholder='Search for Vegetables and Fruits']")
    }
    async seacrchTextbox(vegetables: string) {
        await this.page.locator("//input[@placeholder='Search for Vegetables and Fruits']")
            .type(vegetables);
    }
    async countProduct() {
        await this.page.locator("//div[@class='products']/div").count();
    }
    async addToCart() {
        await this.page.click("(//div[@class='product-action'])[1]/button")
    }
    async clickToCart(){
        await this.page.click("//a[@class='cart-icon']")
    }
    async price60nearAddToCart() {
    let string601 = await this.page.locator("(//div[@class='product'])[1]/p").innerText();
    let number601 = Number(string601)
    return number601
        
    }
    // async price1201(){
    //     await this.page.locator("(//td)[6]/strong").innerText();
    // }
async price60InTheCart(){
    let string603 = await this.page.locator("(//p[@class='product-price'][normalize-space()='60'])[1]").innerText();
    let number603 = Number(string603)
    return number603
}

async totalMoney(){
    let stringMoney = await this.page.locator("(//div[@class='product-total'])[1]/p[2]").innerText();

    let numberMoney = Number(stringMoney)
    console.log("=======total money = " + stringMoney)
    return numberMoney;
}

async totalQuantity(){
    let totalQuantityString = await this.page.locator("(//p[@class='quantity'])[1]").innerText();
    let nameP = await this.page.locator("(//div[@class='product-info'])[1]/p[1]").innerText();

    let myArray = totalQuantityString.split(" ");
    let quantitystring = myArray[0];
    let quantityNumber = Number(quantitystring)
    console.log("========result: " + quantityNumber)
    console.log("========nameP: " + nameP)

    return quantityNumber;
    
    // return string603
    // let totalQuantityNumber = Number(totalQuantityString)
    // return totalQuantityNumber
}


}