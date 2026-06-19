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

/* 
- Handling Radio Buttons & Checkboxes
  Radio buttons can be accessed from their locators
  check() & uncheck() method
  
- Methods used
  - use click() method with the radio button locator 

- Assertions used
  - isChecked() - return True or False
  - toBeChecked() - return True if the radio button is not checked, if not then it returns True
  - you can use truthy & falsy to check whether the checkbox is checked or not - not used that much

- Locating Strategy 
  - if you have multiple radio buttons with the same locators, you can use PW's first() & last() methods as well

  
- here in this example , we have two radio buttons. i will get them using same locators
    - i will then use PW's first() & last() methods to access them 
*/

    // check using click() method

    await page.locator("span.radiotextsty").last().click()
    await page.locator("span.radiotextsty").last().isChecked()
    await page.locator("#okayBtn").click()

    // check the admin radio button is to be checked . not checked at this point
    await expect(page.locator("span.radiotextsty").first()).toBeChecked()

    await page.locator("span.radiotextsty").first().check()

    // we won't check user radio button again , so applied assertion that it won't be checked
    await page.locator("span.radiotextsty").last().not.toBeChecked()
/* 
- toBeChecked()

    - It verifies if the element's internal checked property is currently true.

    - Automatic Retries (The "Web-First" Magic)
    
    - Unlike standard JavaScript assertions that instantly fail if something isn't true at that exact millisecond, 
      toBeChecked() is built to handle slow loading screens or lagging user interfaces.

    - The 5-Second Window: When executed, it enters a polling loop (defaulting up to 5000ms).

    - Pass Scenario: If a checkbox is unchecked at 0ms, but a script checks it at 200ms, toBeChecked() notices the change, 
      resolves successfully, and lets your test continue.

    - Fail Scenario: It will only fail and throw an error if the element remains unchecked for the entire timeout duration.

    - Note : the script won't go to other steps before the timeout, for example if there is a network delay or some other reason
      then to be checked waits for that element to be checked for some designated time untill it polls again. it will do polling until
      element is checked or timeout happens

    */

    
    // assertion on agreement checkbox - it is not checked yet. will return false so it should be Falsy
    
    expect(await page.locator("#terms").isChecked()).toBeFalsy()
    await page.locator("#terms").check()
    expect(await page.locator("#terms").isChecked()).toBeTruthy()
    await page.locator("#terms").uncheck()
    expect(await page.locator("#terms").isChecked()).toBeFalsy()

    await page.pause()

})