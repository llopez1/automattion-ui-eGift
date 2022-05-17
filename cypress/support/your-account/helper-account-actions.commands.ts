
Cypress.Commands.add("purchaseDefaultEGiftCard", () => {
  cy.get(".acsUxWidget")
    .should("contain.text", "Shop the perfect gift card");
  cy.get(":nth-child(3) > :nth-child(1) > .bxc-grid__content > .bxc-grid__text > :nth-child(3) > a")
    .click();
  cy.get("#gc-order-form-recipients")
    .type("rainforesttester123@gmail.com");
  cy.get("#gc-buy-box-bn")
    .click();
  cy.wait(1000)
  cy.get(".a-button-inner > .a-button-input")
    .first()
    .click();
  cy.get("#placeYourOrder")
    .click();
  cy.wait(1000);
})

Cypress.Commands.add("purchaseUpdatedEGiftCard", () => {
  cy.get(".acsUxWidget")
    .should("contain.text", "Shop the perfect gift card");
  cy.get(":nth-child(3) > :nth-child(1) > .bxc-grid__content > .bxc-grid__text > :nth-child(3) > a")
    .click();
  cy.get("#gc-order-form-custom-amount")
    .type("75.00");
  cy.get("#gc-order-form-recipients")
     .type("rainforesttester123@gmail.com");
  cy.get("#gc-buy-box-bn")
    .click();
  cy.wait(1000)
  cy.get(".a-button-inner > .a-button-input")
    .first()
    .click();
  cy.get("#placeYourOrder")
    .click();
  cy.wait(1000);
  })
  
Cypress.Commands.add("removeEGiftCardPurchase", () => {
  cy.get(".acsUxWidget")
    .should("contain.text", "Shop the perfect gift card");
  cy.get(":nth-child(3) > :nth-child(1) > .bxc-grid__content > .bxc-grid__text > :nth-child(3) > a")
    .click();
  cy.get("#gc-order-form-recipients")
    .type("rainforesttester123@gmail.com");
  cy.get("#gc-buy-box-bn")
    .click();
  cy.wait(1000)
  cy.get(".a-button-inner > .a-button-input")
    .first()
    .click();
  cy.get(".quantity-delete-button")
    .should("contain.text", "Remove")
    .click()
  cy.get("#gc-asin-title")
    .should("contain.text", "Amazon.com eGift Card")
  cy.log("Your Purchase Was Successfully Cancelled!")
})

Cypress.Commands.add("verifyEGiftCardPurchase", () => {
  cy.get(".a-alert-heading")
    .should("contain.text", "Order placed, thanks!")
  cy.get(".a-section > .a-size-small > :nth-child(1)")
    .should("contain.text", "rainforesttester123@gmail.com")
  cy.log("Congratulations! Your eGift Card Purchase was successful!")
})
