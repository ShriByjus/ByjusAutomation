
// const lodash = require('lodash');
// const moment = require('moment');
// const date = process.env.DATE ? new Date(process.env.DATE) : new Date();
const faker = require("faker");
var UserData = {
    "FirstName" : faker.name.firstName(),
    "StudentName" :faker.name.findName(),
    "PhoneNumber" : faker.phone.phoneNumberFormat(), 
    // 1-768-876-098
    "EmailId" : faker.internet.email(),
    "Address1" : faker.address.secondaryAddress(),
    "Address2" : faker.address.county(),
    "Address3" : faker.address.city(),
    "zipcode" : faker.address.zipCode(),
    "remark" : faker.lorem.sentence(),
    "Reference_Id" : faker.finance.creditCardNumber()
}
// const generateMobileNumber = () => {
//     const currentDate = moment(process.env.DATE).format('YYMMDDHHmmss');
//     const randomNumber = lodash.random(9, 999);
//     const paddedRandomNumber = lodash.padStart(randomNumber, 4, 0);
//     const mobileNumber = `91-${currentDate}${paddedRandomNumber}`;

//     return mobileNumber;
// }
console.log(UserData.FirstName);
console.log(UserData.StudentName);
console.log(UserData.EmailId);
console.log(UserData.remark);
console.log(UserData.PhoneNumber);
console.log(UserData.Address1);
console.log(UserData.Address2);
console.log(UserData.Address3);
console.log(UserData.zipcode);
console.log(UserData.Reference_Id);