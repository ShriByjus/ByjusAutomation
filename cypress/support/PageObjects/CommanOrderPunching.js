import buttons from "../../support/PageObjects/clickButton";
const faker = require("faker");
var UserData = {
    "FirstName" : faker.name.firstName(),
    "StudentName" :faker.name.firstName(),
    // "PhoneNumber" : faker.phone.phoneNumber(), 
    "PhoneNumber" : faker.phone.phoneNumberFormat(), 
    "EmailId" : faker.internet.email(),
    "Address1" : faker.address.secondaryAddress(),
    "Address2" : faker.address.county(),
    "Address3" : faker.address.city(),
    "zipcode" : faker.address.zipCode(),
    "remark" : faker.lorem.sentence(),
    "Reference_Id" : faker.finance.creditCardNumber()

}
class CommanOrderPunching {
    getMiddlewareByjusOrder() {
        cy.visit('https://dev-middleware.byjusorders.com/details?directSalesBy=%20&appointmentBookedBy=Meghana%20Negi&studentName=Shubham%20singh&userEmail=praz@byjus.com&studentEmail=sonuthegreatest25@gmail.com&studentMobile=%2091-7972290364,%208728981217&accessKey=u$r345dfdff0767605294d91b80ac914f62&secretKey=b56b69cd8b4c4be11fbac035bb5b17f4198059f0&accountNumber=24692&prospectId=akjkqo5hgv22ytvblekhg_jhcx&typeOfSales=DS%20Sales&SourceCampaign=%20&SourceOfLead=%20&LeadSource=%20&SourceMedium=%20&SourceCampaignId=%20&UTMSource=%20&CampaignName=%20&homeAddress=studentEmail=sonuthegreatest25@gmail.comstudentEmail=sonuthegreatest25@gmail.com');
        // cy.get('.btn-success').click()
    }

    getSalesPersonEmailId() {
        cy.get('#directSalesBy').type('pooja.a@byjus.com{enter}')
    }

    getSalesPersonDetails() {
        const NewButtons = new buttons();
        cy.get('#parentName').type(UserData.FirstName).should('have.value',UserData.FirstName)
        cy.get('#studentName').clear()
        cy.get('#studentName').type('www').should('have.value','www')
        cy.get('#parentMobileNo').clear()
        cy.get('#parentMobileNo').type('9898007866').should('have.value','9898007866')
        // cy.get('#parentMobileNo').type(UserData.StudentName).should('have.value',UserData.StudentName)
        cy.get('#email').clear()
        cy.get('#email').type(UserData.EmailId).should('have.value',UserData.EmailId)
        // cy.get('.next-btn').click()
        NewButtons.getClickNextButtons();
    }
    getAddressDetails() {
        const NewButtons = new buttons();
        cy.get('#addressLine1').type(UserData.Address1).should('have.value',UserData.Address1)
        cy.get('#addressLine2').type(UserData.Address2).should('have.value',UserData.Address2)
        cy.get('#addressLine3').type(UserData.Address3).should('have.value',UserData.Address3)
        cy.get('#zipcode').type('600001').should('have.value','600001')
        NewButtons.getClickNextButtons();
        cy.wait(2000)
        NewButtons.getClickNextButtons();
    }

    getProductsDetails() {
        const NewButtons = new buttons();
        cy.get('input[type="radio"].ant-radio-input').check('NON_EMI').should('have.value','NON_EMI')
        cy.get('.fetch-btn').click();
        cy.get('#finalPrice').type('33000').should('have.value','33000')
        NewButtons.getClickNextButtons();
        cy.wait(2000)
        cy.get('input[type="checkbox"].ant-checkbox-input').check({ force: true })
        cy.wait(2000)
        cy.get('.ant-modal-footer > div > .ant-btn-primary').click()
        cy.get('.ant-drawer-body > div > .ant-btn').click()
    }

    getPaymentDetails() {
        cy.get('.ant-select-selection__rendered').type('Cash Deposit{enter}')
        cy.get('#referenceId').type(UserData.Reference_Id).should('have.value',UserData.Reference_Id)
        cy.get('#amount').type('33000').should('have.value','33000')
    }

    getUploadImage() {
        const NewButtons = new buttons();
           const filepath = 'image.png'
           cy.get('input[type="file"]').attachFile(filepath)
           cy.wait(4000)
        //    cy.get('.next-btn').click()
            NewButtons.getClickNextButtons();
            cy.wait(4000)
            cy.get('input[type="checkbox"].ant-checkbox-input').check({ force: true })
            cy.get('.ant-modal-footer > div > .ant-btn-primary').click()
    }

    getOrderDetails() {
        const NewButtons = new buttons();
        cy.get(':nth-child(1) > .ant-radio > .ant-radio-input').click()
        cy.get('#remark').type(UserData.remark).should('have.value',UserData.remark)
        NewButtons.getClickAntButtons()
        cy.wait(2000)
        NewButtons.getClickAntButtons()
        cy.wait(30000)
        NewButtons.getClickAntButtons()
    }
    
}
export default CommanOrderPunching