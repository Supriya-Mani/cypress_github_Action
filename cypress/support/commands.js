// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-xpath';

const faker = require('faker');

Cypress.Commands.add('login', (username, password) => {
  // Your login implementation here
});

// Add custom command to generate fake data using Faker.js
Cypress.Commands.add('generateFakeData', (overrides = {}) => {
  const defaultData = {
    // Define your default data here using Faker.js
    name: faker.name.findName(),
    email: faker.internet.email(),
    // ... add more fields as needed
  };

  return { ...defaultData, ...overrides };
});
