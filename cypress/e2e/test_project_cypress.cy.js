/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('ResizeObserver')) {
      // Evitar que Cypress falle por errores relacionados con ResizeObserver
      return false;
    }
  });
  
it('Iniciar AliExpress', function(){
    cy.visit('https://www.aliexpress.com')
    cy.get(':nth-child(1) > #gdpr-new-container')
    cy.get('.btn-accept').click()
})
