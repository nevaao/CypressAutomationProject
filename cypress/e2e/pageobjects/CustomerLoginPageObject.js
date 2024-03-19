const Email = () => cy.get("#email");
const Password = () => cy.get(".login-container #pass");
const SignIn = () => cy.get(".login-container #send2");

class CustomerLoginPageObject {
    // Preenche os campos do login
    fillInFields(camposLogin) {
        camposLogin.hashes().forEach(row =>{
            const campo = row.Campo;
            const valor = row.Valor;

            switch (campo) {
                case "Email": {
                    Email().type(valor).should('have.value', valor);
                    break;
                }
                case "Password": {
                    Password().type(valor).should('have.value', valor);
                    break;
                }
                default: {
                    throw new Error(`Não foi possível encontrar o campo ${campo}.`);
                }
            }
        })
    }

    // Clica no botão para confirmar o login
    signIn() {
        SignIn().click();
    }
}

export default new CustomerLoginPageObject();