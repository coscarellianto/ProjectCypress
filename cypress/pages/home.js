import { BasePage } from "../pages/base";

import 'cypress-wait-until';

export class HomePage extends BasePage {
    //Locators
    static url = 'https://www.aliexpress.com/';
    static cookiesManagement = ':nth-child(1) > #gdpr-new-container';
    static cookiesAcceptButton = '.btn-accept';
    static personalizeCookiesButtonLocator = '.btn-more';
    static closeWindowPersonalize = '.ui-window-close';
    static cookiesSaveButtonLocator = '.btn-save';
    static popUpModal = '.image-poplayer-modal';
    static searchBar = '#search-words';
    static discoverMore = '[data-spm="discover_more"] > .src--title--1Scd3D2'
    static searchButton = '.search--submit--2VTbd-T';
    static nextPageButton = '.comet-pagination-next > .comet-pagination-item-link'


    navigate() {
        cy.visit(HomePage.url)
    }

    checkCookiesManagement() {
        this.checkElementVisibility(HomePage.cookiesManagement);
    }

    personalizeCookiesButton() {
        this.clickElement(HomePage.personalizeCookiesButtonLocator)
    }

    clickSaveCookiesButton() {
        this.clickElement(HomePage.cookiesSaveButtonLocator)
    }

    closeWindowCookiesPersonalize() {
        this.clickElement(HomePage.closeWindowPersonalize)
    }

    acceptManagementCookies() {
        this.clickElement(HomePage.cookiesAcceptButton)
    }

    checkPopUpVisibility() {
        return this.checkElementVisibility(HomePage.popUpModal, {
            timeout: 10000,
            interval: 500
        });
    }

    closePopUpModal() {
        cy.get(HomePage.popUpModal).parent().invoke('hide');
    }

    clickSearchBar() {
        this.clickElement(HomePage.searchBar)
    }

    searchDiscoverMore() {
        this.checkElementVisibility(HomePage.discoverMore)
    }

    typeSearchEnter(searchTerm) {
        this.typeElement(HomePage.searchBar, searchTerm)
    }

    checkSearchButton() {
        this.checkElementVisibility(HomePage.searchButton)
    }

    clickSearchButton() {
        this.clickElement(HomePage.searchButton)
    }

}