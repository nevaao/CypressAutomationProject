const PlaceOrder = () => cy.get("button[title='Place Order']");

class PaymentInfosPageObject {
    // Finaliza a compra
    placeOrder() {
        cy.get('.payment-group > .step-title', { timeout: 30000 }).should("exist");
        PlaceOrder().click();
    }
}

export default new PaymentInfosPageObject();
