/// <reference types="cypress" />

import {LoginPage, homePage} from '../pages/index'

const SignOut = '#nav-item-signout'
const Account = '#nav-link-accountList'

describe('Login Validation', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.clearCookies()
  })

  afterEach(() => {
    cy.clearCookies()
  })

    it('Login with valid credentials', () => {
      cy.getElementById(Account)
        .contains('Hello, Sign in')
        .should('be.visible')
        .click()
      LoginPage.loginWith(Cypress.env('email'), Cypress.env('pass'))
      homePage.validateUser(Cypress.env('user'))
    })

    it('Login with in-valid credentials', () => {
      cy.getElementById(Account)
        .contains('Hello, Sign in')
        .should('be.visible')
        .click()
      // passing invalid credentials
      LoginPage.loginWith(Cypress.env('email'), 'test123')
      LoginPage.verifyErrorMessage()
    })
})

describe('LogOut Validation', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.getElementById(Account)
      .contains('Hello, Sign in')
      .should('be.visible')
      .click()
    LoginPage.loginWith(Cypress.env('email'), Cypress.env('pass'))
  })

    it('LogOut', () => {
      cy.getElementById(Account)
        .realHover()
      cy.get(SignOut).click({force:true})
      LoginPage.verifySignOutPage()
    })
})
