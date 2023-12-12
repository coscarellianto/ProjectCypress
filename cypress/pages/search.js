export class searchPage {
    //Locators
    constructor(){
        this.paginationComponent = '.comet-pagination';
        this.paginationButton = '.comet-pagination-item-2 > a';
        this.CardList = '#card-list > :nth-child(2)';
        this.nextPaginationButton = '.comet-pagination-next > .comet-pagination-item-link'
        this.pageLocatorInput = '.comet-pagination-options-quick-jumper > input'
        this.confirmationButton = '.comet-pagination-options-quick-jumper-button'
        this.shoppingCard = ':nth-child(2) > .multi--outWrapper--SeJ8lrF > .multi--container--1UZxxHY > .multi--image--2bIiWPB > .multi--shopCart--darm7xs'
    }

    checkComponentPagination(){
        cy.get(this.paginationComponent).should('exist')
    }

    checkPaginationExists(){
        cy.get(this.paginationButton).should('exist')
    }
    
    clickNumberPaginationButton(){
        cy.get(this.paginationButton).click()
    }

    clickNextButton(){
        cy.get(this.nextPaginationButton).should('exist').click()
    }

    typePaginationNumber(number){
        cy.get(this.pageLocatorInput).type(number)
    }

    clickConfirmationButton(){
        cy.get(this.confirmationButton).should('exist').click()
    }

    checkArticle(){
        cy.get(this.CardList).should('be.visible')
    }

    clickShoppingCard(){
        cy.get(this.shoppingCard).click()
    }
}