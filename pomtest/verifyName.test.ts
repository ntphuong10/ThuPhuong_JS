import { expect, test } from "@playwright/test";
import PracticePage from "../pages/practicePage";
test.describe("Practice Page demo7", async () => {
    test("Verify text of Instructor column", async ({ page, baseURL }, testInfo) => {
        console.log('TITLE:' + testInfo.title);
        const verifyName = new PracticePage(page);
        await page.goto(`https://rahulshettyacademy.com/AutomationPractice/`);
        await verifyName.instructor();
    expect (await verifyName.instructor()).toEqual("Rahul Shetty")
    })
})