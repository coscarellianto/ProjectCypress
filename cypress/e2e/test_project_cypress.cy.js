/// <reference types="cypress" />

import { HomePage } from "../pages/home";
const homePage = new HomePage();

import { SearchPage } from "../pages/search";
const searchPage = new SearchPage();

import { ArticlesPage } from "../pages/articles";
const articlesPage = new ArticlesPage();


Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('ResizeObserver')) {
    // Prevent Cypress from crashing due to ResizeObserver-related errors
    return false;
  }
});

describe('Search element and check the stock', () => {
  beforeEach(() => {
    homePage.navigate();
    homePage.checkCookiesManagement();
    homePage.acceptManagementCookies();
    cy.waitUntil(() => {
      return homePage.checkPopUpVisibility().then(() => {
        homePage.closePopUpModal();
      });
    });
  });

  // Search
  it('Search Element, navigate from item', () => {
    const searchTerm = 'iphone';
    const expectedValue = 0;
    homePage.clickSearchBar();
    homePage.searchDiscoverMore();
    homePage.typeSearchEnter(searchTerm);
    homePage.checkSearchButton();
    homePage.clickSearchButton();
    searchPage.checkComponentPagination();
    searchPage.checkPaginationExists();
    searchPage.clickNumberPaginationButton();
    searchPage.checkArticle();
    searchPage.clickShoppingCard();
    articlesPage.getStock().then((stockText) => {
      expect(parseInt(stockText)).to.be.greaterThan(expectedValue);
    });
  });

  it('Search Element navigate from next button', () => {
    const searchTerm = 'iphone';
    const expectedValue = 0;
    homePage.clickSearchBar();
    homePage.typeSearchEnter(searchTerm);
    homePage.checkSearchButton();
    homePage.clickSearchButton();
    searchPage.checkComponentPagination();
    searchPage.checkNextButton();
    searchPage.clickNextButton();
    searchPage.checkArticle();
    searchPage.clickShoppingCard();
    articlesPage.getStock().then((stockText) => {
      expect(parseInt(stockText)).to.be.greaterThan(expectedValue);
    });
  });

  it('Search Element navigate from type number of page', () => {
    const searchTerm = 'iphone';
    const pageNumber = 2;
    const expectedValue = 0;
    homePage.clickSearchBar();
    homePage.typeSearchEnter(searchTerm);
    homePage.checkSearchButton();
    homePage.clickSearchButton();
    searchPage.checkComponentPagination();
    searchPage.typePaginationNumber(pageNumber);
    searchPage.checkConfirmationButton();
    searchPage.clickConfirmationButton();
    searchPage.checkArticle();
    searchPage.clickShoppingCard();
    articlesPage.getStock().then((stockText) => {
      expect(parseInt(stockText)).to.be.greaterThan(expectedValue);
    });
  });

  it('Search item and check stock text', () => {
    const searchTerm = 'iphone';
    const pageNumber = 2;
    const expectedValue = 0;
    homePage.clickSearchBar();
    homePage.typeSearchEnter(searchTerm);
    homePage.checkSearchButton();
    homePage.clickSearchButton();
    searchPage.checkComponentPagination();
    searchPage.typePaginationNumber(pageNumber);
    searchPage.checkConfirmationButton();
    searchPage.clickConfirmationButton();
    searchPage.checkArticle();
    searchPage.clickShoppingCard();
    articlesPage.getStock().then((stockText) => {
      expect(stockText).not.to.be.empty;
    });
  });
})