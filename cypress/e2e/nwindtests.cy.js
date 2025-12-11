describe('Reactin sivujen testaus', function () {

    beforeEach(function () {
        cy.visit('http://localhost:5173')
        cy.get('input[placeholder="Username"]').type('simo')
        cy.get('input[placeholder="Password"]').type("test123")
        cy.get('input').contains("Login").click()
    })

    it('Customer lisäys onnistuu', function () {
        cy.contains('Customers').click()
        cy.get('button').contains("Add a new").click()
        cy.get('#customerId').type('APTEK')
        cy.get('#conpanyName').type('Apteekki')
        cy.get('input').contains("Save customer").click()
        //Message tulee näkyviin oikein
        cy.contains('Added new customer Apteekki')
    }) 
  
  })