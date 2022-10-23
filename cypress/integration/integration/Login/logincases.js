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

  it("test blank username/pass", () => {

    cy.get("#username").type("000")
    cy.get("#password").type("000")
    cy.get('.chakra-button').click()
    cy.get('#toast-USR0003-title').should('include.text', 'Invalid credentials')
   

    //cy.get('#toast-USR0003-title').should('include.text','Invalid credentials')
    //cy.get('.toast').contains("Invalid Credentials")

    //cy.contains("Invalid Credentials!")

  })


  // it("test valid username & invalid psw", () => {
  //   cy.get("#username").type("Ragas")  
  //   cy.get("#password").type("98434933")  
  //   cy.get('.chakra-button').click()
  //cy.get('.toast').type("Invalid Credentials")
  // cy.contains("Invalid Credentials!")
  //})

  it("test valid username/password", () => {

    cy.get("#username").type("Anisha")
    cy.get("#password").type("Sim@1234")
    cy.get('.chakra-button').click()
    cy.wait(5000)
    cy.url().should('include', 'http://103.94.159.179:98/')


    // cy.get('.chakra-button').click()
    // cy.url().should('eq', 'http://103.94.159.179:98/') //redirect to dasboard validate

  })



})