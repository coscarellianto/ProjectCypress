export class searchPage {
    //Locators
    constructor(){
        this.paginationButton = '.comet-pagination-item-2 > a';
        this.secondCardList = '#card-list > :nth-child(2)';
        this.shoppingCard = ':nth-child(2) > .multi--outWrapper--SeJ8lrF > .multi--container--1UZxxHY > .multi--image--2bIiWPB > .multi--shopCart--darm7xs'
    }

    clickNextPage(){
        cy.get(this.paginationButton).click()
    }

    checkSecondArticle(){
        cy.get(this.secondCardList).should('be.visible')
    }

    clickShoppingCard(){
        cy.get(this.shoppingCard).click()
    }
}