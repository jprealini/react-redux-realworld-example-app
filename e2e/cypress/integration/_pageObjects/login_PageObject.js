class loginPageObject{

    login(email, password){
        cy.get('input[type=email]').type(email)
        cy.get('input[type=password]').type(password)
        cy.get('button').contains('Sign in').click()
    }

}

export default loginPageObject;