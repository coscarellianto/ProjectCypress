import {basePage} from "../pages/base";
const base_page = new basePage();

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
        base_page.checkElementExistence(this.paginationComponent)
    }

    checkPaginationExists(){
        base_page.checkElementExistence(this.paginationButton)
    }
    
    clickNumberPaginationButton(){
        base_page.clickElement(this.paginationButton)
    }

    checkNextButton(){
        base_page.checkElementExistence(this.nextPaginationButton)
    }

    clickNextButton(){
        base_page.clickElement(this.nextPaginationButton)
    }

    typePaginationNumber(number){
        base_page.typeElement(this.pageLocatorInput, number)
    }

    checkConfirmationButton(){
        base_page.checkElementExistence(this.confirmationButton)
    }

    clickConfirmationButton(){
        base_page.clickElement(this.confirmationButton)
    }

    checkArticle(){
        base_page.checkElementVisibility(this.CardList)
    }

    clickShoppingCard(){
        base_page.clickElement(this.shoppingCard)
    }
}