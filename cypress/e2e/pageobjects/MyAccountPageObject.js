class MyAccountPageObject {
    validateSuccessMessage(mensagem) {
        cy.get(".message-success > div").should("contain.text", mensagem);
    }
}

export default new MyAccountPageObject();