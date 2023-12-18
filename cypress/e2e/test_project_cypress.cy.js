/// <reference types="cypress" />

import { HomePage } from "../pages/home";
const home_page = new HomePage();

import { SearchPage } from "../pages/search";
const search_page = new SearchPage();

import { ArticlesPage } from "../pages/articles";
const articles_page = new ArticlesPage();


Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('ResizeObserver')) {
    // Prevent Cypress from crashing due to ResizeObserver-related errors
    return false;
  }
});

describe('Search element and check the stock', () => {
  beforeEach(() => {
    home_page.navigate();
    home_page.checkCookiesManagement();
    home_page.acceptManagementCookies();
    home_page.closePopUpModal();
  });

  // Search
  it('Search Element, navigate from item', () => {
    const searchTerm = 'iphone'; 
    home_page.clickSearchBar();
    home_page.searchDiscoverMore();
    home_page.typeSearchEnter(searchTerm);
    home_page.checkSearchButton();
    home_page.clickSearchButton();
    search_page.checkComponentPagination();
    search_page.checkPaginationExists();
    search_page.clickNumberPaginationButton();
    search_page.checkArticle();
    search_page.clickShoppingCard();
    articles_page.getStock()
  });

  it('Search Element navigate from next button', () => {
    const searchTerm = 'iphone'; 
    home_page.clickSearchBar();
    home_page.typeSearchEnter(searchTerm);
    home_page.checkSearchButton();
    home_page.clickSearchButton();
    search_page.checkComponentPagination();
    search_page.checkNextButton();
    search_page.clickNextButton();
    search_page.checkArticle();
    search_page.clickShoppingCard();
    articles_page.getStock()
  });

  it('Search Element navigate from type number of page', () => {
    const searchTerm = 'iphone'; 
    const pageNumber = 2;
    home_page.clickSearchBar();
    home_page.typeSearchEnter(searchTerm);
    home_page.checkSearchButton();
    home_page.clickSearchButton();
    search_page.checkComponentPagination();
    search_page.typePaginationNumber(pageNumber);
    search_page.checkConfirmationButton();
    search_page.clickConfirmationButton();
    search_page.checkArticle();
    search_page.clickShoppingCard();
    articles_page.getStock()
  });

  it('Search item and wait if it has 0 stock otherwise log message', () => {
    const searchTerm = 'iphone'; 
    const pageNumber = 2;
    home_page.clickSearchBar();
    home_page.typeSearchEnter(searchTerm);
    home_page.checkSearchButton();
    home_page.clickSearchButton();
    search_page.checkComponentPagination();
    search_page.typePaginationNumber(pageNumber);
    search_page.checkConfirmationButton();
    search_page.clickConfirmationButton();
    search_page.checkArticle();
    search_page.clickShoppingCard();
    articles_page.checkStock()
  })
})