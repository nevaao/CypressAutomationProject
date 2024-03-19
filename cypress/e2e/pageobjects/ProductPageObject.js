const ButtonAddToCart = () => cy.get("#product-addtocart-button");
const Cart = () => cy.get("a[class = 'action showcart']");
const ItemsInCart = () => cy.get("span.count");
const ButtonCheckout = () => cy.get('#top-cart-btn-checkout');

class ProductPageObject {
    // Seleciona as opções do produto
    selectProductOptions(opcoesProduto) {
        opcoesProduto.hashes().forEach(row => {
            cy.wait(1000);
            cy.get(`div[data-option-label='${row.Tamanho}']`).click();
            
            cy.wait(1000);
            cy.get(`div[data-option-label='${row.Cor}']`).click();
        });
    }

    // Adiciona o produto ao carrinho
    addToCart() {
        ButtonAddToCart().click();
    }

    // Valida a quantidade de produtos no carrinho
    validateCart(quantidadeProdutos) {
        Cart().click();

        cy.wait(1000);
        ItemsInCart().should("contain.text", quantidadeProdutos);
    }

    // Avança para o checkout do pedido
    checkoutOrder() {
        Cart().click();

        cy.wait(1000);
        ButtonCheckout().click();
    }
}

export default new ProductPageObject();