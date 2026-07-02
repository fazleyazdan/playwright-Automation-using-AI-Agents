// const {test} = require("@playwright/test")
import {expect, test} from "@playwright/test"


test("My First Test", async ({browser}) => {

 
// Whenever you want to handle a new page or tab, then you have to create a new context
 
     const context = await browser.newContext()                 // open context (browser)
     const page = await context.newPage()                       // open new tab
     await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
     const newTabLink = page.locator("[href*='documents-request']")
/* 
    - In Playwright, if you wanna open a new page. you have to create a listener called waitForEvent('page').
      Here what it does, is that it waits for an event 'page'. we have passed 'page' so that event will wait for a new page/tab.
    
    - In playwright every method is Asynchronus, so if you write your code like this,
      const page2 = context.waitForEvent('page')
      await newTabLink.click()

    - in this approach the method listening for new page will be executed first because there is no await,
      and the test will fail because the new page is opened in the next statement.
      
    - Now you will be thinking to put await with the waitForEvent method, Like this.
      const page2 = await context.waitForEvent('page')    // wait here until the timeout
      await newTabLink.click()                            // this step never reaches
        - But this approach has also problem, Here we have put await to listen for the new page event.
          However, it won't go to the next step & it is waiting for the page which will be opened when the next step
          is executed. and we know it will timeout before the next step execution because we have put await in the first step.


    - Solution :
        - so in this case we need to execute steps in parallel or with each other.
          and for that we will need Promise.all([]).
        - when do we use it : so if you want more than one steps two execute parallely because it has
          may have dependency on each other, then you can use promise.all()

    - Promise.all ( [] ) 
      this methode takes an array of promises. if you want to entertain two promises at the same time then use Promise.all
      
      definition :
      Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected.
      @param values — An array of Promises.
      @returns — A new Promise. 

    - Types of Promises :
        1. Fullfilled
        2. Pending
        3. Rejected
*/       
 
const [newPage] = Promise.all([

    context.waitForEvent('page'),
    newTabLink.click()
])

await page.pause()

})