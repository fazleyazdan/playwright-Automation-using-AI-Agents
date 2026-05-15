// in this test case file , i will be trying different locators.
// will be getting hands on assertions as well


import {test, expect} from "@playwright/test"


test("locators & assertions", async({page}) => {

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
    await page.fill("#username", "rahulshettyacademy")
    await page.fill("#password", "wrongpass")
    await page.click("input[type='submit']")

    // const validation_text = await page.locator("[style='display: block']").textContent()
    const validation_text = await page.locator("[style*='display']").textContent()         // this locator looks for partial value match of styel attrib
    await expect(validation_text).toContain("Incorrect")

})