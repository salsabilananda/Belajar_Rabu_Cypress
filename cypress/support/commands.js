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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
Cypress.Commands.add("verifyErrorMessage", (possibleErrorMessages) => {
  cy.get(".message-error", { timeout: 20000 }).then(($errorMessages) => {
    if ($errorMessages.length > 0) {
      const displayedErrors = $errorMessages
        .toArray()
        .map((el) => el.innerText);
      const randomErrorMessageDisplayed = displayedErrors.some((errorMessage) =>
        possibleErrorMessages.includes(errorMessage)
      );
      expect(randomErrorMessageDisplayed).to.be.true;
    } else {
      expect(true, "No error message displayed").to.be.true;
    }
  });
  cy.wait(Math.random() * 2000 + 1000);
});

//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
