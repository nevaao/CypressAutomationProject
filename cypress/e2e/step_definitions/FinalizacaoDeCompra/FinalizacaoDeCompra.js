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
    HomePageObject.accessMenu(menu);
})

Given('que o usuário acessa a categoria {string}', categoria => {
    MenPageObject.accessCategory(categoria);
})

When('o usuário seleciona o produto {string}', produto => {
    MenPageObject.selectProduct(produto);
})

When('o usuário seleciona as opções do produto', opcoesProduto => {
    ProductPageObject.selectProductOptions(opcoesProduto);
})

When('o usuário adiciona o produto ao carrinho', () => {
    ProductPageObject.addToCart();
})

When('o usuário visualiza a mensagem de produto adicionado com sucesso {string}', (mensagem) => {
    ProductPageObject.validateSuccessMessage(mensagem);
})

When('o usuário solicita para fazer o checkout do pedido', () => {
    ProductPageObject.checkoutOrder();
})

When('o usuário preenche nos campos do endereço de entrega', (camposEnderecoEntrega) => {
    ShippingInfosPageObject.fillInFields(camposEnderecoEntrega);
})

When('o usuário solicita para avançar para a próxima etapa', () => {
    ShippingInfosPageObject.next();
})

When('o usuário solicita para finalizar a compra', () => {
    PaymentInfosPageObject.placeOrder();
})

Then('o usuário visualiza a mensagem de compra com sucesso {string}', mensagem => {
    PurchaseConfirmationPageObject.validateSuccessMessage(mensagem);
})

Then('o usuário visualiza as opções', opcoes => {
    PurchaseConfirmationPageObject.validateOptions(opcoes);
})
