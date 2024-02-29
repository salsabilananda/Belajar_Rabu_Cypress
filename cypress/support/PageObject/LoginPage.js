class LoginPage {
  // Locators
  elements = {
    usernameInput: () => cy.get("#email"),
    passwordInput: () => cy.get("#pass"),
    submitButton: () => cy.get("#send2"),
    errorMessage: () => cy.get(".message-error > div"),
    successMessage: () => cy.get(".success-message"),
  };

  // Actions
  login(username, password) {
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.submitButton().click();
  }
}

export default LoginPage;
