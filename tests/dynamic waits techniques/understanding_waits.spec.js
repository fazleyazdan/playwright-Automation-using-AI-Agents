import {test, expect} from "@playwright/test"


test("Handling dropdowns & radio buttons", async({page}) => {

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")


    const dropdown_element = await page.locator("select.form-control")
    await dropdown_element.selectOption("teach")


    await page.locator("span.radiotextsty").last().click()
    await page.locator("span.radiotextsty").last().isChecked()
    await page.locator("#okayBtn").click()

    await page.locator("span.radiotextsty").first().check()
    
    // check the admin radio button it should be checked
    await expect(page.locator("span.radiotextsty").first()).toBeChecked()

    // we won't check user radio button again , so applied assertion that it won't be checked
    await expect(page.locator("span.radiotextsty").last()).not.toBeChecked()
    
    expect(await page.locator("#terms").isChecked()).toBeFalsy()
    await page.locator("#terms").check()
    expect(await page.locator("#terms").isChecked()).toBeTruthy()
    await page.locator("#terms").uncheck()
    expect(await page.locator("#terms").isChecked()).toBeFalsy()

    /* 
        - if you notice on line 18, we are using await before expect, it is because we are performing
          action on web page outside the expect, once the object is located, then it looks like this
          await expect(object).toBeChecked() 

        - on the other hand on line 25, 27 & 29 we are using awaits inside expect, it is because
          we are performing action like "isChecked()" inside the expect. hence awaits should be used inside
          it is resolved in this manner
          1. expect(await object.isChecked()).toBeTruthy() --> if we don't put await inside, this action will be executed before page load 
          2. expect(True).toBeTruthy()  -->
          3. True.toBeTruthy() --> passed
    */

})