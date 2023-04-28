import { mockLaunches } from '../../mocks/launch';

const cardSelector = '[data-test="launch-card"]';
describe('Launches', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://api.spacexdata.com/v5/launches/query', {
      statusCode: 200,
      body: { docs: mockLaunches({ count: 10 }) },
    });

    cy.visit('/');
  });

  it('displays 10 launches', () => {
    cy.get(cardSelector).should('have.length', 10);
  });

  it('displays the launch name', () => {
    cy.get(cardSelector).find('h4').first().should('have.text', 'Launch 0');
    cy.get(cardSelector).find('h4').last().should('have.text', 'Launch 9');
  });

  it('displays the launch date', () => {
    cy.get(cardSelector).should('contain.text', '2000-10-20T20:30:00.000Z');
  });

  it('displays the first launch core serial', () => {
    cy.get(cardSelector).should('contain.text', 'Launch Core Serial');
  });
});
