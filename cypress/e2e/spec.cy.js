import pages from '../fixtures/pages.json';


describe('Testes no StarBugs', () => {
  it('CT 00: Deve apresentar a tela inicial do sistema', () => {
      cy.visit(pages.loginpage);
      cy.contains('span', 'Nós levamos até você!');
  });
});