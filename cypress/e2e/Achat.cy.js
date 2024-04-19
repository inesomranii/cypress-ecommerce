describe('Acheter un produit ', () => {

    // Test cases pour l'achat des produits au panier
    it('Acheter un produit au panier', () => {
      cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input').type('HTC Touch HD')
        cy.get('button[type="submit"]').contains("Search").click({force:true})   
        cy.contains("Search - HTC Touch HD")
        cy.get('#entry_212469 > .row > :nth-child(1)').click()
        cy.get('button[title="Add to Cart"]').contains("Add to Cart").click({force:true})
        cy.get('#entry_217825').find('a[aria-controls="cart-total-drawer"]').click({force:true})
        cy.get('#entry_217851 > .icon-right').click()
        cy.contains("Telephone")
        cy.get('input[type="radio"]').check('new',{force:true})
        cy.get('input[name="firstname"]').type('ines')
        cy.get('input[name="lastname"]').type('omrani')
        cy.get('input[name="address_1"]').type('beja')
        cy.get('input[name="city"]').type('Tunisie')
        cy.get('[name="country_id"]').select('Tunisia')
        cy.get('[name="zone_id"]').select('Beja')
        cy.get('input[type="checkbox"]').check('1',{force:true})
        cy.get('button[id="button-save"]').contains("Continue ").click()
        cy.get('button[id="button-confirm"]').contains("Confirm Order ").click()
        cy.contains("Your order has been placed!")
        
            })
    })
