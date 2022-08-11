/// <reference types="cypress" />
// import adminUser from '../../../cypress/fixtures/users/adminUser.json';

describe("canary", () => {
  it("should pass", () => {
    expect(true).to.be.true;
  });
});

describe("login to jira", () => {
  it("should login to jira", () => {
    cy.visit(Cypress.config().baseUrl);
  });
});
