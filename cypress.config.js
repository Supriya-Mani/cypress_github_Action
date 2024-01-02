const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId:"gaij8z",

  viewportWidth: 2000,
  viewportHeight: 900,
  reporter: 'cypress-mochawesome-reporter',//for html report
  video: true,
 reporterOptions: {
charts: true,
reportPageTitle: 'Cypress Inline Reporter',

embeddedScreenshots: true,

inlineAssets: true, //Adds the asserts inline
 },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'Cypress/Integration/Examples/*.js'
    
  },
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  execTimeout: 60000,
  uncaughtExceptionCaptureLevel: "off",
    "record": true,
    "key": "<f1456bb5-f22a-49a6-8aa6-05420c469969>",
    "num": 4,
    "spec": "cypress/Integration/Examples/*.js",
    "execTimeout": 600
  
  
});