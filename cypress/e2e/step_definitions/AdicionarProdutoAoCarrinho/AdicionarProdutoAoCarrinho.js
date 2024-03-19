import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePageObject from '../../pageobjects/HomePageObject';
import MenPageObject from '../../pageobjects/MenPageObject';
import ProductPageObject from '../../pageobjects/ProductPageObject';

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

Then('o usuário visualiza a mensagem de produto adicionado com sucesso {string}', (mensagem) => {
    ProductPageObject.validateSuccessMessage(mensagem);
})

Then('o usuário visualiza o carrinho com {string} produto', (quantidadeProdutos) => {
    ProductPageObject.validateCart(quantidadeProdutos);
})
