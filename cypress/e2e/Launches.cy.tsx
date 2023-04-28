import { mockLaunches } from '../../mocks/launch';

describe('Launches', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://api.spacexdata.com/v5/launches/query', {
      statusCode: 200,
      body: { docs: mockLaunches({ count: 10 }) },
    });

    cy.visit('/');
  });

  it('displays 10 launches', () => {
    cy.get('[data-test="launch-card"]').should('have.length', 10);
  });
});
