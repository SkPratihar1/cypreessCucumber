import { faker } from '@faker-js/faker';

export const fakeData = {
  companyName : faker.company.name(),
  companyWebsite : faker.internet.url(),
  companyHQ :faker.location.city(),
  firstName : faker.person.firstName(),
  lastName : faker.person.lastName(),
  linkedinUrl:faker.internet.url(),
  industry  :faker.vehicle.model(),
  position:faker.person.jobTitle(),
  jobTitle:faker.person.jobTitle(),
  companyLinkedIn: "https://in.linkedin.com/company/itobuz-technologies-pvt-ltd",
  companyEmployeeCount: '70',
  fundingRaised:"3000",
  email :"pratihar+"+faker.person.firstName()+"@itobuz.com"
}

// export const generateAddHire =() =>({
//     "position": fakeData.position,
//     "companyWebsite": fakeData.companyWebsite,
//     "companyLinkedIn": "https://in.linkedin.com/company/itobuz-technologies-pvt-ltd",
//     "companyEmployeeCount": 70,
//     "industry": fakeData.industry,
//     "companyHQ": fakeData.companyHQ,
//     "companyName": fakeData.companyName,
//     "lastName": fakeData.lastName,
//     "firstName": fakeData.firstName
  
  
//   })