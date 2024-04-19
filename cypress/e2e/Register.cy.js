describe('template spec', () => {
  let UserEmail
  let UserPwd
  before (() => {
    UserEmail='inessiness@gmail.com';
    UserPwd='test012345.';
  })
beforeEach(()=>{
  cy.visit('https://ecommerce-playground.lambdatest.io/')
  cy.get('a[title="Poco Electro"]').should('be.visible')
  cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/account"]').contains(' My account').click({force: true})
  cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/register')
  })
it('creation avec données correcte ', () => {
  cy.get('input[name="firstname"]').type('inees')
  cy.get('input[name="lastname"]').type('nossey')
  cy.get('input[name="email"]').type(UserEmail)
  cy.get('input[name="telephone"]').type('a66449977l')
  cy.get('input[name="password"]').type(UserPwd)
  cy.get('input[name="confirm"]').type(UserPwd)
  cy.get('input[type="radio"]').check('1',{force:true})
  cy.get('input[type="checkbox"]').check('1',{force:true})
  cy.get('input[type="submit"]').click()
})
  
  it('creation avec données erroné ', () => {

    cy.get('input[name="firstname"]').type('in*/es')
    cy.get('input[name="lastname"]').type('5454778')
    cy.get('input[name="email"]').type('888+*@gmail.com')
    cy.get('input[name="telephone"]').type('aanvjl')
    cy.get('input[name="password"]').type('87po*')
    cy.get('input[name="confirm"]').type('87po*')
    cy.get('input[type="radio"]').check('1',{force:true})
    cy.get('input[type="checkbox"]').check('1',{force:true})
    cy.get('input[type="submit"]').click()
  })
  it('creation avec champs vide ', () => {
   
    cy.get('input[name="firstname"]').type('iness')
    cy.get('input[name="lastname"]').type('ines')
    cy.get('input[name="email"]').type('nosey.com')
    cy.get('input[name="telephone"]').type(' ')
    cy.contains ('Enter valid phone number with country code!')
    cy.get('input[name="password"]').type('87nn')
    cy.get('input[name="confirm"]').type('879nn')
    cy.contains ('Password confirmation does not match password!')
    cy.get('input[type="radio"]').check('1',{force:true})
    cy.get('input[type="checkbox"]').check('1',{force:true})
    cy.get('input[type="submit"]').click()
  })


 
})