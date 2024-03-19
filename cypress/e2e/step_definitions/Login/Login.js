import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePageObject from '../../pageobjects/HomePageObject';
import CustomerLoginPageObject from '../../pageobjects/CustomerLoginPageObject';

Given('que o usuário acessa o sistema', () => {
    HomePageObject.visit();
})

Given('que o usuário solicita para fazer o login', () => {
    cy.wait(1000);
    HomePageObject.signIn();
})

When('o usuário preenche nos campos da tela de login', (camposLogin) => {
    cy.wait(1000);
    CustomerLoginPageObject.fillInFields(camposLogin);
})

When('o usuário confirma o login', () => {
    cy.wait(1000);
    CustomerLoginPageObject.signIn();
})

Then('o usuário é redirecionado para a tela inicial', () => {
    cy.wait(1000);
    cy.get('#ui-id-3 > span').should("exist");
})

Then('o usuário visualiza no cabeçalho da página {string}', mensagemBoasVindas => {
    cy.wait(1000);
    cy.get(".panel span[class = 'logged-in']").should("contain.text", mensagemBoasVindas);
})