describe('template spec', () => {
    it('forget', () => {
     cy.visit('https://ecommerce-playground.lambdatest.io/')
     cy.get('a[title="Poco Electro"]').should('be.visible')
     cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/account"]').contains(' My account').click({force: true})
     cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/forgotten"]').contains('Forgotten Password').click({force: true})
     cy.get('input[id="input-email"]').type('ines@gmail.com')
     cy.get('button[type="submit"]').contains('Continue').click({force: true})
     cy.contains ('An email with a confirmation link has been sent your email address.')})
    it('mail invalid ', () => {
     cy.visit('https://ecommerce-playground.lambdatest.io/')
     cy.get('a[title="Poco Electro"]').should('be.visible')
     cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/account"]').contains(' My account').click({force: true})
     cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/forgotten"]').contains('Forgotten Password').click({force: true})
     cy.get('input[id="input-email"]').type('ines5@gmail.com')
     cy.get('button[type="submit"]').contains('Continue').click({force: true}) 
     cy.contains('Warning: The E-Mail Address was not found in our records, please try again!')})
  
     })
