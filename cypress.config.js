const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: "o2cj6s",
  video:true,
  baseUrl: 'http://localhost:3000',

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
    specPattern: 'cypress/Integration/Examples/*.js'
    
  },
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  execTimeout: 60000,
  uncaughtExceptionCaptureLevel: "off",
  
  
    "videoTimeout": 60000, // Set a higher value in milliseconds
    "videosFolder": "cypress/videos"
  
  
  
});