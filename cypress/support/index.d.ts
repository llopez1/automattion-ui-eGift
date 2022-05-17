declare namespace Cypress {
  interface Chainable<Subject = any> {

    /**
     * Submits login and credentials.
     * 
     * @example
     *    cy.login(email, password)
     */
    login(email: string, password: string): void

    /**
     * Signs the user out.
     * 
     * @example
     *    cy.signOut()
     */
     signOut(): void

     /**
      * Navigates to Your Account Page.
      * 
      * @example
      *   cy.navigateToAccountPage()
      */
     navigateToAccountPage(): void
     
      /**
       * Selects the eGift card option.
       * 
       * @example
       *   cy.selectEGiftCard()
       */
      selectEGiftCard(): void

      /**
       * Uses default selection for eGift card purchase.
       * 
       * @example
       *   cy.purchaseDefaultEGiftCard()
       */
      purchaseDefaultEGiftCard(): void

      /**
       * Updates the default money value of eGift card.
       * 
       * @example
       *    cy.purchaseUpdatedEGiftCard()
       */
      purchaseUpdatedEGiftCard(): void

      /**
       * Cancels the purchase of an eGift by removing it.
       * 
       * @example
       *    cy.removeEGiftPurchase()
       */
      removeEGiftCardPurchase(): void

      /**
       * Verified the eGift was purchased.
       * 
       * @example
       *    cy.verifyEGiftCardPurchase()
       */
      verifyEGiftCardPurchase(): void

    }
}