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
    await page.pause()

/** 
- Handling Radio Buttons
  Radio buttons can be accessed from their locators
  
- Methods used
  - use click() method with the radio button locator    OR
  - use check() & uncheck() method

- Assertions used
  - isChecked() - return True or False
  - toBeChecked() - return False if the radio button is already checked, if not then it returns True

  **/


})