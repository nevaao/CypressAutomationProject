import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePageObject from '../../pageobjects/HomePageObject';
import CadastroPageObject from '../../pageobjects/CreateAccountPageObject';
import MyAccountPageObject from '../../pageobjects/MyAccountPageObject';

Given('que o usuário acessa o sistema', () => {
    HomePageObject.visit();
})

Given('que o usuário solicita para cadastrar uma nova conta', () => {
    HomePageObject.createAccount();
})

When('o usuário preenche nos campos da tela de cadastro', (camposCadastro) => {
    CadastroPageObject.fillInFields(camposCadastro);
})

When('o usuário confirma o cadastro da conta', () => {
    CadastroPageObject.confirmCreateAccount();
})

Then('o usuário visualiza a mensagem de conta cadastrada com sucesso {string}', mensagem => {
    MyAccountPageObject.validateSuccessMessage(mensagem);
})
