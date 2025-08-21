const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
        credentialsOK: {
          username: 'standard_user',
          password: 'secret_sauce',
        },
      },
});
