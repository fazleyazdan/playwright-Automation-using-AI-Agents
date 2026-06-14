// Techniques to wait dynamically for new page in Service based applications

import { test, expect } from '@playwright/test';

test('Dynamic Waits Handling', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.getByRole('textbox', { name: 'email@example.com' }).fill('test@777.com');
    await page.getByRole('textbox', { name: 'enter your passsword' }).fill('777Abcab))');
    await page.getByRole('button', { name: 'Login' }).click();  

    // if you are automating service based app, where API calls are made & it takes some time in response
    // then allTextContent() is not useful as it will return an empty array
    // To tackle this situation we can "networkidle"

    await page.waitForLoadState('networkidle');
    
    // what is Load State, Playwright will wait for the network tab to become idle
    // in other words when all the API Response requests are received.
    // the app which we are automating, data is handled from the BE through APIs
    // that is why we have used network idle

    // Some people have reported issues like "networkidle is not working" as it is also flaky sometimes

    //to tackle this situation, before "alltextcontent" use something so that it extract or activate the DOM
    // for the required data and then later use allTextContent , otherwise you will get empty array,
    
    // console.log(await page.locator(".card-body b").first().textContent())

    // Here what it did is that it activated the dom or the response is received for that API call
    // once we have got the response , all are elements are loaded , so all the text content is there 

    console.log(await page.locator(".card-body b").allTextContents())
    // but it has 1 drawback, there is no auto waits in PW for that method just like we have for textContent()
    // in case of textContent() if element is not present then you will get NoSuchElement Exception for which PW will wait until the auto timeout
    // if the page is loading and the method is called, even if did not fetch any text, array has 0 elements like this [0] and it is valid for PW
     
})