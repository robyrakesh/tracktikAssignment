/// <reference types="Cypress" />

const Account = '#nav-link-accountList'
const MENU = '#nav-hamburger-menu'
const MENU_ITEMS = '#hmenu-content'
const CATEGORIES = '.hmenu-item.hmenu-title '

export default class homePage {
  static validateUser(user) {
    cy.getElementById(Account)
        .should(($el) => expect($el).to.contain(`Hello, ${user}`))
  }

  static getReturnOrdersButton() {
    return cy.get('#nav-orders')
  }

  static getCart() {
    return cy.get('#nav-cart')
  }

  static verifymenuItems() {
    cy.get(MENU).click()
    cy.get(MENU_ITEMS).within(() => {
      cy.get(CATEGORIES)
        .contains('shop by department')
        .should('be.visible')
      cy.get(CATEGORIES)
        .contains('programs & features')
        .scrollIntoView()
        .should('be.visible')
    })
  }

}
