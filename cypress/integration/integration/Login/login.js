/ <reference types ="cypress" / >

describe('Login', () => {

  beforeEach(() => { //firstrun

    // root-level hook
    cy.visit('http://103.94.159.179:98/login/')

    // runs once before all tests
  })

  it("validates Title", () => {
    cy.title().should('eq', 'Login') //textvalidate
  })

  it("test valid username/pass", () => {

    cy.get("#username").type("Anisha")
    cy.get("#password").type("Sim@1234")
    cy.get('.chakra-button').click()
    cy.wait(5000)
    cy.url().should('include', 'http://103.94.159.179:98/')
     //redirect to dasboard validate

  })



})