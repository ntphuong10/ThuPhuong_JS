import { expect, test } from "@playwright/test";
import PracticePage from "../pages/practicePage";
test.describe("Practice Page demo2", async () => {
    test("Input textbox Class example", async ({ page, baseURL }, testInfo) => {
        console.log('TITLE:' + testInfo.title);
        const inputTextbox = new PracticePage(page);
        await page.goto(`https://rahulshettyacademy.com/AutomationPractice/`);
        await inputTextbox.txbClassExample();
        let textIndia = await page.locator("(//ul[@id='ui-id-1'])[1]");
        let textIndiaList = await textIndia.evaluateAll(list => list.map(element => element.textContent))
        console.log('textIndiaList: ' + textIndiaList)
        let exptList =['British Indian Ocean TerritoryIndia']
        expect (exptList).toEqual(textIndiaList)
    })
})