const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporter: "reporters/custom.js",
  pageLoadTimeout: 60000,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      reporter: "mochawesome",
        (config.specPattern = ["cypress/e2e/1-Belajar/Homepage.cy.js"]);
      return config;
    },
    viewportHeight: 768,
    viewportWidth: 1500,
    experimentalStudio: true,
  },
});
