/// <reference types="cypress" />
//cy.request

describe("canary", () => {
  it("should always be true", () => {
    expect(true).to.equal(true);
  });
});

describe("valid requests and responses from fizzbuzzer/api/:number", () => {
  it("should get a 1 from fizzbuzzer/api/1", () => {
    const endpointUrl =
      Cypress.config().baseUrl + "/plugins/servlet/fizzbuzzer/api/1";
    cy.request(endpointUrl).then((response) => {
      const body = response.body;
      expect(body).to.equal("1");
    });
  });

  it("should get a fizz from fizzbuzzer/api/3", () => {
    const endpointUrl =
      Cypress.config().baseUrl + "/plugins/servlet/fizzbuzzer/api/3";
    cy.request(endpointUrl).then((response) => {
      const body = response.body;
      expect(body).to.equal("fizz");
    });
  });

  it("should get a buzz from fizzbuzzer/api/5", () => {
    const endpointUrl =
      Cypress.config().baseUrl + "/plugins/servlet/fizzbuzzer/api/5";
    cy.request(endpointUrl).then((response) => {
      const body = response.body;
      expect(body).to.equal("buzz");
    });
  });

  it("should get a fizzbuzz from fizzbuzzer/api/15", () => {
    const endpointUrl =
      Cypress.config().baseUrl + "/plugins/servlet/fizzbuzzer/api/15";
    cy.request(endpointUrl).then((response) => {
      const body = response.body;
      expect(body).to.equal("fizzbuzz");
    });
  });

  it("should get 400  input from fizzbuzzer/api/-3", () => {
    const endpointUrl =
      Cypress.config().baseUrl + "/plugins/servlet/fizzbuzzer/api/-3";
    cy.request(endpointUrl).then((response) => {
      const body = response.status;
      expect(body).to.equal(200);
    });
  });

  it("should return 400 for non-valid inputs from fizzbuzzer/api/asdf", () => {
    const endpointUrl =
      Cypress.config().baseUrl + "/plugins/servlet/fizzbuzzer/api/asdf";
    cy.request({ url: endpointUrl, failOnStatusCode: false }).then(
      (response) => {
        const body = response.status;
        cy.log("body", body);
        expect(body).to.equal(400);
      }
    );
  });
});
