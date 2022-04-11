const { faker } = require('@faker-js/faker');

faker.locale = 'pt_PT';

const randomName = faker.name.findName();
const randomEmail = faker.internet.email();
const randomPhoneNumber = faker.phone.phoneNumber();
const randomCity = faker.address.cityName();
const randomLat = faker.word.adjective(); // faker.helpers.contextualCard();

const randomBes = faker.company.bs();

console.log(randomBes)

console.log(randomName)
console.log(randomEmail)
console.log(randomPhoneNumber)
console.log(randomCity)
console.log("\n\n\n")
console.log(randomLat)
