# playwright-Automation-using-AI-Agents

#### When doing Automation, one of the most important thing in your scaffold is configuration file.
#### Here i will list some info about playwright config file (playwright.config.js)
#### By default the config file look like this

```javascript

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
})

```

### testDir: './tests'
* this is your test directory, if you run this command *npx playwright test* then all the test cases inside
* *./tests* directory will be executed.
* you can change it to any directory you want. you can also point it to a specific test case like this ./tests/test.spec.js

### fullyParallel: true
* will execute your tests in parallel. if you don't want your tests to be executed parallel, make it false

### retries: process.env.CI ? 2 : 0
* This means:
* In CI → retry failed tests 2 times
* Locally → no retries
* Equivalent logic:
``` javascript
if (process.env.CI) {
   retries = 2;
} else {
   retries = 0;
}```

###  reporter: 'html'
* when you execute tests, you will see reports in html. you can change it to reporter of your choice


