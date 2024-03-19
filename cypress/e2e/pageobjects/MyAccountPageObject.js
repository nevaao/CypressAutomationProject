class MyAccountPageObject {
    // Valida se a conta foi criada com sucesso
    validateSuccessMessage(mensagem) {
        cy.get(".message-success > div", { timeout: 3000 }).should("contain.text", mensagem);
    }
}

export default new MyAccountPageObject();
