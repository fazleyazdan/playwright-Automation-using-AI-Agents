import {test, expect} from "@playwright/test"


test("handle multi web elements", async({page}) => {

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

    // first store reusable locators
    
    const username = page.locator("#username")
    const password = page.locator("#password")
    const loginBtn = page.locator("#signInBtn")
    // here we don't have to use await, as were only storing the locator 
    // use await if when performing some action or validation

    await username.fill("")    // when empty string passed to fill, it removes existing text in input field
    await username.fill("rahulshettyacademy")
    await password.fill("Learning@830$3mK2")
    await loginBtn.click("")

    // here we want to print name of a product, but the locator matches with multiple products
    // playwright provides a way to traverse through multiple matched element
    // Note: if a locator matches multiple elements, it will store those elements in an array

    console.log(await page.locator(".card-body a").first().textContent())
    console.log(await page.locator(".card-body a").nth(0).textContent())
    console.log(await page.locator(".card-body a").last().textContent())
    
})