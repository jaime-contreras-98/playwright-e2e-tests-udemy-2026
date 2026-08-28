# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test-1.spec.ts >> Nopcommerce tests >> Nopcommerce login
- Location: tests/test-1.spec.ts:16:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('ul[role="menu"] > li.nav-item').filter({ hasText: 'Customers' })
Expected: visible
Error: strict mode violation: locator('ul[role="menu"] > li.nav-item').filter({ hasText: 'Customers' }) resolved to 2 elements:
    1) <li class="nav-item has-treeview">…</li> aka getByText('Customers Customers Customer')
    2) <li class="nav-item has-treeview">…</li> aka getByText('Reports PowerBI Sales summary')

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('ul[role="menu"] > li.nav-item').filter({ hasText: 'Customers' })

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e3]:
    - list [ref=e4]:
      - listitem [ref=e5]:
        - link [ref=e6] [cursor=pointer]:
          - /url: "#"
    - link [ref=e8] [cursor=pointer]:
      - /url: /Admin
    - list [ref=e10]:
      - listitem
      - listitem [ref=e11]:
        - link "John Smith":
          - /url: "#"
      - listitem [ref=e12]:
        - link "Logout" [ref=e13] [cursor=pointer]:
          - /url: /logout
      - listitem
      - listitem [ref=e14]:
        - link [ref=e15] [cursor=pointer]:
          - /url: "#"
  - complementary [ref=e17]:
    - link "logo.png" [ref=e18] [cursor=pointer]:
      - /url: /Admin
      - img "logo.png" [ref=e19]
    - generic [ref=e20]:
      - textbox "Search" [ref=e23]
      - navigation [ref=e24]:
        - menu [ref=e25]:
          - listitem [ref=e26]:
            - link "Dashboard" [ref=e27] [cursor=pointer]:
              - /url: /Admin
              - paragraph [ref=e29]: Dashboard
          - listitem [ref=e30]:
            - link "Catalog" [ref=e31] [cursor=pointer]:
              - /url: "#"
              - paragraph [ref=e33]: Catalog
          - listitem [ref=e35]:
            - link "Sales" [ref=e36] [cursor=pointer]:
              - /url: "#"
              - paragraph [ref=e38]: Sales
          - listitem [ref=e40]:
            - link "Customers" [ref=e41] [cursor=pointer]:
              - /url: "#"
              - paragraph [ref=e43]: Customers
          - listitem [ref=e45]:
            - link "Promotions" [ref=e46] [cursor=pointer]:
              - /url: "#"
              - paragraph [ref=e48]: Promotions
          - listitem [ref=e50]:
            - link "Content management" [ref=e51] [cursor=pointer]:
              - /url: "#"
              - paragraph [ref=e53]: Content management
          - listitem [ref=e55]:
            - link "Configuration" [ref=e56] [cursor=pointer]:
              - /url: "#"
              - paragraph [ref=e58]: Configuration
          - listitem [ref=e60]:
            - link "System" [ref=e61] [cursor=pointer]:
              - /url: "#"
              - paragraph [ref=e63]: System
          - listitem [ref=e65]:
            - link "Reports" [ref=e66] [cursor=pointer]:
              - /url: "#"
              - paragraph [ref=e68]: Reports
          - listitem [ref=e70]:
            - link "Help" [ref=e71] [cursor=pointer]:
              - /url: "#"
              - paragraph [ref=e73]: Help
  - generic [ref=e75]:
    - heading "Dashboard" [level=1] [ref=e77]
    - generic [ref=e82]:
      - generic [ref=e85]:
        - generic [ref=e86]:
          - generic [ref=e87]: NopCommerce News
          - button [ref=e90] [cursor=pointer]
        - generic [ref=e93]:
          - generic [ref=e95]:
            - link "PayPal Commerce" [ref=e97] [cursor=pointer]:
              - /url: https://www.nopcommerce.com/paypal-commerce-the-official-integration?utm_source=demo-admin-panel&utm_medium=dashboard&utm_campaign=paypal
            - generic [ref=e98]:
              - text: PayPal Commerce delivers a complete payments platform with the global scale and flexibility your business needs to stay competitive.
              - link "Download" [ref=e99] [cursor=pointer]:
                - /url: https://www.nopcommerce.com/paypal-commerce-the-official-integration?utm_source=demo-admin-panel&utm_medium=dashboard&utm_campaign=paypal
              - text: the plugin.
          - generic [ref=e101]:
            - link "\"Powered by nopCommerce\" link" [ref=e103] [cursor=pointer]:
              - /url: https://www.nopcommerce.com/nopcommerce-copyright-removal-key?utm_source=demo-admin-panel&utm_medium=dashboard&utm_campaign=powered_by_nopcommerce
            - generic [ref=e104]:
              - text: Would you like to remove the "Powered by nopCommerce" link in the bottom of the footer? Click
              - link "here" [ref=e105] [cursor=pointer]:
                - /url: https://www.nopcommerce.com/nopcommerce-copyright-removal-key?utm_source=demo-admin-panel&utm_medium=dashboard&utm_campaign=powered_by_nopcommerce
              - text: for more info.
          - generic [ref=e107]:
            - link "Recommended hosting for your store" [ref=e109] [cursor=pointer]:
              - /url: https://www.everleap.com/cloud-hosting/web-app/nopcommerce/hosting/?utm_source=NOPC&utm_medium=TXT&utm_content=PREMCP&utm_campaign=MIG30DYS
            - generic [ref=e110]:
              - text: Everleap cloud hosting seamlessly scales sites with ease and they move stores for free.
              - link "Learn more" [ref=e111] [cursor=pointer]:
                - /url: https://www.everleap.com/cloud-hosting/web-app/nopcommerce/hosting/?utm_source=NOPC&utm_medium=TXT&utm_content=PREMCP&utm_campaign=MIG30DYS
              - text: and get a 30 day free trial.
      - generic [ref=e114]:
        - generic [ref=e115]:
          - generic [ref=e116]: Common statistics
          - button [ref=e119] [cursor=pointer]
        - generic [ref=e122]:
          - generic [ref=e124]:
            - generic [ref=e125]:
              - heading "5" [level=3] [ref=e126]
              - paragraph [ref=e127]: Orders
            - generic [ref=e128]: 
            - link "More info" [ref=e129] [cursor=pointer]:
              - /url: /Admin/Order/List
              - text: More info
          - generic [ref=e132]:
            - generic [ref=e133]:
              - heading "0" [level=3] [ref=e134]
              - paragraph [ref=e135]: Pending return requests
            - generic [ref=e136]: 
            - link "More info" [ref=e137] [cursor=pointer]:
              - /url: /Admin/ReturnRequest/List
              - text: More info
          - generic [ref=e140]:
            - generic [ref=e141]:
              - heading "8" [level=3] [ref=e142]
              - paragraph [ref=e143]: Registered customers
            - generic [ref=e144]: 
            - link "More info" [ref=e145] [cursor=pointer]:
              - /url: /Admin/Customer/List
              - text: More info
          - generic [ref=e148]:
            - generic [ref=e149]:
              - heading "1" [level=3] [ref=e150]
              - paragraph [ref=e151]: Low stock products
            - generic [ref=e152]: 
            - link "More info" [ref=e153] [cursor=pointer]:
              - /url: /Admin/Report/LowStock
              - text: More info
      - generic [ref=e155]:
        - generic [ref=e158]:
          - heading "Orders" [level=3] [ref=e159]: Orders
          - generic [ref=e161]:
            - button "Year" [ref=e162] [cursor=pointer]
            - button "Month" [ref=e163] [cursor=pointer]
            - button "Week" [ref=e164] [cursor=pointer]
            - button [ref=e165] [cursor=pointer]
        - generic [ref=e172]:
          - heading "New customers" [level=3] [ref=e173]: New customers
          - generic [ref=e175]:
            - button "Year" [ref=e176] [cursor=pointer]
            - button "Month" [ref=e177] [cursor=pointer]
            - button "Week" [ref=e178] [cursor=pointer]
            - button [ref=e179] [cursor=pointer]
      - generic [ref=e184]:
        - generic [ref=e187]:
          - heading "Order totals" [level=3] [ref=e188]: Order totals
          - button [ref=e191] [cursor=pointer]
        - generic [ref=e196]:
          - heading "Incomplete orders" [level=3] [ref=e197]: Incomplete orders
          - button [ref=e200] [cursor=pointer]
      - generic [ref=e203]:
        - generic [ref=e206]:
          - heading "Latest Orders View All Orders" [level=3] [ref=e207]:
            - text: Latest Orders
            - link "View All Orders" [ref=e209] [cursor=pointer]:
              - /url: /Admin/Order/List
          - button [ref=e211] [cursor=pointer]
        - generic [ref=e216]:
          - heading "Popular search keywords" [level=3] [ref=e217]: Popular search keywords
          - button [ref=e220] [cursor=pointer]
      - generic [ref=e223]:
        - generic [ref=e226]:
          - heading "Bestsellers by quantity" [level=3] [ref=e227]: Bestsellers by quantity
          - button [ref=e230] [cursor=pointer]
        - generic [ref=e235]:
          - heading "Bestsellers by amount" [level=3] [ref=e236]: Bestsellers by amount
          - button [ref=e239] [cursor=pointer]
  - generic [ref=e245]:
    - generic [ref=e246]:
      - text: Powered by
      - link "nopCommerce" [ref=e247] [cursor=pointer]:
        - /url: https://www.nopcommerce.com/?utm_source=demo-admin-panel&utm_medium=footer&utm_campaign=admin-panel
    - generic [ref=e248]: Monday, August 24, 2026 4:31 PM
    - generic [ref=e249]: nopCommerce version 4.90.4
