/// <reference types="cypress" />

import { homePage } from "../pages/home";
const home_page = new homePage()

import { searchPage } from "../pages/search";
let search_page = new searchPage()


Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('ResizeObserver')) {
      // Prevent Cypress from crashing due to ResizeObserver-related errors
      return false;
    }
  });
  
  describe('Search element and check the stock', function(){
    beforeEach(function () {
        home_page.navigate();
        home_page.checkCookiesManagement();
        home_page.acceptManagementCookies();
        home_page.closePopUpModal();
    });

    //Search
    it('Search Element', function(){
      home_page.clickSearchBar();
      home_page.typeSearchEnter('iphone');
      home_page.clickSearchButton();
      search_page.clickNextPage();
      search_page.checkSecondArticle();
      search_page.clickShoppingCard()
    })
  })