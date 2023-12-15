export class basePage {

    clickElement(locator) {
        cy.get(locator).click();
      }
    
      typeElement(locator, text) {
        cy.get(locator).type(text);
      }
    
      checkElementVisibility(locator, options) {
        return cy.get(locator).should('be.visible', options);
    }
    
      checkElementExistence(locator) {
        cy.get(locator).should('exist');
      }
}