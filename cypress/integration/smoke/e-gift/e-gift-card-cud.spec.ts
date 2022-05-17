/// <reference types="Cypress" />

describe("Amazon eGift Card Smoke Test", () => {
  beforeEach(() => {
    cy.visit("https://www.amazon.com/");
    cy.login("jolomkonobikaptiz@gmail.com", "jolomkonobikaptiz1880");
    });
    it("User should be able to create and send an eGift Card", function() {
      cy.navigateToAccountPage();
      cy.selectEGiftCard();
      cy.purchaseDefaultEGiftCard();
      cy.verifyEGiftCardPurchase();
    });
    it("User should be able to update and send an eGift Card", function() {
      cy.navigateToAccountPage();
      cy.selectEGiftCard();
      cy.purchaseUpdatedEGiftCard();
      cy.verifyEGiftCardPurchase();
    });
    it("User should be able to remove an eGift Card", function() {
      cy.navigateToAccountPage();
      cy.selectEGiftCard();
      cy.removeEGiftCardPurchase();
    });
});