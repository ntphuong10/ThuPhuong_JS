import { expect, test } from "@playwright/test";
import PracticePage from "../pages/practicePage";
test.describe("Practice Page demo4", async() => {
    test ("Check Course", async ({ page, baseURL }, testInfo) => {
        console.log('TITLE:' + testInfo.title);
        let checkCourse = new PracticePage(page);
        await page.goto(`https://rahulshettyacademy.com/AutomationPractice/`);
        expect (await checkCourse.course()).toEqual(11);
    })
})