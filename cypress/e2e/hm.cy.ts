import { expect } from "chai";

describe("Page Access", () => {
  it("Visite page", () => {
    cy.visit("/hangman-game/actions");
    cy.get("body");
  });
});
