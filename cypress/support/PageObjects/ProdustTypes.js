import buttons from "../../support/PageObjects/clickButton";
import CommanOrderPunching from "../../support/PageObjects/CommanOrderPunching";

class GrabProductDetails {

    ProductTyepSingle() {
        const NewButtons = new buttons();
        cy.wait(2000)
        cy.get('#board').type('CBSE{enter}')
        cy.get('#initialClass').type('8{enter}')
        cy.get('#validity').type('2022{enter}')
        cy.get('#tablet').type('Lenovo 10 inch Tablet (Mobile Data) (Rs 13000){enter}')
        // cy.get('[type="radio"].XyzTypeRadio').first().check() it will click always fisrt one
        cy.get('input[type="radio"].ant-radio-input').check('NON_EMI').should('have.value','NON_EMI')
        cy.get('.fetch-btn').click();
        cy.get('#finalPrice').type('33000').should('have.value','33000')
        // cy.get('.next-btn').click()
        NewButtons.getClickNextButtons();
        // cy.get('.ant-checkbox-wrapper').click()
        cy.wait(2000)
        cy.get('input[type="checkbox"].ant-checkbox-input').check({ force: true })
        cy.wait(2000)
        cy.get('.ant-modal-footer > div > .ant-btn-primary').click()
        cy.get('.ant-drawer-body > div > .ant-btn').click()
    }
    ProductTyepCombo() {
        const NewButtons = new buttons();
        cy.get('.ant-radio-group-solid').contains('Combo').click()
        cy.get('#board').type('CBSE{enter}')
        cy.get('#initialClass').type('1{enter}')
        cy.get('#finalClass').type('3{enter}')
        cy.get('#validity').type('2022{enter}')
        cy.get('#tablet').type('Lenovo 10 inch Tablet (Mobile Data) (Rs 13000){enter}')
    }

    ProductTyepSibling() {
        const NewButtons = new buttons();
        cy.get('.ant-radio-group-solid').contains('Sibling').click()
        cy.get('#siblingName').type('childOne')
        cy.get('#board').type('CBSE{enter}')
        cy.get('#initialClass').type('7{enter}')
        cy.get('#finalClass').type('8{enter}')
        cy.get('#validity').type('2022{enter}')
        cy.get('#tablet').type('Lenovo 8 inch Tablet (Wifi) (Rs 7000){enter}')

        cy.get('.sibling-product-btn-holder').click()
        cy.get('.ant-radio-group-solid').contains('Sibling').click()
        cy.get('#siblingName').type('childTwo')
        cy.get('#board').type('CBSE{enter}')
        cy.get('#initialClass').type('9{enter}')
        cy.get('#finalClass').type('10{enter}')
        cy.get('#validity').type('2022{enter}')
        cy.get('#tablet').type('Lenovo 8 inch Tablet (Mobile Data) (Rs 10000){enter}')
    }

    ProductTyepStreaming(){
        const NewButtons = new buttons();
        cy.get('.ant-radio-group-solid').contains('Streaming').click()
        cy.get('#initialClass').type('11{enter}')
        cy.get('#finalClass').type('12{enter}')
        cy.get('#subCourse').type('JEE+NEET{enter}')
        cy.get('#validity').type('2022{enter}')
    }

    ProductTyepCompetitive(){
        const NewButtons = new buttons();
        cy.get('.ant-radio-group-solid').contains('Competitive').click()
        cy.get('#course').type('CAT{enter}')
        // cy.get('#language').type('English{enter}')
        cy.get('#type').type('New{enter}')
        cy.get('#validity').type('2021{enter}')
        cy.get('#tablet').type('Lenovo 8 inch Tablet (Mobile Data) (Rs 10000){enter}')
    }
}
export default GrabProductDetails