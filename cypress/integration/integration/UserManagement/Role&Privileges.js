describe("User Management employee add", () => {

    
    beforeEach(() => {

      cy.login('Anisha','Sim@1234')
      
      // cy.visit('http://103.94.159.179:98/user-management/employee')
  
      //redirect to dasboard validate//firstrun
    } )
    it("vendor add", ()=>{
      cy.wait(15000)
      cy.contains('User Management').invoke('show') //show helps to make dom element visible , if there is anything in the submenu it auto clicks.
      cy.wait(2000)
      cy.contains('User Management').click()
      cy.contains('Roles & Privileges').click()
      cy.get('button[name="addSimDetails"]').click()
      cy.get("#name").type("Admin")
      cy.get("#description").type("only for test")
      cy.get('button[type="submit"]').click()
    })
})