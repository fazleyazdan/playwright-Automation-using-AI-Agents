### Important Inteview Questions in this Session

* What feature of Playwright allows for easy interaction with elements across different

* Why is it important to use await when calling asynchronous Playwright functions?

* How can you identify if a new page has successfully opened after clicking a link?

* What is the purpose of the line browser. newContext (); ?

* What is the purpose of const [newPage] = await Promise. all([ ... ]); in the code?

```javascript
const [newPage]=await Promise. all(
[
context.waitForEvent('page')      // listen for any new page pending, rejected, fulfilled
documentLink.click()
]) 
```