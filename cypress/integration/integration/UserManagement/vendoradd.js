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
      cy.contains('Vendor Management').click()
      cy.get('button[name="addSimDetails"]').click()
      cy.wait(10000)
      cy.contains('Browse').click()
      const p = 'pic.jpg'
      
      cy.get('span[class="chakra-text css-cx1aee"]').attachFile(p,{subjectType: 'drag-n-drop'})
      //cy.get('div[class="chakra-image css-p17bc1"]').attachFile(p,{subjectType: 'drag-n-drop'})
     // cy.get('span[')
     cy.contains('Browse').click()
     const v = 'proof.jpg'
     
     cy.get('span[class="chakra-text css-cx1aee"]').attachFile(v,{subjectType: 'drag-n-drop'})
     cy.wait(2000)
     cy.contains('Browse').click()
     const x = 'proof.jpg'
     
     cy.get('span[class="chakra-text css-cx1aee"]').attachFile(x,{subjectType: 'drag-n-drop'})
     cy.wait(5000)
     cy.get('button[type="button"]').click()
     cy.wait(10000)
     cy.get("#username").type("vendorbhai")
     cy.wait(2000)
     cy.get('div[class=" css-1x95qy3-control"]').click()  //access option
     cy.contains('Web').click()
     cy.contains('Browse').click()
     const y = 'proofOfId.jpg'   //y is variable
     cy.get('span[class="chakra-text css-cx1aee"]').attachFile(y, {subjectType: 'drag-n-drop'}) //profile image upload
     cy.wait(5000)
     cy.get('button[type="submit"]').click()
     cy.wait(5000)
     cy.get("#email").type("anusdsa@gmail.com")
     cy.wait(10000)
     cy.get("#mobile").type(98435452)
     cy.wait(5000)
     cy.get("#suburb").type("abcde")
     cy.get("#city").type("ktmcity")
     cy.get("#district").type("bgmt")
     cy.wait(5000)
     cy.get('button[type="submit"]').click()
     




    })
})