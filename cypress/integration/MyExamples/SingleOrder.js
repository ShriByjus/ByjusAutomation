import buttons from "../../support/PageObjects/clickButton";
import CommanOrderPunching from "../../support/PageObjects/CommanOrderPunching";
import GrabProductDetails from "../../support/PageObjects/ProdustTypes";

describe('my fisrt test case' , () => {
   
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
    it('select single', () => {
       const ProductTypeCombo = new GrabProductDetails()
       ProductTypeCombo.ProductTyepSingle()
        const getAllOrderDetails = new CommanOrderPunching();
        getAllOrderDetails.getProductsDetails()
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