import test from '@playwright/test';
import LoginPage from '../pom/pages/nop-commerce/nopcommerce.login.page';
import HomePage from '../pom/pages/nop-commerce/nopcommerce.home.page';
import CustomerListPage from '../pom/pages/nop-commerce/nopcommerce.customer.list.page';
import data from '../../data/constants.json';

test.describe('Nopcommerce tests', () => {
    let url: string;
    let loginPage: LoginPage;
    let homePage: HomePage;
    let customerListPage: CustomerListPage;

    test.beforeEach('Set up tests', async ({ page }, testInfo) => {
        url = testInfo.project.use as any;
        loginPage = new LoginPage(page);
        homePage = new HomePage(page);
        customerListPage = new CustomerListPage(page);
    });

    test('Nopcommerce login', async ({ page }) => {
        const res = await page.request.get(`${url.apiUrl}${data.REQ_RES_ENDPOINTS.GET_USERS}`, {
            headers: {
                'x-api-key': process.env.UDEMY_API_KEY,
            }
        });
        const resData = await res.json();

        await loginPage.loginToCommerceApp(url.nopCommerceUrl, process.env.NOPCOMMERCE_USERNAME, process.env.NOPCOMMERCE_PASSWORD);
        await homePage.assertLoggedIn();
        await homePage.navigateSideMenu('Customers');
        await homePage.navigateSubSideMenu('Customers');

        for (const user of resData.data) {
            const userFound = await customerListPage.searchAndConfirmUser(user.first_name, user.last_name);
            if (userFound)
                console.log(`User ${user.first_name} ${user.last_name} was found!!`);
            else
                console.log(`User ${user.first_name} ${user.last_name} was not found...`);
        }
    });
});
