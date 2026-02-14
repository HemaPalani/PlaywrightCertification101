import { test, expect } from "@playwright/test";


test("TC-01 - Simple Form Demo displays correct message", async ({ page }) => {
  
  await page.goto("https://www.lambdatest.com/selenium-playground");

  await page.getByText("Simple Form Demo").click();

  await expect(page).toHaveURL(/.*simple-form-demo/);

  const message = "Welcome to LambdaTest";
  
  await page.locator('input[placeholder="Please enter your Message"]').fill(message);

  // Using different locator strategies
  //await page.locator('id=user-message').fill(message);
 // await page.locator('input[placeholder="Please enter your Message"]').fill(message);

  await page.getByRole('button', { name: 'Get Checked Value' }).click();

  const displayedText = await page.locator('id=message').textContent();
 // const displayedText = await page.locator('xpath=/html/body/div[1]/div/section[2]/div/div/div/div[1]/div[2]/div/div[2]').textContent();
 // const trimmedText = displayedText?.split(':')[1].trim();
  expect(displayedText).toBe(message);
  
  await page.close();
});