/// <reference types="cypress" />

import { searchPage } from "../page_objects/search.cy";
const search_page = new searchPage()

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('ResizeObserver')) {
      // Evitar que Cypress falle por errores relacionados con ResizeObserver
      return false;
    }
  });
  
describe('Navigate to AliExpress', function(){
    cy.visit('https://www.aliexpress.com')
    cy.get(':nth-child(1) > #gdpr-new-container')
    cy.get('.btn-accept').click()
    /* cy.get('.image-poplayer-modal')
      .get('.pop-content')
      .get('img.pop-close-btn').click() */
    cy.get('.image-poplayer-modal').parent().invoke('remove');
})

    //Search
    it('Search Element', function(){
      search_page.clickSearchBar();
      search_page.typeSearchEnter('iphone{enter}');
      cy.get('.comet-pagination-next > .comet-pagination-item-link').click()
      cy.get('#card-list > :nth-child(2)').should('be.visible')
      cy.get(':nth-child(2) > .multi--outWrapper--SeJ8lrF > .multi--container--1UZxxHY > .multi--image--2bIiWPB > .multi--shopCart--darm7xs').click()
    
    })
    
