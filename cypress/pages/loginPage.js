/// <reference types="Cypress" />


const EMAIL_INPUT = '#ap_email';
const PASSWORD_INPUT = '#ap_password';
const LOGIN_BUTTON = '#signInSubmit';
const CONTINUE = '.a-button-inner > #continue'
const ERROR_TOASTER = '#auth-error-message-box > .a-box-inner'

export default class LoginPage {
  static loginWith(email, password) {
    cy.get(EMAIL_INPUT).type(email).should('have.value', email);
    cy.get(CONTINUE).click({force:true})
    cy.get(PASSWORD_INPUT).type(password, { log: false })
      .should(($el) => {
        if ($el.val() !== password) {
          throw new Error('Different value of typed password')
        }
      })
    cy.get(LOGIN_BUTTON).click();
  }

  static verifyErrorMessage() {
    cy.get('body').then(($body) => {
      if ($body.find('#auth-warning-message-box').length) {
        cy.get('#auth-warning-message-box').should(($el) => expect($el).to.contain('Important Message!'))
      }
      else {
        cy.get(ERROR_TOASTER).should(($el) => expect($el).to.contain('There was a problem'))
      }
    })
  }

  static verifySignOutPage() {
    cy.get('body').then(($body) => {
      if ($body.find('#ap-account-switcher-container').length) {
        cy.get('h1.a-text-left').should('be.visible')
      }
      else {
        cy.get('.a-padding-extra-large > .a-spacing-small').should('be.visible')
      }
    })
  }

}
