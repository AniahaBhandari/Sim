describe("User Management employee add", () => {

    
      beforeEach(() => {

        cy.login('Anisha','Sim@1234')
        
        // cy.visit('http://103.94.159.179:98/user-management/employee')
    
        //redirect to dasboard validate//firstrun
      } )
      it("employee add", ()=>{
        cy.wait(15000)
        cy.contains('User Management').invoke('show') //show helps to make dom element visible , if there is anything in the submenu it auto clicks.
        cy.wait(2000)
        cy.contains('User Management').click()
        cy.contains('Employee Management').click()
        cy.get('button[name="addSimDetails"]').click() //add button for employee
       
        cy.get('#username').type('airry')
        cy.wait(5000)
        cy.get('#employeeCode').type(734878)
        cy.wait(5000)
        cy.get('div[class=" css-1x95qy3-control"]').click()
        cy.contains('Mobile').click()
        
        cy.contains('Browse').click()
        cy.wait(5000)
        const p = 'proofOfId.jpg'

        cy.get('span[class="chakra-text css-cx1aee"]').attachFile(p,{subjectType: 'drag-n-drop'})
        
        cy.wait(15000)
        cy.get('button[name="Submit"]').click()
       // cy.get('div[class=" css-1x95qy3-control"]').click()
         cy.get('div[class=" css-1x95qy3-control"').contains('Mr.').click({force:true})
        //cy.get(':nth-child(1) > .chakra-form-control > .css-b62m3t-container > .css-1x95qy3-control').click()
       cy.contains('Dr.').click()

       cy.get("#firstName").type("Anisha")
       cy.get("#surname").type("Bhandari")
       cy.get('div[class=" css-1x95qy3-control"').contains('Lesotho').click({force:true})
       cy.contains('Kosovo').click()
       cy.get("#dateOfBirth").type("2000-12-02")

       cy.get('span[class="chakra-radio__label css-1i66d7g"]').contains("Female").click()
       //cy.get('div[class=" css-1x95qy3-control"').select('Mr.').click({force:true})
       cy.wait(5000)
       cy.get('div[class=" css-1x95qy3-control"]').contains('Single').click({force:true}) //dropdown
       //cy.get('div[class=" css-ackcql"]').contains('Single').click()
       cy.contains('Married').click()
     
       cy.get("#email").type("anu143@gmail.com")
       cy.wait(5000)
       cy.get("#mobile").type(98478543)
       cy.wait(5000)
       cy.get("#maidenName").type("gaurangee")
       cy.wait(20000)
       cy.get('button[type="submit"]').click()
       cy.wait(2000)
       cy.get("#suburb").type("subrub")
       cy.get("#city").type("cityy")
       cy.get("#district").type("ABCD")
       cy.get('button[type="submit"]').click()
      })
  
    
  })

  