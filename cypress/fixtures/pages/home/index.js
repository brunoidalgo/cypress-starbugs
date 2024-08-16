import home from '../../home.json';

class Login {
    goto() {
        cy.visit(home.loginpage);
        cy.contains('span', 'Nós levamos até você!');
    }
}


export default new Login();