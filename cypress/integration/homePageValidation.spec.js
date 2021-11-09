/// <reference types="cypress" />

import {LoginPage, homePage} from '../pages/index'

const Account = '#nav-link-accountList'

describe('HomePage Validation', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.clearCookies()
    cy.getElementById(Account)
      .contains('Hello, Sign in')
      .should('be.visible')
      .click()
    LoginPage.loginWith(Cypress.env('email'), Cypress.env('pass'))
  })

  afterEach(() => {
    cy.clearCookies()
  })

    it('Validate elements on home page', () => {
      homePage.validateUser(Cypress.env('user'))
      homePage.getReturnOrdersButton().should('be.visible')
      homePage.getCart().should('be.visible')
      homePage.verifymenuItems()
    })

})
