import { expect } from "chai";

describe("Page Access", () => {
  it("Visite page", () => {
    cy.visit("/hangman-game/actions", {headers : {

"Accept": "application/vnd.github.v3+json",
"Authorization": ˋBearer ${process.env.GITHUB_TOKEN}`

    }});
    cy.get("body");
  });
});
