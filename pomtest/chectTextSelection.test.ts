import { expect, test } from "@playwright/test";
import PracticePage from "../pages/practicePage";
test.describe("Practice Page demo3", async() => {
    test ("select Dropdown example", async ({ page, baseURL }, testInfo) => {
        console.log('TITLE:' + testInfo.title);
        let checkTextSelection = new PracticePage(page);
        await page.goto(`https://rahulshettyacademy.com/AutomationPractice/`);
        await checkTextSelection.dropdownExampleClick();
        let textDropdown = await page.locator("//select[@id='dropdown-class-example']");
        let  str = (await textDropdown.evaluateAll(list => list.map(element => element.textContent?.toString().trim)))
        console.log("========= textDropdown = " + str)
        let expectList =['\n' +
        'Select\n' +
        'Option1\n' +
        'Option2\n' +
        'Option3\n']
        await expect (expectList).toEqual(str)
         })
})