
describe('my fisrt test case' , function() {

    it('fisrt test case' , function() {
        
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)
        cy.get('.products').find('.product').should('have.length',4)
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click().then(function() {
             console.log('my name is cypress')
        }) //adding cart using index
       
        cy.get('.products').find('.product').each(($el, index, $list) => {
            var productData = $el.find('h4.product-name').text()
          if(productData.includes('Cauliflower'))
          {
              $el.find('button').click()
          }
        })
        cy.get('.brand').should('have.text','GREENKART')
        cy.get('.brand').then(function(elementOne) {
            cy.log(elementOne.text())
        })

        cy.get('.cart-icon > img').click()
        cy.get('.action-block').contains('PROCEED TO CHECKOUT').click()
        cy.get(':nth-child(14)').click()
        cy.get('select').select('Australia').should('have.value','Australia')
        cy.get('.chkAgree').check().should('be.checked')
        cy.get('button').click()
    })
})