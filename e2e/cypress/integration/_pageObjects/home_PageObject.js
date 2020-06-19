class homePageObject {
    homeVisit() {
        cy.visit('/')
    }

    signInToPage() {
        cy.get('a').contains('Sign in').click()
    }

    enterCredentials(user, password) {
        cy.get('input[type=email]').type(user)
        cy.get('input[type=password]').type(password)
        cy.get('button').contains('Sign in').click()
    }

    createNewPost() {
        cy.wait(1000)
        cy.get('a[href="/editor"]').click()
    }

}
export default homePageObject;