export class homePage {
    //Locators
    constructor(){
        this.url = 'https://www.aliexpress.com/';
        this.cookiesManagement = ':nth-child(1) > #gdpr-new-container';
        this.cookiesAcceptButton = '.btn-accept';
        this.popUpModal = '.image-poplayer-modal';
        this.searchBar = '#search-words';
        this.searchButton = '.search--submit--2VTbd-T';
        this.nextPageButton = '.comet-pagination-next > .comet-pagination-item-link'
    }

    navigate(){
        cy.visit(this.url)
    }

    checkCookiesManagement(){
        cy.get(this.cookiesManagement).should('be.visible');
    }

    acceptManagementCookies(){
        cy.get(this.cookiesAcceptButton).click();
    }

    closePopUpModal(){
        cy.get(this.popUpModal).parent().invoke('remove');
    }

    clickSearchBar(){
        cy.get(this.searchBar).click()
    }

    typeSearchEnter(element){
        cy.get(this.searchBar).type(element)
    }

    clickSearchButton(){
        cy.get(this.searchButton).click()
    }

}