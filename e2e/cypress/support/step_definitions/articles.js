/// <reference types="cypress" />
import { Given, When, Then, Before, After } from "cypress-cucumber-preprocessor/steps";
import '../index'
import UserAPi from '../../integration/_apis/userApi'

const userApi = new UserAPi();

When(/^I select the tag "([^"]*)"$/, (tag) => {
	cy.get('a').contains(tag).click()
});

Then(/^I should see only articles tagged with "([^"]*)"$/, (tag) => {
	cy.get('div.article-preview').each((div) => {
        cy.get(div).find('li').should('contain',tag)
    })
});

Then(/^I should have the corresponding menu items for role "([^"]*)"$/, (role) => {
    var menu = new Array();
    cy.get('.container > .nav >').find('a').each((anchor) => {
        cy.get(anchor).invoke('text').then((text) => {
            menu.push(text)
        })
    }).then(()=>{
        cy.fixture('roleMenu').then((menues) => {
            expect(menu.sort().toLowerCase()).to.deep.equal(menues[role].sort().toLowerCase())
        })
    })
});
