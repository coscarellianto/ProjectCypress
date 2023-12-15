import {basePage} from "../pages/base";
const base_page = new basePage();

import 'cypress-wait-until';

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
        base_page.checkElementVisibility(this.cookiesManagement);
    }

    personalizeCookiesButton(){
        base_page.clickElement(this.personalizeCookiesButtonLocator)
    }

    clickSaveCookiesButton(){
        base_page.clickElement(this.cookiesSaveButtonLocator)
    }

    closeWindowCookiesPersonalize(){
        base_page.clickElement(this.closeWindowPersonalize)
    }

    acceptManagementCookies(){
        base_page.clickElement(this.cookiesAcceptButton)
    }

    closePopUpModal() {
        cy.waitUntil(() => 
            base_page.checkElementVisibility(this.popUpModal, {
                timeout: 10000, 
                interval: 500
            })
        .then(() => {
            cy.get(this.popUpModal).parent().invoke('hide');
        }));
    }

    clickSearchBar(){
        base_page.clickElement(this.searchBar)
    }

    searchDiscoverMore(){
        base_page.checkElementVisibility(this.discoverMore)
    }

    typeSearchEnter(searchTerm){
        base_page.typeElement(this.searchBar, searchTerm)
    }

    checkSearchButton(){
       base_page.checkElementVisibility(this.searchButton)
    }
    
    clickSearchButton(){
       base_page.clickElement(this.searchButton)
    }

}