import { expect, test } from "@playwright/test";
import PracticePage from "../pages/practicePage";
test.describe("Select option2", async() => {

test("Select option2", async ({ page, baseURL }, testInfo) => {
console.log('TITLE:' + testInfo.title);
const selectOption2 = new PracticePage(page);
await page.goto(`https://rahulshettyacademy.com/AutomationPractice/`);
// await selectOption2.dropdownExampleClick();
await selectOption2.option2();
let textOption2 = await page.locator("//option[@value='option2']");
let textOption2check = await textOption2.evaluateAll(list => list.map(element => element.textContent))
console.log('textOption2: ' + textOption2check)
})
})