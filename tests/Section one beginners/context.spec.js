// const {test} = require("@playwright/test")
import {expect, test} from "@playwright/test"


test.describe ("test suit", ()=>{
test("My First Test", async ({browser}) => {

    /* 
    
⭐  if you are wondering why is the browser in curly braces,
     reason for that is because it is a playwright fixture, if you write it without
     curly braces then it will be treated as normal argument passed to the function

⭐  if you wanna open a browser for test automation, then it may contains some tailored
     cookies or some plugins etc. 
     So to tackle this situation we can use newContext to open a fresh browser with new tab.

    */

     const context = await browser.newContext()                 // open context (browser)
     const page = await context.newPage()                       // open new tab
     await page.goto("https://www.google.com/")

     /* 
⭐  Some info about contexts :
     Since the browser is a fresh browser with a new tab, if you wanna insert some thing so which may be
     necessary for your automation. for example if the test require some proxy to be executed then you may some info
     to the context that use this proxy when the context is created.
     or if your tests require login for multiple test cases, then what you can do is that you can pass login cookies or
     sessions authentication info to the context, and as long as the timeout is not happening and the tests are executed in
     that context, then you won't need to login for those tests
     */

    
})


test("using page fixture", async ({browser, page}) => {

    /*
    if you don't wanna pass some special cases like vpn or login cookies to the context,
    then you don't need to create a new context and page, you can just use page fixture.
    it will create context and page for you. you don't need to write code explicitly for that
    */  

    await page.goto("https://www.google.com")
    console.log(await page.title())
    await expect(page).toHaveTitle("Google")

})

})