```

# Test source

```ts
  1  | import { expect, type Locator, type Page } from '@playwright/test';
  2  | import { log } from '../../helpers/logger';
  3  | 
  4  | export default class BasePage {
  5  |     readonly page: Page;
  6  | 
  7  |     constructor(page: Page) {
  8  |         this.page = page;
  9  |     };
  10 | 
  11 |     async navigateTo(url: string) {
  12 |         await log('info', `Navigating to path ${url}`);
  13 |         await this.page.goto(url);
  14 |     };
  15 | 
  16 |     async click(element: Locator) {
  17 |         try {
> 18 |             await expect(element).toBeVisible({ timeout: 10_000 });
     |                                   ^ Error: expect(locator).toBeVisible() failed
  19 |             await element.click();
  20 |         } catch (error) {
  21 |             await log('error', `Failed to click ${element.toString()}, error: ${error}`);
  22 |             throw error;
  23 |         };
  24 |     };
  25 | 
  26 |     async type(element: Locator, text: string) {
  27 |         try {
  28 |             await expect(element).toBeVisible({ timeout: 10_000 });
  29 |             await element.fill(text);
  30 |         } catch (error) {
  31 |             await log('error', `Failed to type on element ${element.toString()}, error: ${error}`);
  32 |             throw error;
  33 |         };
  34 |     };
  35 | 
  36 |     async select(element: Locator, text: string) {
  37 |         try {
  38 |             await expect(element).toBeVisible({ timeout: 10_000 });
  39 |             await element.selectOption(text);
  40 |         } catch (error) {
  41 |             await log('error', `Failed to select option on ${element.toString()}, error: ${error}`);
  42 |             throw error;
  43 |         };
  44 |     };
  45 | 
  46 |     async check(element: Locator) {
  47 |         try {
  48 |             await expect(element).toBeVisible({ timeout: 10_000 });
  49 |             await element.check();
  50 |         } catch (error) {
  51 |             await log('error', `Failed to check element ${element.toString()}, error: ${error}`);
  52 |             throw error;
  53 |         };
  54 |     };
  55 | 
  56 |     async assertText(element: Locator, message: string) {
  57 |         try {
  58 |             await expect(element).toBeVisible({ timeout: 10_000 });
  59 |             await expect(element).toHaveText(message);
  60 |         } catch (error) {
  61 |             await log('error', `Failed to assert on text element ${element.toString()}, error: ${error}`);
  62 |             throw error;
  63 |         };
  64 |     };
  65 | 
  66 |     async assertElementIsVisible(element: Locator) {
  67 |         try {
  68 |             await expect(element).toBeVisible({ timeout: 10_000 });
  69 |         } catch (error) {
  70 |             await log('error', `Failed to assert on element visibility ${element.toString()}, error: ${error}`);
  71 |             throw error;
  72 |         };
  73 |     };
  74 | };
  75 | 
  76 | 
  77 | 
  78 | 
```