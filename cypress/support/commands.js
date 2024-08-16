import Login from '../fixtures/pages/home/index';

Cypress.Commands.add('login', () => {
    Login.goto();
});