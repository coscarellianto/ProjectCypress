export class articlesPage{
    //Locators
    constructor(){
        this.quantityStock = '.quantity--info--Lv_Aw6e > div > span'
    }

    getStockText() {
     return cy.get(this.quantityStock).invoke('text');
          }
    }