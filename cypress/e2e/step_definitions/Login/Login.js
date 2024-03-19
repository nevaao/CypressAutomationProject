import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePageObject from '../../pageobjects/HomePageObject';
import CustomerLoginPageObject from '../../pageobjects/CustomerLoginPageObject';

Given('que o usuário acessa o sistema', () => {
    HomePageObject.visit();
})

Given('que o usuário solicita para fazer o login', () => {
    HomePageObject.signIn();
})

When('o usuário preenche nos campos da tela de login', (camposLogin) => {
    CustomerLoginPageObject.fillInFields(camposLogin);
})

When('o usuário confirma o login', () => {
    CustomerLoginPageObject.signIn();
})

Then('o usuário é redirecionado para a tela inicial', () => {
    HomePageObject.validateHomePage();
})

Then('o usuário visualiza no cabeçalho da página {string}', mensagemBoasVindas => {
    HomePageObject.validateWelcome(mensagemBoasVindas);
})
