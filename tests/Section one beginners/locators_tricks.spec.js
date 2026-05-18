// Invalid Login Credentials
// in this test case file , i will be trying different locators.
// will be getting hands on assertions as well


import {test, expect} from "@playwright/test"


test("locators & assertions", async({page}) => {


    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
    await page.fill("#username", "rahulshettyacademy")
    await page.fill("#password", "wrongpass")
    await page.click("input[type='submit']")

//  const validation_text = await page.locator("[style*='display']").textContent()    // this locator looks for partial value match of style attrib
//  await expect(validation_text).toContain("Incorrect") 
//  OR
    await expect(page.locator("[style='display: block;']")).toContainText("Incorrect")

//  We Entered wrong credentials, Now we want to enter corret
//  since the input boxes at this stage already contains some values. to remove this use fill() & pass empty string

    await page.fill("#password", "")
    await page.fill("#password", "Learning@830$3mK2")
    await page.click("input[type='submit']")

//  Here if you notice we are using same locators again and again. you can store it in a variable and use it further in your tests
//  There is a desing pattern called POM. which i will use in future tests

})