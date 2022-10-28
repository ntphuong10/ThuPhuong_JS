import { expect, test } from "@playwright/test";
import PracticePage from "../pages/practicePage";
test.describe("Practice Page demo4", async() => {
    test ("Check Amount", async ({ page, baseURL }, testInfo) => {
        console.log('TITLE:' + testInfo.title);
        let checkAmount = new PracticePage(page);
        await page.goto(`https://rahulshettyacademy.com/AutomationPractice/`);
        expect (await checkAmount.total()).toEqual(296)

    })
})