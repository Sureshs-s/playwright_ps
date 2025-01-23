class Assertions {

    /**
     * Asserts that the element's text matches the expected text.
     * @param {import('@playwright/test').Page} page - The Playwright page instance.
     * @param {string} selector - The selector of the element.
     * @param {string} expectedText - The text to compare against.
     */
    static async assertTextEquals(page, selector, expectedText) {
      const actualText = await page.textContent(selector);
      if (actualText !== expectedText) {
        throw new Error(`Assertion failed: expected '${expectedText}', but got '${actualText}'`);
      }
    }
  
    /**
     * Asserts that an element is visible on the page.
     * @param {import('@playwright/test').Page} page - The Playwright page instance.
     * @param {string} selector - The selector of the element.
     */
    static async assertElementVisible(page, selector) {
      const isVisible = await page.isVisible(selector);
      if (!isVisible) {
        throw new Error(`Assertion failed: Element '${selector}' is not visible.`);
      }
    }
  
    /**
     * Asserts that an element is hidden on the page.
     * @param {import('@playwright/test').Page} page - The Playwright page instance.
     * @param {string} selector - The selector of the element.
     */
    static async assertElementHidden(page, selector) {
      const isHidden = !(await page.isVisible(selector));
      if (!isHidden) {
        throw new Error(`Assertion failed: Element '${selector}' is visible.`);
      }
    }
  
    /**
     * Asserts that an element is enabled.
     * @param {import('@playwright/test').Page} page - The Playwright page instance.
     * @param {string} selector - The selector of the element.
     */
    static async assertElementEnabled(page, selector) {
      const isEnabled = await page.isEnabled(selector);
      if (!isEnabled) {
        throw new Error(`Assertion failed: Element '${selector}' is not enabled.`);
      }
    }
  
    /**
     * Asserts that an element is disabled.
     * @param {import('@playwright/test').Page} page - The Playwright page instance.
     * @param {string} selector - The selector of the element.
     */
    static async assertElementDisabled(page, selector) {
      const isDisabled = !(await page.isEnabled(selector));
      if (!isDisabled) {
        throw new Error(`Assertion failed: Element '${selector}' is not disabled.`);
      }
    }
  
    /**
     * Asserts that the page's URL matches the expected URL.
     * @param {import('@playwright/test').Page} page - The Playwright page instance.
     * @param {string} expectedUrl - The expected URL.
     */
    static async assertUrlEquals(page, expectedUrl) {
      const actualUrl = page.url();
      if (actualUrl !== expectedUrl) {
        throw new Error(`Assertion failed: expected URL '${expectedUrl}', but got '${actualUrl}'`);
      }
    }
  
    /**
     * Asserts that the page's title matches the expected title.
     * @param {import('@playwright/test').Page} page - The Playwright page instance.
     * @param {string} expectedTitle - The expected title.
     */
    static async assertTitleEquals(page, expectedTitle) {
      const actualTitle = await page.title();
      if (actualTitle !== expectedTitle) {
        throw new Error(`Assertion failed: expected title '${expectedTitle}', but got '${actualTitle}'`);
      }
    }
  
  }
  
  module.exports = Assertions;
  
  class Utils {
  
    static async scrollDown(page, distance) {
      await page.mouse.wheel(0, distance);
    }
  
    static async scrollUp(page, distance) {
      await page.mouse.wheel(0, -distance);
    }
  
    static async waitForTimeout(page, duration) {
      await page.waitForTimeout(duration);
    }
  
    static async waitForElementVisible(page, selector) {
      await page.waitForSelector(selector, { state: 'visible' });
    }
  
    static async waitForElementHidden(page, selector) {
      await page.waitForSelector(selector, { state: 'hidden' });
    }
  
    static async hoverOverElement(page, selector) {
      await page.hover(selector);
    }
  
    static async dragAndDrop(page, sourceSelector, targetSelector) {
      const source = await page.locator(sourceSelector);
      const target = await page.locator(targetSelector);
      await source.dragTo(target);
    }
  
    static async rightClick(page, selector) {
      await page.click(selector, { button: 'right' });
    }
  
    static async clearAndType(page, selector, text) {
      await page.fill(selector, ''); // Clear the field
      await page.type(selector, text); // Type the new text
    }
  
    static async pressKey(page, selector, key) {
      const element = await page.locator(selector);
      await element.press(key);
    }
  
    static async clickIfVisible(page, selector) {
      const isVisible = await page.isVisible(selector);
      if (isVisible) {
        await page.click(selector);
      }
    }
  
    static async getElementText(page, selector) {
      return await page.textContent(selector);
    }
  
    static async navigateTo(page, url) {
      await page.goto(url, { waitUntil: 'load' });
    }
  
    static async captureScreenshot(page, filePath, options = { fullPage: true }) {
      await page.screenshot({ path: filePath, ...options });
    }
  
    static async selectDropdownByValue(page, selector, value) {
      await page.selectOption(selector, { value });
    }
  
    static async selectDropdownByText(page, selector, label) {
      await page.selectOption(selector, { label });
    }
  
    static async acceptAlert(page) {
      page.on('dialog', async (dialog) => {
        await dialog.accept();
      });
    }
  
    static async dismissAlert(page) {
      page.once('dialog', async (dialog) => {
        await dialog.dismiss();
      });
    }
  }
  
  module.exports = Utils;
  