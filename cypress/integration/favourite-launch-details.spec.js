/// <reference types="Cypress" />

describe("Favourite launch in launch details", () => {
  it("can be added in details page", () => {
    cy.visit("http://localhost:3000/launches");

    expect(localStorage.getItem("launches")).to.be.null;

    cy.get(".launch-card").first().click();
    cy.get(".launch-details-header")
      .find("h2")
      .find("button")
      .click()
      .then(() => {
        expect(
          Object.keys(JSON.parse(localStorage.getItem("launches"))).length
        ).to.be.eq(1);
        return cy.get(".favourite-button").first().click();
      })
      .then(() => {
        expect(
          Object.keys(JSON.parse(localStorage.getItem("launches"))).length
        ).to.be.eq(0);
      });
  });
});
