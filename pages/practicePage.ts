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
    async radio2Locator(){
        return this.page.locator("//input[@value='radio2']");
    }
    async checkBoxOption1locator(){
        return this.page.locator("//input[@id='checkBoxOption1']");
    }
    async checkBoxOption1Checked(){
        await this.page.click("//input[@id='checkBoxOption1']");
    }
    async checkBoxOption3Checked(){
        await this.page.click("//input[@id='checkBoxOption3']");
    }
    async checkBoxOption3Locator(){
        return this.page.locator("//input[@id='checkBoxOption3']")
    }
    async txbClassExample (){
        await this.page.locator("//input[@id='autocomplete']")
        .type('India', {delay: 500});
    }
    async dropdownExampleClick (){
        await this.page.click("//select[@id='dropdown-class-example']")
    }
    async dropdownExampleLocator (){
        const countSelection = await (await this.page.locator("//select[@id='dropdown-class-example']/option").count());
        console.log("=====================result = " + countSelection)
        return countSelection;

    }
    async sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
