import { Page } from "@playwright/test";
export default class PracticePage {
    constructor(public page: Page) { }
    async radio1Checked() {
        await this.page.click("//input[@value='radio1']");

    }
    async radio1Locator() {
        return this.page.locator("//input[@value='radio1']")


    }
    async radio2Checked() {
        await this.page.click("//input[@value='radio2']");
    }
    async radio2Locator() {
        return this.page.locator("//input[@value='radio2']");
    }
    async checkBoxOption1locator() {
        return this.page.locator("//input[@id='checkBoxOption1']");
    }
    async checkBoxOption1Checked() {
        await this.page.click("//input[@id='checkBoxOption1']");
    }
    async checkBoxOption3Checked() {
        await this.page.click("//input[@id='checkBoxOption3']");
    }
    async checkBoxOption3Locator() {
        return this.page.locator("//input[@id='checkBoxOption3']")
    }
    async txbClassExample() {
        await this.page.locator("//input[@id='autocomplete']")
            .type('India', { delay: 500 });
    }
    async dropdownExampleClick() {
        await this.page.click("//select[@id='dropdown-class-example']")
    }
    async dropdownExampleLocator() {
        const countSelection = await (await this.page.locator("//select[@id='dropdown-class-example']/option").count());
        console.log("=====================result = " + countSelection)
        return countSelection;

    }
    async option2() {
        await this.page.selectOption('select[id="dropdown-class-example"]', 'option2');

    }
    async course() {
        const countCourse = await (await this.page.locator("//body[1]/div[3]/div[1]/fieldset[1]/table[1]/tbody[1]/tr").count());
        console.log("=================== count course = " + countCourse)
        return countCourse;
    }
    // async amount() {
    //     const totalAmount = await (await this.page.locator("//body[1]/div[3]/div[2]/fieldset[2]/div[1]/table[1]/tbody[1]/tr/td[4]").allTextContents());
    //     console.log("====== result: " + totalAmount)
    //     return totalAmount;

    // }
    async total() {
        let totalAmount = ""
        let sum = 0
        for (let i = 1; i < 10; i++) {
            // console.log(i)
            totalAmount = await this.page.locator("(//tbody)[2]/tr[" + i + "]/td[4]").innerText();
            sum += Number(totalAmount)
        }
        console.log("===================== count totalAmount = " + sum)
        return sum;
    }
    async instructor(){
    let verifyText = ""
    for (let i =2; i < 12; i++ ){
        verifyText = await this.page.locator("//div[@class='left-align']//table[@id='product']//tbody//tr[" + i + "]/td[1]").innerText();
    }    
    console.log("=============== Print name = " + verifyText)
    return verifyText;
    }
    async hide(){
        await this.page.click("//input[@id='hide-textbox']");
    }
    async show(){
        await this.page.click("//input[@id='show-textbox']")
    }
    
    async sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
