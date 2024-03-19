const PlaceOrder = () => cy.get("button[title='Place Order']");

class PaymentInfosPageObject {
    // Finaliza a compra
    placeOrder() {
        PlaceOrder().click();
    }
}

export default new PaymentInfosPageObject();