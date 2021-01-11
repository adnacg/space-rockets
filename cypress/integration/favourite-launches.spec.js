/// <reference types="Cypress" />

describe("Favourite launch", () => {
  it("can be added from individual card", () => {
    cy.visit("http://localhost:3000/launches");

    expect(localStorage.getItem("launches")).to.be.null;

    cy.get(".not-favourite-button")
      .each(($el, index, $list) => {
        if (index === 0) cy.wrap($el).click();
      })
      .then(() => {
        expect(
          Object.keys(JSON.parse(localStorage.getItem("launches"))).length
        ).to.be.eq(1);
      })
      .then(() => {
        cy.get(".favourite-button").each(($el, index, $list) => {
          if (index === 0) cy.wrap($el).click();
        });
      })
      .then(() => {
        expect(
          Object.keys(JSON.parse(localStorage.getItem("launches"))).length
        ).to.be.eq(0);
      });
  });
});
