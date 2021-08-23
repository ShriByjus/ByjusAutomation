import buttons from "../../support/PageObjects/clickButton";
import CommanOrderPunching from "../../support/PageObjects/CommanOrderPunching";
import GrabProductDetails from "../../support/PageObjects/ProdustTypes";

describe('punching Competitive Order' , () => {
   
    it('fisrt test case' , () => {
        const getAllOrderDetails = new CommanOrderPunching();
        getAllOrderDetails.getMiddlewareByjusOrder()
       })

    it('select sales done by email id', () => {
        const getAllOrderDetails = new CommanOrderPunching();
        getAllOrderDetails.getSalesPersonEmailId()
    } )

    it('select sales person details' ,() => {
     const getAllOrderDetails = new CommanOrderPunching();
     getAllOrderDetails.getSalesPersonDetails()
    } )

    it('Address detailes', () => {
        const getAllOrderDetails = new CommanOrderPunching();
        getAllOrderDetails.getAddressDetails()
        
    })
    it('select streaming', () => {
       const ProductTypeCombo = new GrabProductDetails()
       ProductTypeCombo.ProductTyepCompetitive()
       const NewButtons = new buttons();
       cy.get('input[type="radio"].ant-radio-input').check('NON_EMI').should('have.value','NON_EMI')
       cy.get('.fetch-btn').click();
       cy.get('#finalPrice').type('10000').should('have.value','10000')
       NewButtons.getClickNextButtons();
       cy.wait(2000)
       cy.get('input[type="checkbox"].ant-checkbox-input').check({ force: true })
       cy.wait(2000)
       cy.get('.ant-modal-footer > div > .ant-btn-primary').click()
       cy.get('.ant-drawer-body > div > .ant-btn').click()
    })
    it('Address detailes', () => {
        const getAllOrderDetails = new CommanOrderPunching();
        getAllOrderDetails.getPaymentDetails()
        
    })

    it('Address detailes', () => {
        const getAllOrderDetails = new CommanOrderPunching();
        getAllOrderDetails.getUploadImage()
        
    })

    it('Address detailes', () => {
        const getAllOrderDetails = new CommanOrderPunching();
        getAllOrderDetails.getOrderDetails()
        
    })

    })