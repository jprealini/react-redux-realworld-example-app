import { supportsGoWithoutReloadUsingHash } from "history/DOMUtils"

class homePageObject{

    home(username){
        cy.get('a[href="/"]').should('contain',"Home")
        cy.get('a[href="/editor"]')
        cy.get('a[href="/settings"]')
        cy.get('a').should('contain','Your Feed')
        cy.get('a').should('contain','Global Feed')
        cy.get('p').should('contain','Popular Tags')
        cy.get('a').should('contain',username)
    }

}

export default homePageObject;