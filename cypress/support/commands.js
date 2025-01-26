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

const { faker } = require('@faker-js/faker');

Cypress.Commands.add('login', (username, password) => {
  // Your login implementation here
});

// Add custom command to generate fake data using Faker.js
Cypress.Commands.add('generateFakeData', (overrides = {}) => {
  const defaultData = {
    // Define your default data here using Faker.js
    name: faker.person.fullName(),
    email: faker.internet.email(),
    // ... add more fields as needed
  };

  return { ...defaultData, ...overrides };
});

// commands.js
// commands.js
const { createWorker } = require('tesseract.js');

Cypress.Commands.add('convertImageToText', (imageUrl) => {
  return new Promise((resolve, reject) => {
    const worker = createWorker();

    worker.load()
      .then(() => worker.loadLanguage('eng'))
      .then(() => worker.initialize('eng'))
      .then(() => worker.recognize(imageUrl))
      .then(({ data: { text } }) => {
        resolve(text.trim()); // Trim whitespace from the extracted text
      })
      .catch(reject)
      .finally(() => worker.terminate());
  });
});


