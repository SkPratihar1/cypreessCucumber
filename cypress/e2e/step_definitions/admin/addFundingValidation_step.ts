// // cypress/support/step_definitions/your_steps.ts
// import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
// import { Row } from '../../../support/interfaces';
// import AuthUtils from '../../utils/authUtils'

// Given('Admin login to the LeadHawk application', () => {
//     AuthUtils.login(Cypress.env('adminEmail'),Cypress.env('adminPassword'))
 
// });

// When('I read the Excel file', () => {
//   cy.task('readXlsx', { file: '/Users/it062305/dev/learning/cypress-cucumber-typescript/cypress/fixtures/sheet.xlsx', Sheet: 'Hashimoto' })
//     .then((rows: unknown) => {
//       const typedRows = rows as Row[];
//       cy.wrap(typedRows).as('excelRows');
//     });
// });

// Then('I should see the correct number of rows', function () {
//   cy.get<Row[]>('@excelRows').then((rows) => {
//     expect(rows.length).to.equal(10); // Adjust the number as needed
//   });
// });

// Then('the data should be valid', function () {
//   cy.get<Row[]>('@excelRows').then((rows) => {
//     rows.forEach((row, index) => {
//       if (index === 0) return; // Skip header row
//       expect(row['Company Name']).to.be.a('string').and.not.be.empty;
//       expect(row['Company HQ']).to.be.a('string').and.not.be.empty;
//       expect(row.Industry).to.be.a('string').and.not.be.empty;
//       expect(row['Funding Raised']).to.be.a('string').and.not.be.empty;
//       expect(row['Employee Count']).to.be.a('string').and.not.be.empty;
//       expect(row['Company LinkedIn']).to.be.a('string').and.not.be.empty;
//       expect(row['Company Website']).to.be.a('string').and.not.be.empty;
//     });
//   });
// });
