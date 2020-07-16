import { Given, When, Then, Before, After } from "cypress-cucumber-preprocessor/steps";
import '../index'
import CreatePostPage from '../../integration/_pageObjects/createPost_PageObject';

const createPostPage = new CreatePostPage();

Given(/^I visit the home page$/, () => {
    cy.visit('/')
});

When(/^I sign in$/, () => {
    cy.get('a').contains('Sign in').click()
});

When(/^I type user and password$/, () => {
    cy.get('input[type=email]').type('jprealini@gmail.com')
    cy.get('input[type=password]').type('123456')
    cy.get('button').contains('Sign in').click()
    cy.wait(1000)
});

When(/^I create a new post$/, () => {
    cy.wait(1000)
    cy.get('a[href="/editor"]').click()
});

When(/^I create a post with title "([^"]*)" and description "([^"]*)" and content "([^"]*)"$/, (title, description, content) => {
    createPostPage.createPost(title, description, content);
});

Then(/^I should login$/, () => {
    cy.get('a').should('contain', 'Your Feed')
});

Then(/^I should see the new post edit page$/, () => {
    cy.url().should('contain', 'editor')
});

Then(/^I should see the new post detail page with title "([^"]*)"$/, (title) => {
    cy.get('h1').should('contain', title)
});

When(/^I like a post$/, () => {
    cy.get('a').contains('Global Feed').click()    
    cy.get('button').should('have.class','btn')
    .and('have.class','btn-sm').eq(1).as('boton')
    cy.get('@boton').click()
});

Then(/^the like count should be increased by one$/, () => {	
    cy.get('@boton').should('contain','1')
    cy.get('@boton').should('have.class','btn-primary')
});
