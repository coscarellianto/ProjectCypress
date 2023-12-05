export class searchPage {
    //Locators
    constructor(){
        this.clickSearchBar = '#search-words';
        this.typeSearchEnter = '#search-words';
    }

    clickSearchBar(){
        cy.get(this.clickSearchBar).click()
    }

    typeSearchEnter(element){
        cy.get(this.typeSearchEnter).type(element)
    }




}