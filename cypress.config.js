
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: process.env.CYPRESS_PROJECT_ID || "bcmpwq",
  video: true,
  viewportWidth: 2000,
  viewportHeight: 900,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Inline Reporter',
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  execTimeout: 60000,
  uncaughtExceptionCaptureLevel: "off",
  videoTimeout: 60000,
  videosFolder: "cypress/videos",
  env: {
    // Set environment variables as needed
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/Integration/Examples/*.js'
  }
});