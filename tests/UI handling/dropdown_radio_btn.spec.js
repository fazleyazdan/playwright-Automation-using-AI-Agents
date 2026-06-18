import {test, expect} from "@playwright/test"


test("Handling dropdowns & radio buttons", async({page}) => {

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

/** 
- Handling Dropdowns
  First capture the dropdown & then you can manipulate it to select Specific Options

- Once the dropdown element is captured, you can then use playwright method selectOption 
  to select specific option by value attribute

- Note that dropdown elements most of the times is using "select" tag, then the options
  are using option "tag". option tag contains value attribute through which we can select individual
  dropdown options using "selectOption" Method

  **/

    const dropdown_element = await page.locator("select.form-control")
    await dropdown_element.selectOption("teach")

/** 
- Handling Radio Buttons
  Radio buttons can be accessed from their locators
  
- Methods used
  - use click() method with the radio button locator 

- Assertions used
  - isChecked() - return True or False
  - toBeChecked() - return True if the radio button is not checked, if not then it returns True

- Locating Strategy 
  - if you have multiple radio buttons with the same locators, you can use PW's first() & last() methods as well

  
- here in this example , we have two radio buttons. i will get them using same locators
    - i will then use PW's first() & last() methods to access them
  
    **/

    // check using click() method

    await page.locator("span.radiotextsty").last().click()
    await page.locator("span.radiotextsty").last().isChecked()
    await page.locator("#okayBtn").click()

    // check the user radio button is checked by using toBeChecked()
    await expect(page.locator("span.radiotextsty").last()).toBeChecked()
    

/** 
    - Methods used
        - use check() & uncheck() method
        - you can use click() method for checking & unchecking checkboxes
    
    - Assertions 
        - you can use truthy & falsy to check whether the checkbox is checked or not

**/

    
    // assertion on agreement checkbox - it is not checked yet. will return false so it should be Falsy
    
    
    expect(await page.locator("#terms").isChecked()).toBeFalsy()
    await page.locator("#terms").check()
    expect(await page.locator("#terms").isChecked()).toBeTruthy()
    await page.locator("#terms").uncheck()
    expect(await page.locator("#terms").isChecked()).toBeFalsy()

    await page.pause()

})