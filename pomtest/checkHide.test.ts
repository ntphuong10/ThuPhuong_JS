import { expect, test } from "@playwright/test";
import PracticePage from "../pages/practicePage";
test.describe("Practise Page Demo7", async () => {

    test("Check click Hide", async ({ page, baseURL }, testInfo) => {
        console.log('TITLE:' + testInfo.title);
        const clickHide = new PracticePage(page);
        await page.goto(`https://rahulshettyacademy.com/AutomationPractice/`);
        await clickHide.hide();

        await expect(page.locator("//input[@id='displayed-text']")).toBeHidden();
        await clickHide.show();
        await expect(page.locator("//input[@id='displayed-text']")).toBeVisible();
    })
})