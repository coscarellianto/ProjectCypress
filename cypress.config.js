const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  "reporter": "mochawesome",
  "reporterOptions": {
    "charts": true,
    "overwrite": false,
    "html": false,
    "json": true,
    "reportDir": "cypress/report/mochawesome-report"},
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})