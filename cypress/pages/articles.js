export class ArticlesPage {

  // Locators
  static quantityStock = '.quantity--info--Lv_Aw6e > div > span';

  getStock() {
    return cy.get(ArticlesPage.quantityStock).invoke('text');
  }
}