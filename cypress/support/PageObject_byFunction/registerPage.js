export const register = () => {
  const firstNameInput = (firstName) => {
    cy.get("#firstname").type(firstName);
  };

  const lastNameInput = (lastName) => {
    cy.get("#lastname").type(lastName);
  };

  const emailInput = (email) => {
    if (!email) {
      cy.get("#email_address").invoke("val", `${email}`);
    }
    cy.get("#email_address").type(`${email}`);
  };

  const passwordInput = (password) => {
    cy.get("#password").type(password);
  };

  const confirmPasswordInput = (confirmPassword) => {
    cy.get("#password-confirmation").type(confirmPassword);
  };

  const getSubmit = () => {
    cy.get("#form-validate > .actions-toolbar > div.primary > .action").click();
  };

  return {
    firstNameInput,
    lastNameInput,
    emailInput,
    passwordInput,
    confirmPasswordInput,
    getSubmit,
  };
};
