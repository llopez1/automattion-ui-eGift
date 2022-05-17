
Cypress.Commands.add("login", (email, password) => {
  cy.get("#nav-link-accountList")
    .click();
  cy.get("[type=\"email\"]")
    .type(email);
  cy.get("[type=\"submit\"]")
    .click(); 
  cy.get("[name=\"password\"]")
    .type(password); 
  cy.get("#signInSubmit")
    .click();
  cy.log("Congrats! You have been logged in!");
})

Cypress.Commands.add("signOut", () => {
  cy.get("#nav-link-accountList")
    .trigger("mouseover")
  cy.get("#nav-flyout-accountList").within(() => {
    cy.get("#nav-item-signout")
      .click()
  })
})