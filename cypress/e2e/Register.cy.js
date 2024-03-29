describe('template spec', () => {
  /*let UserEmail
  let UserPwd
  before (() => {
    UserEmail='ines@gmail.com';
    UserPwd='test123.';
  })
beforeEach(()=>{
  cy.visit('https://ecommerce-playground.lambdatest.io/')
  cy.get('a[title="Poco Electro"]').should('be.visible')
  cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/account"]').contains(' My account').click({force: true})
    cy.get('input[name="email"]').type(UserEmail)
    cy.get('input[name="password"]').type(UserPwd)
    cy.get('input[type="submit"]').click()
})*/
  /*it('Create', () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/register')
    cy.get('input[name="firstname"]').type('ines')
    cy.get('input[name="lastname"]').type('omrani')
    cy.get('input[name="email"]').type(UserEmail)
    cy.get('input[name="telephone"]').type('22826560')
    cy.get('input[name="password"]').type(UserPwd)
    cy.get('input[name="confirm"]').type(UserPwd)
    cy.get('input[type="radio"]').check('1',{force:true})
    cy.get('input[type="checkbox"]').check('1',{force:true})
    cy.get('input[type="submit"]').click()
  })*/

  it('Search', () => {
    cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input').type('HTC Touch HD')
    cy.get('button[type="submit"]').contains('Search').click()
    cy.get('button[title="Add to Wish List"]').contains('Add to Wish List').click({force:true})
    cy.wait(5000)
    cy.get('a[aria-label="Wishlist"]').click({force:true})
    cy.wait(5000)
    cy.contains('tr','HTC Touch HD').find('button').click({force:true})
  })
})