import { defineConfig, devices } from '@playwright/test';

/** Set LT_USERNAME, LT_ACCESS_KEY in command prompt using 
 * set LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
 * set LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY" 
 **/

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  timeout: 60000,
  retries: process.env.CI? 1 : 0, 
  reporter: 'html',
  use: {
    trace: 'on',
    video: 'on',
    screenshot: 'on',
  },


  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Chromium - Windows 10',
      use: {
        browserName: 'chromium',
        connectOptions: {
          wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
            JSON.stringify({
              browserName: 'pw-chromium',
              browserVersion: 'latest',
              'LT:Options': {
                platform: 'Windows 10',
                build: 'Playwright 101 Certification',
                name: 'Chromium Test',
                user: process.env.LT_USERNAME,
                accessKey: process.env.LT_ACCESS_KEY,
                network: true,
                console: true,
                video: true,
                tunnel: false,
              },
            })
          )}`,
        },
      },
    },
    {
      name: 'Firefox - macOS Catalina',
      use: {
        browserName: 'firefox',
        connectOptions: {
          wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
            JSON.stringify({
              browserName: 'pw-firefox',
              browserVersion: 'latest',
              'LT:Options': {
                platform: 'macOS Catalina',
                build: 'Playwright 101 Certification',
                name: 'Firefox Test',
                user: process.env.LT_USERNAME,
                accessKey: process.env.LT_ACCESS_KEY,
                network: true,
                console: true,
                video: true,
                tunnel: false,
              },
            })
          )}`,
        },
      },
    },
    {
      name: "Local",
      use: {
        browserName: "chromium",
        viewport: { width: 1280, height: 720 },
      },
    },
  ],

});