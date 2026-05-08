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

#### testDir: './tests'
* this is your test directory, if you run this command *npx playwright test* then all the test cases inside *./tests* directory will be executed.
* you can change it to any directory you want. you can also point it to a specific test case like this ./tests/test.spec.js

#### fullyParallel: true
* will execute your tests in parallel. if you don't want your tests to be executed parallel, make it false

#### retries: process.env.CI ? 2 : 0
* This means:
* In CI → retry failed tests 2 times
* Locally → no retries
* Equivalent logic:
``` javascript
if (process.env.CI) {
   retries = 2;
} else {
   retries = 0;
}
```

####  workers: process.env.CI ? 1 : undefined
* This means:
* In CI → run only 1 worker (single-threaded)
* Locally → use default workers

####  reporter: 'html'
* when you execute tests, you will see reports in html. you can change it to reporter of your choice

#### use:
* you can tailor *use* section according your needs
* lets say i want my tests to run in chrome browser only, you can add this option in use
``` javascript
use: {
    browserName: "chromium"
}
```

#### projects
* contains the browsers on which your tests will run
* comment or remove the browsers on which you don't want your tests to run

#### timeout
* by default playwright tests timeout is 30 seconds.
* you can change this by adding timeout of your choice like this
``` javascript
timeout: 30000
// timeout: 30 * 1000              you can also write it like this
```

#### assertions timeout
* for assertions playwright default timeout is 5 seconds.
* you can also change it in config file
``` javascript
expect: {
    timeout:10 * 1000
}
```

### Test Execution flow in Playwright :
* if tests are in the same spec file, then those tests run sequentially
* if there are multiple test spec files, then they run in parallel

### npx playwright test ?
* npx stands for node package executor.
* when you write npx playwright, it points towards the playwright package/library inside node_modules
* if you don't want to use npx, then you will write something like this *./node_modules/playwright/test*


