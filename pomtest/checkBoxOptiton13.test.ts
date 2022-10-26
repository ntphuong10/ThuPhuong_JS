import { expect, test } from "@playwright/test";
import PracticePage from "../pages/practicePage";
test.describe("Chech Box 13", async() => {

test("Check Box 13", async ({ page, baseURL }, testInfo) => {
console.log('TITLE:' + testInfo.title);
const checkBox13 = new PracticePage(page);
await page.goto(`https://rahulshettyacademy.com/AutomationPractice/`);
await checkBox13.checkBoxOption1Checked();
expect ( await (await checkBox13.checkBoxOption1locator()).isChecked()).toBeTruthy();
await checkBox13.checkBoxOption3Checked();
expect ((await checkBox13.checkBoxOption3Locator()).isChecked()).toBeTruthy();
})
})
