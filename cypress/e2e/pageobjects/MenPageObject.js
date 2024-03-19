class MenPageObject {
    // Acessa a categoria de produto desejada
    accessCategory(categoria) {
        cy.wait(1000);
        cy.get(`div.categories-menu a[href*='tops-men/${categoria.toLowerCase()}']`).click();
    }

    // Seleciona o produto
    selectProduct(produto) {
        cy.wait(1000);
        cy.get(`a.product-item-link[href*='${produto.replaceAll(' ', '-').toLowerCase()}']`).click();
    }
}

export default new MenPageObject();
