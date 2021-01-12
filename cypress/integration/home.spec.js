/// <reference types="Cypress" />

describe("Homepage", () => {
  it("visits the home page", () => {
    cy.visit("http://localhost:3000");
    cy.get("nav").find("p", "¡SPACE·R0CKETS!");
    cy.get("nav").find("button");
    cy.get("a").contains("Launches");
    cy.get("a").contains("Launch Pads");
  });

  it("navigates to launches page when clicking 'browse launches'", () => {
    cy.visit("http://localhost:3000");
    cy.get("a").contains("Launches").click();
    cy.url().should("include", "/launches");
  });

  it("navigates to launch pads page when clicking 'browse launch pads'", () => {
    cy.visit("http://localhost:3000");
    cy.get("a").contains("Launch Pads").click();
    cy.url().should("include", "/launch-pads");
  });
});
