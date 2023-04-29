import { mockLaunch, mockLaunches } from '../../mocks/launch';
import { Launch } from '../../types/Launch';

const cardSelector = '[data-test="launch-card"]';
const payloadsSelector = '[data-test="payloads"]';

const interceptFetchLaunches = (docs: Launch[]) => {
  cy.intercept('POST', 'https://api.spacexdata.com/v5/launches/query', {
    statusCode: 200,
    body: { docs },
  }).as('fetchLaunches');
};

describe('Launches', () => {
  beforeEach(() => {
    interceptFetchLaunches([mockLaunch()]);
    cy.visit('/');
  });

  it('displays the launch', () => {
    cy.get(cardSelector).should('be.visible');
  });

  it('displays the launch name', () => {
    cy.get(cardSelector).find('h4').should('have.text', 'Launch Name');
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

  it('displays when a launch succeeded', () => {
    interceptFetchLaunches([mockLaunch({ success: true })]);
    cy.get(cardSelector).should('contain.text', 'Succeeded');
    cy.get(cardSelector).should('not.contain.text', 'Failed');
  });

  it('displays when a launch failed', () => {
    interceptFetchLaunches([mockLaunch({ success: false })]);
    cy.get(cardSelector).should('contain.text', 'Failed');
    cy.get(cardSelector).should('not.contain.text', 'Succeeded');
  });

  it('displays as many launches as are returned from the API', () => {
    interceptFetchLaunches(mockLaunches({ count: 10 }));
    cy.get(cardSelector).should('have.length', 10);
  });
});

export {};
