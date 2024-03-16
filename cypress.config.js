const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {  
    viewportWidth: 1920, 
    viewportHeight: 1080,
    watchForFileChanges: false,
    retries: {
        runMode: 2,
        openMode: 2
      },
  
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
