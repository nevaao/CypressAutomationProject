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
        ButtonCreateAccount().click();
    }
    
    // Clica no botão para realizar o login
    signIn() {
        ButtonSignIn().click();
    }

    // Acessa o menu Men
    accessMenu(menu) {
        switch (menu) {
            case "Men": {
                MenuMen().click();
            }
        }
    }
}

export default new HomePageObject();