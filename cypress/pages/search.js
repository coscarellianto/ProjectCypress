import { BasePage } from "../pages/base";


export class SearchPage extends BasePage {
    //Locators
    static paginationComponent = '.comet-pagination';
    static paginationButton = '.comet-pagination-item-2 > a';
    static CardList = '#card-list > :nth-child(2)';
    static nextPaginationButton = '.comet-pagination-next > .comet-pagination-item-link'
    static pageLocatorInput = '.comet-pagination-options-quick-jumper > input'
    static confirmationButton = '.comet-pagination-options-quick-jumper-button'
    static shoppingCard = ':nth-child(2) > .multi--outWrapper--SeJ8lrF > .multi--container--1UZxxHY > .multi--image--2bIiWPB > .multi--shopCart--darm7xs'


    checkComponentPagination() {
        this.checkElementExistence(SearchPage.paginationComponent)
    }

    checkPaginationExists() {
        this.checkElementExistence(SearchPage.paginationButton)
    }

    clickNumberPaginationButton() {
        this.clickElement(SearchPage.paginationButton)
    }

    checkNextButton() {
        this.checkElementExistence(SearchPage.nextPaginationButton)
    }

    clickNextButton() {
        this.clickElement(SearchPage.nextPaginationButton)
    }

    typePaginationNumber(number) {
        this.typeElement(SearchPage.pageLocatorInput, number)
    }

    checkConfirmationButton() {
        this.checkElementExistence(SearchPage.confirmationButton)
    }

    clickConfirmationButton() {
        this.clickElement(SearchPage.confirmationButton)
    }

    checkArticle() {
        this.checkElementVisibility(SearchPage.CardList)
    }

    clickShoppingCard() {
        this.clickElement(SearchPage.shoppingCard)
    }
}