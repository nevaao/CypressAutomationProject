const ButtonContinueShopping = () => cy.get("a[class*='continue']");
const ButtonCreateAnAccount = () => cy.get("#registration a[href*='account/delegateCreate']");

class PurchaseConfirmationPageObject {
    // Valida as opções disponíveis após finalizar a compra
    validateOptions(opcoes) {
        opcoes.hashes().forEach(row => {
            const opcao = row.Opcao;

            switch (opcao) {
                case "Continue Shopping": {
                    ButtonContinueShopping().should("exist");
                    break;
                }
                case "CCreate An Account": {
                    ButtonCreateAnAccount().should("exist");
                    break;
                }
            } 
        })
    }
}

export default new PurchaseConfirmationPageObject();
