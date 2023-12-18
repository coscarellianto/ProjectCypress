import {BasePage} from "../pages/base";


export class SearchPage extends BasePage{
    //Locators
    constructor(){
        super();
        this.paginationComponent = '.comet-pagination';
        this.paginationButton = '.comet-pagination-item-2 > a';
        this.CardList = '#card-list > :nth-child(2)';
        this.nextPaginationButton = '.comet-pagination-next > .comet-pagination-item-link'
        this.pageLocatorInput = '.comet-pagination-options-quick-jumper > input'
        this.confirmationButton = '.comet-pagination-options-quick-jumper-button'
        this.shoppingCard = ':nth-child(2) > .multi--outWrapper--SeJ8lrF > .multi--container--1UZxxHY > .multi--image--2bIiWPB > .multi--shopCart--darm7xs'
    }

    checkComponentPagination(){
        this.checkElementExistence(this.paginationComponent)
    }

    checkPaginationExists(){
        this.checkElementExistence(this.paginationButton)
    }
    
    clickNumberPaginationButton(){
        this.clickElement(this.paginationButton)
    }

    checkNextButton(){
        this.checkElementExistence(this.nextPaginationButton)
    }

    clickNextButton(){
        this.clickElement(this.nextPaginationButton)
    }

    typePaginationNumber(number){
        this.typeElement(this.pageLocatorInput, number)
    }

    checkConfirmationButton(){
        this.checkElementExistence(this.confirmationButton)
    }

    clickConfirmationButton(){
        this.clickElement(this.confirmationButton)
    }

    checkArticle(){
        this.checkElementVisibility(this.CardList)
    }

    clickShoppingCard(){
        this.clickElement(this.shoppingCard)
    }
}