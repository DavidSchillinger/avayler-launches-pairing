const cardSelector = '[data-test="launch-card"]';
const payloadsSelector = '[data-test="payloads"]';

describe('Launches', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the launch', () => {
    cy.get(cardSelector).should('be.visible');
  });

  it('displays the launch name', () => {
    cy.get(cardSelector).find('h4').should('have.text', 'Launch 0');
  });

  it('displays the launch date', () => {
    cy.get(cardSelector).should('contain.text', '2000-10-20T20:30:00.000Z');
  });

  it('displays the first launch core serial', () => {
    cy.get(cardSelector).should('contain.text', 'Launch Core Serial');
  });

  it('displays launch payloads', () => {
    cy.get(cardSelector).find(payloadsSelector).should('contain.text', 'Launch Payload Type');
    cy.get(cardSelector).find(payloadsSelector).should('contain.text', 'Launch Payload ID');
  });

  it('displays the launch image link', () => {
    cy.get(cardSelector).find('a').should('have.text', 'path/to/image.png');
  });
});

export {};
