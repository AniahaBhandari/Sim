import 'cypress-file-upload'
   
    Cypress.Commands.add('login', (username, password) => {  // custom command for login

       

        cy.visit('http://103.94.159.179:98/login/')

        cy.get("#username").type(username)  



        cy.get("#password").type(password)



        cy.get('.chakra-button').click()

})
 
