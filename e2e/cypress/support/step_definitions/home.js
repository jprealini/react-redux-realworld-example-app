import { Given, When, Then, Before, After } from "cypress-cucumber-preprocessor/steps";
import '../index'
import CreatePostPage from '../../integration/_pageObjects/createPost_PageObject';
import LoginHomePage from '../../integration/_pageObjects/login_PageObject';
import HomepagePage from '../../integration/_pageObjects/home_pageObjects';

const createPostPage = new CreatePostPage();
const loginHomePage = new LoginHomePage();
const homepage = new HomepagePage();

Given(/^I visit the home page$/, () => {
    cy.visit('/')
});

When(/^I sign in$/, () => {
    cy.get('a').contains('Sign in').click()
});

When(/^I type email "([^"]*)" with password "([^"]*)"$/, (email,password) => {
	loginHomePage.login(email, password)
	
});

When(/^I create a new post$/, () => {
    cy.wait(1000)
    cy.get('a[href="/editor"]').click()
});

/*When(/^I sign in with my user$/, () => {
    cy.get('a').contains('Sign in').click()
    cy.get('input[type=email]').type('jprealini@gmail.com')
    cy.get('input[type=password]').type('jppooh74')
    cy.get('button').contains('Sign in').click()
}); -- Step definition que no usamos*/

When(/^I create a post with title "([^"]*)" and description "([^"]*)" and content "([^"]*)"$/, (title, description, content) => {
    createPostPage.createPost(title, description, content);
});


Then(/^I should login with my user name "([^"]*)"$/, (username) => {
	homepage.home(username)
});

/*Then(/^I should login$/, () => {
    cy.get('a').should('contain', 'Your Feed')
});*/ // Reemplazado por el bloque anterior

Then(/^I should see the new post edit page$/, () => {
    cy.url().should('contain', 'editor')
});

Then(/^I should see the new post detail page with title "([^"]*)"$/, (title) => {
    cy.get('h1').should('contain', title)
});
