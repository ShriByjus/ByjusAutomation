describe('Validate Alert Message', () => {
    it('Alert Message', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    })
    it('visible', () => {
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get("#show-textbox").click()
        cy.get('#displayed-text').should('be.visible')
    })
    it('alertbtn', () => {
        cy.get('#alertbtn').click()
        cy.on('window:alert',(str) => {
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
    })
    it('confirmbtn', () => {
        cy.get('#confirmbtn').click()
        cy.on('window:confirm',(str) => {
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })
    it('swith tab example', () =>{
        //invoke [removeAttr] - used to where the linked document is opened.
        //target - used to invoke the Jquery method.
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('include','rahulshettyacademy')
        cy.go('back')
    })

    // it('multiple visit', () => {
    //     cy.get('#opentab').then(function(element) {
    //         const url = element.prop('href')
    //         cy.visit(url)
    //     })
    // })



    it('Validate Table', () => {
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()
            if(text.includes('WebServices')) {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(value) {
                    const valueTest = value.text();
                    expect(valueTest).to.equal('35')
                })
            }
    })
})

    it('table',()=>{
    cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
    const text = $el.text()
    if(text.includes('Resume')){
    cy.get('tr td:nth-child(2)').eq(index).next().then(function(myValue) {
        const myValueText = myValue.text()
          expect(myValueText).to.equal('0')
        })
        }
        })
})

    it('web table fixed examples', () => {
    cy.get('tr td:nth-child(1)').each(($el, index, $list) => {
    const text = $el.text()
    if(text.includes('Ivory')){
        cy.get('tr td:nth-child(1)').eq(index).next().then(function(value) {
            const myWebElement = value.text()
            expect(myWebElement).to.equal('Receptionist')
        })
        cy.get('tr td:nth-child(1)').eq(index).next().next().then(function(value) {
            const myWebElement = value.text()
            expect(myWebElement).to.equal('Chennai')
        })
        cy.get('tr td:nth-child(1)').eq(index).next().next().next().then(function(value) {
            const myWebElement = value.text()
            expect(myWebElement).to.equal('18')
        })
    }
    })
})
    it('validate total amount', () => {
         cy.get('.tableFixHead').find('tr td:nth-child(4)').then(function(totalAmt) {
         const myTotalValue = totalAmt.text()
        expect(myTotalValue).to.equal('282348183246373133')
        })
        
    })
    it('mouse hover', () => {
        cy.get('.mouse-hover-content').invoke('show')
           cy.contains('Top').click()
        //    cy.contains('Top').click({force: true})
           cy.url().should('include','top')
           cy.go('back')
           cy.url().should('include','rahulshettyacademy')


    })
  




    // it('LogIn RuhulShetty Academy', () => {
    //     cy.get(':nth-child(2) > .theme-btn').click()
    //     cy.get('#user_name').type('Shrinath Mirasi').should('have.value','Shrinath Mirasi')
    //     cy.get('#user_email').type('byjusmirashi1992@gmail.com').should('have.value','byjusmirashi1992@gmail.com')
    //     cy.get('#user_password').type('byjusmirashi1992@gmail').should('have.value','byjusmirashi1992@gmail')
    //     cy.get('#user_password_confirmation').type('byjusmirashi1992@gmail').should('have.value','byjusmirashi1992@gmail')
    //     // user_unsubscribe_from_marketing_emails
    //     cy.get('input[type="checkbox').check().should('be.checked')
    // })

})
