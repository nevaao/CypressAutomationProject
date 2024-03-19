const FirstName = () => cy.get("#firstname");
const LastName = () => cy.get("#lastname");
const SubscribeNewsletter = () => cy.get("#is_subscribed");
const Email = () => cy.get("#email_address");
const Password = () => cy.get("#password");
const ConfirmPassword = () => cy.get("#password-confirmation");
const ConfirmCreateAccount = () => cy.get("button[title = 'Create an Account']");

class CreateAccountPageObject {
    // Preenche os campos do cadastro
    fillInFields(camposCadastro) {
        camposCadastro.hashes().forEach(row => {
            const campo = row.Campo;
            const valor = row.Valor;

            switch (campo) {
                case "First Name": {
                    FirstName().type(valor).should('have.value', valor);
                    break;
                }
                case "Last Name": {
                    LastName().type(valor).should('have.value', valor);
                    break;
                }
                case "Sign Up for Newsletter": {
                    if (valor == "Marcado")
                        SubscribeNewsletter().click();
                    break;
                }
                case "Email": {
                    Email().type(valor).should('have.value', valor);
                    break;
                }
                case "Password": {
                    Password().type(valor).should('have.value', valor);
                    break;
                }
                case "Confirm Password": {
                    ConfirmPassword().type(valor).should('have.value', valor);
                    break;
                }
                default: {
                    throw new Error(`Não foi possível encontrar o campo ${campo}.`);
                }
            }
        });
    }

    // Clica no botão para confirmar o cadastro
    confirmCreateAccount() {
        ConfirmCreateAccount().click();
    }
}

export default new CreateAccountPageObject();