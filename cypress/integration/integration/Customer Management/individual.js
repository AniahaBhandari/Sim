describe("Customer Management", () => {

    
    beforeEach(() => {

      cy.login('Anisha','Sim@1234')
      
     
    } )
    it("individual add", ()=>{
      cy.wait(15000)
      cy.contains('Customer Management').invoke('show') //show helps to make dom element visible , if there is anything in the submenu it auto clicks.
      cy.wait(2000)
      cy.contains('Customer Management').click()
      cy.wait(5000)
      //cy.contains('Individual').click()
    })
})
