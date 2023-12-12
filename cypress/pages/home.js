export class homePage {
    //Locators
    constructor(){
        this.url = 'https://www.aliexpress.com/';
        this.cookiesManagement = ':nth-child(1) > #gdpr-new-container';
        this.cookiesAcceptButton = '.btn-accept';
        this.personalizeCookiesButtonLocator = '.btn-more';
        this.closeWindowPersonalize = '.ui-window-close';
        this.cookiesSaveButtonLocator = '.btn-save';
        this.popUpModal = '.image-poplayer-modal';
        this.searchBar = '#search-words';
        this.discoverMore = '[data-spm="discover_more"] > .src--title--1Scd3D2'
        this.searchButton = '.search--submit--2VTbd-T';
        this.nextPageButton = '.comet-pagination-next > .comet-pagination-item-link'
    }

    navigate(){
        cy.visit(this.url)
    }

    checkCookiesManagement(){
        cy.get(this.cookiesManagement).should('be.visible');
    }

    personalizeCookiesButton(){
        cy.get(this.personalizeCookiesButtonLocator).click()
    }

    clickSaveCookiesButton(){
        cy.get(this.cookiesSaveButtonLocator).click()
    }

    closeWindowCookiesPersonalize(){
        cy.get(this.closeWindowPersonalize).click()
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

    searchDiscoverMore(){
        cy.get(this.discoverMore).should('be.visible')
    }

    typeSearchEnter(element){
        cy.get(this.searchBar).type(element)
    }

    clickSearchButton(){
        cy.get(this.searchButton).should('be.be.visible').click()
    }

}