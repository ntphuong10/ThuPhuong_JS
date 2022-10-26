import { expect, test } from "@playwright/test";
import PracticePage from "../pages/practicePage";
test.describe("Practice Page demo3", async() => {
    test ("select Dropdown example", async ({ page, baseURL }, testInfo) => {
        console.log('TITLE:' + testInfo.title);
        let checkDropdownExample = new PracticePage(page);
        await page.goto(`https://rahulshettyacademy.com/AutomationPractice/`);
        await checkDropdownExample.dropdownExampleClick();
        expect ( await checkDropdownExample.dropdownExampleLocator()).toEqual(4);
    })
})