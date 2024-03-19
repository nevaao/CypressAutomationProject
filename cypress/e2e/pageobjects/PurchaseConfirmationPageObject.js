const ButtonContinueShopping = () => cy.get("a[class*='continue']");
const ButtonCreateAnAccount = () => cy.get("#registration a[href*='account/delegateCreate']");

class PurchaseConfirmationPageObject {
    // Validar mensagem de compra efetuada com sucesso
    validateSuccessMessage(mensagem) {
        cy.get("span[data-ui-id='page-title-wrapper']", { timeout: 30000 }).should("contain.text", mensagem);
    }

    // Valida as opções disponíveis após finalizar a compra
    validateOptions(opcoes) {
        cy.wait(1000);
        opcoes.hashes().forEach(row => {
            const opcao = row.Opcao;

            switch (opcao) {
                case "Continue Shopping": {
                    ButtonContinueShopping().should("exist");
                    break;
                }
                case "Create An Account": {
                    ButtonCreateAnAccount().should("exist");
                    break;
                }
            }
        })
    }
}

export default new PurchaseConfirmationPageObject();
