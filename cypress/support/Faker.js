
const faker = require("faker");
var UserData = {
    "FirstName" : faker.name.firstName(),
    "StudentName" :faker.name.firstName(),
    "PhoneNumber" : faker.phone.phoneNumber(), 
    // 1-768-876-098
    "EmailId" : faker.internet.email(),
    "Address1" : faker.address.secondaryAddress(),
    "Address2" : faker.address.county(),
    "Address3" : faker.address.city(),
    "zipcode" : faker.address.zipCode(),
    "remark" : faker.lorem.sentence(),
    "Reference_Id" : faker.finance.creditCardNumber()

}
export default UserData




