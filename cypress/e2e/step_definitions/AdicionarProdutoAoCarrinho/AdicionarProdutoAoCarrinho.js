import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePageObject from '../../pageobjects/HomePageObject';
import MenPageObject from '../../pageobjects/MenPageObject';
import ProductPageObject from '../../pageobjects/ProductPageObject';

Given('que o usuário acessa o sistema', () => {
    HomePageObject.visit();
})

Given('que o usuário acessa a menu {string}', menu => {
    cy.wait(1000);
    HomePageObject.accessMenu(menu);
})

Given('que o usuário acessa a categoria {string}', categoria => {
    cy.wait(1000);
    MenPageObject.accessCategory(categoria);
})

When('o usuário seleciona o produto {string}', produto => {
    cy.wait(1000);
    MenPageObject.selectProduct(produto);
})

When('o usuário seleciona as opções do produto', opcoesProduto => {
    cy.wait(1000);
    ProductPageObject.selectProductOptions(opcoesProduto);
})

When('o usuário adiciona o produto ao carrinho', () => {
    cy.wait(1000);
    ProductPageObject.addToCart();
})

Then('o usuário visualiza a mensagem de produto adicionado com sucesso {string}', (mensagem) => {
    cy.wait(1000);
    cy.get("div[data-ui-id='message-success'] div").should("contain.text", mensagem);
})

Then('o usuário visualiza o carrinho com {string} produto', (quantidadeProdutos) => {
    cy.wait(1000);
    ProductPageObject.validateCart(quantidadeProdutos);
})