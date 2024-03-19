class MyAccountPageObject {
    // Valida se a conta foi criada com sucesso
    validateSuccessMessage(mensagem) {
        cy.get(".message-success > div").should("contain.text", mensagem);
    }
}

export default new MyAccountPageObject();
