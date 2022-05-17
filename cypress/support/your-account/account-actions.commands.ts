
Cypress.Commands.add("navigateToAccountPage", () => {
  cy.get("#nav-link-accountList")
    .click();
  cy.get(".a-container")
    .should("contain.text", "Your Account");
})

Cypress.Commands.add("selectEGiftCard", () => {
  cy.get("[data-card-identifier=\"GiftCards\"]")
    .should("contain.text", "Gift cards")
    .click();
  cy.get(".gc-vertical-tab-links").within(() => {
    cy.get(".a-link-normal")
      .contains("Purchase a Gift Card")
      .click();
  })
})