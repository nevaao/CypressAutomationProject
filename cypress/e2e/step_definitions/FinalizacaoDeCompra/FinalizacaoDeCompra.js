import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePageObject from '../../pageobjects/HomePageObject';
import MenPageObject from '../../pageobjects/MenPageObject';
import ProductPageObject from '../../pageobjects/ProductPageObject';
import ShippingInfosPageObject from '../../pageobjects/ShippingInfosPageObject';
import PaymentInfosPageObject from '../../pageobjects/PaymentInfosPageObject';
import PurchaseConfirmationPageObject from '../../pageobjects/PurchaseConfirmationPageObject';

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

When('o usuário visualiza a mensagem de produto adicionado com sucesso {string}', (mensagem) => {
    cy.wait(1000);
    cy.get("div[data-ui-id='message-success'] div").should("contain.text", mensagem);
})

When('o usuário solicita para fazer o checkout do pedido', () => {
    cy.wait(1000);
    ProductPageObject.checkoutOrder();
})

When('o usuário preenche nos campos do endereço de entrega', (camposEnderecoEntrega) => {
    cy.get('#shipping > .step-title', { timeout: 60000 }).should("exist");
    ShippingInfosPageObject.fillInFields(camposEnderecoEntrega);
})

When('o usuário solicita para avançar para a próxima etapa', () => {
    cy.wait(1000);
    ShippingInfosPageObject.next();
})

When('o usuário solicita para finalizar a compra', () => {
    cy.get('.payment-group > .step-title', { timeout: 60000 }).should("exist");
    PaymentInfosPageObject.placeOrder();
})

Then('o usuário visualiza a mensagem de compra com sucesso {string}', mensagem => {
    cy.wait(1000);
    cy.get("span[data-ui-id='page-title-wrapper']").should("contain.text", mensagem)
})

Then('o usuário visualiza as opções', opcoes => {
    cy.wait(1000);
    PurchaseConfirmationPageObject.validateOptions(opcoes);
})