/// <reference types="cypress" />

import { homePage } from "../pages/home";
const home_page = new homePage();

import { searchPage } from "../pages/search";
const search_page = new searchPage();

import { articlesPage } from "../pages/articles";
const articles_page = new articlesPage();

Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('ResizeObserver')) {
    // Prevent Cypress from crashing due to ResizeObserver-related errors
    return false;
  }
});

describe('Search element and check the stock', () => {
  beforeEach(() => {
    home_page.navigate();
    cy.wait(2000);
    home_page.checkCookiesManagement();
    home_page.acceptManagementCookies();
    cy.wait(3000);
    home_page.closePopUpModal();
  });

  // Search
  it('Search Element, navigate from item', () => {
    home_page.clickSearchBar();
    home_page.searchDiscoverMore();
    home_page.typeSearchEnter('iphone');
    home_page.clickSearchButton();
    search_page.checkComponentPagination();
    search_page.checkPaginationExists();
    search_page.clickNumberPaginationButton();
    search_page.checkArticle();
    search_page.clickShoppingCard();
    articles_page.getStockText().then((stockText) => {
      cy.log(`Article stock:: ${stockText}`);
      expect(parseInt(stockText)).to.be.greaterThan(0);
    });
  });

  it('Search Element navigate from next button', () => {
    home_page.clickSearchBar();
    home_page.typeSearchEnter('iphone');
    home_page.clickSearchButton();
    search_page.checkComponentPagination();
    search_page.clickNextButton();
    search_page.checkArticle();
    search_page.clickShoppingCard();
    articles_page.getStockText().then((stockText) => {
      cy.log(`Article stock:: ${stockText}`);
      expect(parseInt(stockText)).to.be.greaterThan(0);
    });
  });

  it('Search Element navigate from type number of page', () => {
    home_page.clickSearchBar();
    home_page.typeSearchEnter('iphone');
    home_page.clickSearchButton();
    search_page.checkComponentPagination();
    search_page.typePaginationNumber(2);
    search_page.clickConfirmationButton();
    search_page.checkArticle();
    search_page.clickShoppingCard();
    articles_page.getStockText().then((stockText) => {
      cy.log(`Article stock:: ${stockText}`);
      expect(parseInt(stockText)).to.be.greaterThan(0);
    });
  });

  it('Search item and wait if it has 0 stock otherwise log message', () => {
    home_page.clickSearchBar();
    home_page.typeSearchEnter('iphone');
    home_page.clickSearchButton();
    search_page.checkComponentPagination();
    search_page.typePaginationNumber(2);
    search_page.clickConfirmationButton();
    search_page.checkArticle();
    search_page.clickShoppingCard();
    articles_page.getStockText().then((stockText) => {
      const stockQuantity = parseInt(stockText);
      cy.log(`Article stock: ${stockQuantity}`);
      if (stockQuantity === 0) {
        expect(stockQuantity).to.eq(0);
      } else {
        cy.log(`The stock of the item is not zero. Current stock: ${stockQuantity}`);
      }
    });
  });
});