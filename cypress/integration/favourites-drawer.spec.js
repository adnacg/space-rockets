/// <reference types="Cypress" />

describe("Favourite drawer", () => {
  it("lets user remove favourite launches", () => {
    cy.visit("http://localhost:3000/launches");

    expect(localStorage.getItem("launches")).to.be.null;

    cy.get(".not-favourite-button")
      .each(($el, index, $list) => {
        if (index === 0) cy.wrap($el).click();
      })
      .then(() => cy.get("nav").find("button").click())
      .then(() => cy.get(".favourite-launch-card").find("button").click())
      .then(() =>
        expect(
          Object.keys(JSON.parse(localStorage.getItem("launches"))).length
        ).to.be.eq(0)
      );
  });

  it("lets user remove favourite launch pads", () => {
    cy.visit("http://localhost:3000/launch-pads");

    expect(localStorage.getItem("launchPads")).to.be.null;

    cy.get(".not-favourite-button")
      .each(($el, index, $list) => {
        if (index === 0) cy.wrap($el).click();
      })
      .then(() => cy.get("nav").find("button").click())
      .then(() => cy.get(".favourite-launchpad-card").find("button").click())
      .then(() =>
        expect(
          Object.keys(JSON.parse(localStorage.getItem("launchPads"))).length
        ).to.be.eq(0)
      );
  });
});
