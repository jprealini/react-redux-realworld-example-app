/// <reference types="cypress" />
import ArticleApi from '../../integration/_apis/articlesApi';
import UserAPi from '../../integration/_apis/userApi'
import Helper from '../../support/helper'
import '../index'

const helper = new Helper();
const userApi = new UserAPi();
const articleApi = new ArticleApi();
const apiBaseUrl = Cypress.env('apiBaseUrl')

before(() => {

    const spec = Cypress.mocha.getRunner().suite.ctx.currentTest.parent.title; 
    
});

after(() => {

    const spec = Cypress.mocha.getRunner().suite.ctx.currentTest.parent.title;
    
})