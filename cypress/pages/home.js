import {BasePage} from "../pages/base";

import 'cypress-wait-until';

export class HomePage extends BasePage{
    //Locators
    constructor(){
        super();
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
        this.checkElementVisibility(this.cookiesManagement);
    }

    personalizeCookiesButton(){
        this.clickElement(this.personalizeCookiesButtonLocator)
    }

    clickSaveCookiesButton(){
        this.clickElement(this.cookiesSaveButtonLocator)
    }

    closeWindowCookiesPersonalize(){
        this.clickElement(this.closeWindowPersonalize)
    }

    acceptManagementCookies(){
        this.clickElement(this.cookiesAcceptButton)
    }

    closePopUpModal() {
        cy.waitUntil(() => 
            this.checkElementVisibility(this.popUpModal, {
                timeout: 10000, 
                interval: 500
            })
        .then(() => {
            cy.get(this.popUpModal).parent().invoke('hide');
        }));
    }

    clickSearchBar(){
        this.clickElement(this.searchBar)
    }

    searchDiscoverMore(){
        this.checkElementVisibility(this.discoverMore)
    }

    typeSearchEnter(searchTerm){
        this.typeElement(this.searchBar, searchTerm)
    }

    checkSearchButton(){
       this.checkElementVisibility(this.searchButton)
    }

    clickSearchButton(){
       this.clickElement(this.searchButton)
    }

}