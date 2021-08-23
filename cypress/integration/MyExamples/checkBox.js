describe('checkbox should be checked' ,function() {
    it('checked test' ,function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption2').check().should('be.checked').and('have.value','option2')
        cy.get('#checkBoxOption3').check().should('be.checked').and('have.value','option3')
    })
    it('unchecked test' ,function() {
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption2').uncheck().should('not.be.checked')
    })
    it('selecting multiple check boxes' ,function() {
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption2').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option2'])
    })
    it('select static dropdowns', function() {
        cy.get('select').select('option3').should('have.value','option3')
    })
   it('selecting dynamic dropdowns', function() {
       cy.get('#autocomplete').type('can')
       cy.get('.ui-menu-item div').each(($el, index, $list) => {
          if($el.text()==='Canada'){
            $el.click()
          }
           
       })
       cy.get('#autocomplete').should('have.value','Canada')
   })
   it('select radio buttons', function() {
    // cy.get('[for="radio2"] > .radioButton').click().should('have.value','radio2')
    cy.get('[value="radio2"]').check().should('be.checked').and('have.value','radio2')
   })

   it('hide input edit box',function() {
       cy.get('#displayed-text').should('be.visible')
       cy.get('#hide-textbox').click()
       cy.get('#displayed-text').should('be.not.visible')
       cy.get('#show-textbox').click()
       cy.get('#displayed-text').should('be.visible')



   })
})
