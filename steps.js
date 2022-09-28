import { Given, When, Then } from '@wdio/cucumber-framework';

import basePage from '../pageobjects/base.page';
import homePage from '../pageobjects/login.page';
import videoPage from'../pageobjects/video.page';
const pages = {
    login: homePage
}
Given(/^I am on the website$/, async() => {
    basePage.openPage();
    homePage.login();
    
});

When(/^When I login to the iplayer page $/, async(username,password) => {
    homePage.login("balajichinnu","sample");
});

Then(/^Then I click on the green trigger$/, async () => {
    videoPage.greenTrigger();
    await expect(homePage.logo).toBePresent();
    browser.url(5000);
      
});

