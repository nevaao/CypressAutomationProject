const ButtonCreateAccount = () => cy.get(".panel a[href*='account/create']");
const ButtonSignIn = () => cy.get(".panel a[href*='account/login']");
const MenuMen = () => cy.get("a[role='menuitem'][href*='/men.html']");

class HomePageObject {
    // Acessa a home page
    visit() {
        cy.visit("/");
    }

    // Clica no botão para criar uma nova conta
    createAccount() {
        cy.wait(1000);
        ButtonCreateAccount().click();
    }
    
    // Clica no botão para realizar o login
    signIn() {
        cy.wait(1000);
        ButtonSignIn().click();
    }

    // Acessa o menu Men
    accessMenu(menu) {
        cy.wait(1000);
        switch (menu) {
            case "Men": {
                MenuMen().click();
            }
        }
    }

    // Valida se o usuário está na Home Page
    validateHomePage() {
        cy.get("main.page-main", { timeout: 30000 }).should("exist");
    }

    // Valida a mensagem de boas-vindas
    validateWelcome(mensagemBoasVindas) {
        cy.get(".panel span[class = 'logged-in']", { timeout: 30000 }).should("contain.text", mensagemBoasVindas);
    }
}

export default new HomePageObject();
