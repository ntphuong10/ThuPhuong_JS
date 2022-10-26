import { expect, test } from "@playwright/test";
import PracticePage from "../pages/practicePage";
test.describe("Practice Page demo2", async() => {
    test ("Check Box Option1", async ({ page, baseURL }, testInfo) => {
        console.log('TITLE:' + testInfo.title);
        let checkOption1 = new PracticePage(page);
        await page.goto(`https://rahulshettyacademy.com/AutomationPractice/`);
        await checkOption1.checkBoxOption1Checked();
        expect (await (await checkOption1.checkBoxOption1locator()).isChecked()).toBeTruthy();
        console.log('STATUS:' + testInfo.status);
    })
})