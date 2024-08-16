import login from '../fixtures/pages/home/index';

Cypress.Commands.add('login', () => {
    login.goto();
});