import {test, expect} from "@playwright/test"


test("handle multi web elements", async({page}) => {

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

    // first store reusable locators
    
    const username = page.locator("#username")
    const password = page.locator("#password")
    const loginBtn = page.locator("#signInBtn")
    // here we don't have to use awa-it, as were only storing the locator 
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

    // Now lets say there are 100 elements, which you need to extract their title
    // you can't do it by writing the same statement 100 times e.g nth(0), nth(1) ...
    // there is a methode called getAllTextContent(), which returns array of texts

    console.log(await page.locator(".card-body a").allTextContent())
    // but it has 1 drawback, there is no auto waits in PW for that method just like we have for textContent()
    // in case of textContent() if element is not present then you will get NoSuchElement Exception for which PW will wait until the auto timeout
    // if the page is loading and the method is called, even if did not fetch any text, array has 0 elements like this [0] and it is valid for PW
    
})