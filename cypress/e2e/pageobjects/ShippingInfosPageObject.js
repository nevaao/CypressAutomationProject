const EmailAddress = () => cy.get("#checkout-step-shipping input[name='username']");
const FirstName = () => cy.get("#checkout-step-shipping input[name='firstname']");
const LastName = () => cy.get("#checkout-step-shipping input[name='lastname']");
const StreetAddress1 = () => cy.get("#checkout-step-shipping input[name='street[0]']");
const Country = () => cy.get("#checkout-step-shipping select[name='country_id']");
const StateProvince = () => cy.get("#checkout-step-shipping select[name='region_id']");
const City = () => cy.get("#checkout-step-shipping input[name='city']");
const ZipPostalCode = () => cy.get("#checkout-step-shipping input[name='postcode']");
const PhoneNumber = () => cy.get("#checkout-step-shipping input[name='telephone']");
const Next = () => cy.get("button[data-role*='continue']");

class ShippingInfosPageObject {
    // Preenche os campos do endereço de entrega
    fillInFields(camposEnderecoEntrega) {
        cy.get('#shipping > .step-title', { timeout: 30000 }).should("exist");
        
        camposEnderecoEntrega.hashes().forEach(row => {
            const campo = row.Campo;
            const valor = row.Valor;

            switch (campo) {
                case "Email Address": {
                    EmailAddress().type(valor).should('have.value', valor);
                    break;
                }
                case "First Name": {
                    FirstName().type(valor).should('have.value', valor);
                    break;
                }
                case "Last Name": {
                    LastName().type(valor).should('have.value', valor);
                    break;
                }
                case "Street Address 1": {
                    StreetAddress1().type(valor).should('have.value', valor);
                    break;
                }
                case "Country": {
                    Country().select(valor);
                    break;
                }
                case "State/Province": {
                    StateProvince().select(valor);
                    break;
                }
                case "City": {
                    City().type(valor).should('have.value', valor);
                    break;
                }
                case "Zip/Postal Code": {
                    ZipPostalCode().type(valor).should('have.value', valor);
                    break;
                }
                case "Phone Number": {
                    PhoneNumber().type(valor).should('have.value', valor);
                    break;
                }
                case "Shipping Method": {
                    const opcao = valor.split(" - ")[2].replaceAll(" ", "").toLowerCase();
                    cy.get(`input[type='radio'][value*='${opcao}']`).click();
                    break;
                }
                default: {
                    throw new Error(`Não foi possível encontrar o campo ${campo}.`);
                }
            }
        });
    }

    // Avança para a etapa de pagamento
    next() {
        cy.wait(1000);
        Next().click();
    }
}

export default new ShippingInfosPageObject();
