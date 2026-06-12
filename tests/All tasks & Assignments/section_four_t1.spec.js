import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
  // Registration Flow   
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.getByText('Register here').click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('demo');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('test');
  await page.getByRole('textbox', { name: 'email@example.com' }).fill('test@777.com');
  await page.getByRole('textbox', { name: 'enter your number' }).fill('1234567890');
  await page.getByRole('combobox').selectOption('3: Engineer');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('textbox', { name: 'Passsword' }).fill('777Abcab))');
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('777Abcab))');
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Register' }).click();

  // Check if user already exists
  const userExistsMessage = page.getByText('User already exisits with this Email Id!').textContent();

  // Here i encountered a problem, before this approach i was not storing popup text if the user already existed
  // i was just extract locator and i validated it like this - await userExistsMessage.isVisible()
  // but tests were failing because the popup was only there for short time and then it would vanish
  // and by the time i was checking that if it is visible ? it would already vanished and test were failing
  // so that is why after registering i immediately extract the popup text & validated if the variable has a text
  // if yes it means that popup appeared and we stored its text, meaning user exists and hence goto login page

  if (await userExistsMessage) {

    console.log('User already exists. Logging in...');

    // Go back to login page
    await page.getByText('Login here').click();
  }

  //   Login Flow
  await page.getByRole('textbox', { name: 'email@example.com' }).fill('test@777.com');
  await page.getByRole('textbox', { name: 'enter your passsword' }).fill('777Abcab))');
  await page.getByRole('button', { name: 'Login' }).click();  

  // Wait for products page
  await page.waitForLoadState('networkidle');

  // Extract title of the first product
  console.log(await page.getByText("ADIDAS ORIGINAL").textContent())
});