/// <reference types="Cypress" />

describe("Favourite launch pad in launch pad details", () => {
  it("can be added in details page", () => {
    cy.visit("http://localhost:3000/launch-pads");

    expect(localStorage.getItem("launchPads")).to.be.null;

    cy.get(".launch-pad-card").first().click();
    cy.get(".launchpad-details-header")
      .find("h2")
      .find("button")
      .click()
      .then(() => {
        expect(
          Object.keys(JSON.parse(localStorage.getItem("launchPads"))).length
        ).to.be.eq(1);
        return cy.get(".favourite-button").first().click();
      })
      .then(() => {
        expect(
          Object.keys(JSON.parse(localStorage.getItem("launchPads"))).length
        ).to.be.eq(0);
      });
  });
});
