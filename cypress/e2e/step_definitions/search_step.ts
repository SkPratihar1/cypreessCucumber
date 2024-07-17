import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const searchQuery = 'Cypress';
const searchButtonSelector = '.bstack-mm-search-menu.doc-search-menu';
const searchInputSelector = '.ais-SearchBox-input';
const submitSearchButtonSelector = '.ds__input__handle--btn .ds__input__handle--submit';
const searchResultsSelector = '.ais-Hits-item';
const resultTitleSelector = 'h.ds__dropdown__list--title';
const resultDescriptionSelector = '.ds__dropdown__list--description';

Given('I open the search page', () => {
    cy.intercept('GET', '/api/search').as('searchApi');
    cy.visit('https://www.browserstack.com/home');
});

When('I click the search button', () => {
    // cy.pause()
    cy.wait(4000);
    cy.get('button.bstack-mm-search-menu.doc-search-menu.dropdown-toggle.doc-search-cta.doc-search-menu-icon.doc-menu-toggle.hide-sm.hide-xs',{timeout:3000})
    .should('be.visible')
    .click();
    cy.get('form.ais-SearchBox-form')
      .should('be.visible');
    cy.wait(4000);
  
});

When('I enter the search query', () => {
    // cy.wait(3000)
    // cy.pause();
    // .type('{enter}')
    cy.get(searchInputSelector).type(searchQuery).type('{enter}');
});

// When('I submit the search', () => {
//   cy.get(submitSearchButtonSelector).click();
// });

Then('I should see all search results related to', () => {
//   cy.get('h2.ds__dropdown__list--title').each(($el) => {
//     // Check if the title or description contains 'Cypress'
//     cy.wrap($el).find(resultTitleSelector).should('contain.text', searchQuery);
//     // cy.wrap($el).find(resultDescriptionSelector).should('contain.text', searchQuery);
//   });
cy.get('h2.ds__dropdown__list--title')
      .should('be.visible')
      .then(($titles) => {
        // Filter elements that contain the word 'Cypress'
        const count = $titles.filter((index, element) => {
          return Cypress.$(element).text().includes('Cypress');
        }).length;

        // Log the count outside the assertion
        cy.log(`Number of titles containing 'Cypress': ${count}`);

        // Assert the count is above 0
        expect(count).to.be.above(0);
      });
// cy.get('h2.ds__dropdown__list--title').each(($ele) => {
//     if($ele.text().trim() == 'Cypress'){
//       expect($ele.text().trim()).to.equal('Cypress')  //Assertion for exact text
//     }
//   })
});
