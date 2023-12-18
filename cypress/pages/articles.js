export class ArticlesPage {
    // Locators
    constructor() {
      this.quantityStock = '.quantity--info--Lv_Aw6e > div > span';
    }
  
    getStockText() {
      return cy.get(this.quantityStock).invoke('text');
    }
  
    getStock(){
      this.getStockText().then((stockText) => {
        cy.log(`Article stock:: ${stockText}`);
        expect(parseInt(stockText)).to.be.greaterThan(0);
      });
    }

    checkStock() {
        this.getStockText().then((stockText) => {
          const stockQuantity = parseInt(stockText);
          cy.log(`Article stock: ${stockQuantity}`);
          if (stockQuantity === 0) {
            expect(stockQuantity).to.eq(0);
          } else {
            cy.log(`The stock of the item is not zero. Current stock: ${stockQuantity}`);
          }
        });
      }
  }