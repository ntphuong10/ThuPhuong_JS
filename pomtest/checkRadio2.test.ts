import { expect, test } from "@playwright/test";
import PracticePage from "../pages/practicePage"
test.describe("Practise Page test demo123", async () => {

    test("Check radio_0123", async ({ page, baseURL}, testInfo) => {
        console.log('TITLE:' + testInfo.title);

        const checkRadio = new PracticePage(page);
        await page.goto(`https://rahulshettyacademy.com/AutomationPractice/`);
        
        // expect (await checkRadio.radio1Checked().isChecked()).();
        // await checkRadio.radio1Checked();
        // expect(await (await checkRadio.radio1Locator()).isChecked()).toBeTruthy();

        await checkRadio.radio2Checked();
        expect (await (await checkRadio.radio2Locator()).isChecked()).toBeTruthy();
        console.log('STATUS: ' + testInfo.status);
    })
})