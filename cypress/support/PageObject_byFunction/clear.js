export const clearData = () => {
  const clearFirstNameRegister = () => {
    cy.get("#firstname").clear();
  };

  const clearLastNameRegister = () => {
    cy.get("#lastname").clear();
  };

  const clearEmailRegister = () => {
    cy.get("#email_address").clear();
  };

  const clearPasswordRegister = () => {
    cy.get("#password").clear();
  };

  const clearConfrimPasswordRegister = () => {
    cy.get("#password-confirmation").clear();
  };

  const clearAllRegister = () => {
    clearFirstNameRegister();
    clearLastNameRegister();
    clearEmailRegister();
    clearPasswordRegister();
    clearConfrimPasswordRegister();
  };

  return {
    clearFirstNameRegister,
    clearLastNameRegister,
    clearEmailRegister,
    clearPasswordRegister,
    clearConfrimPasswordRegister,
    clearAllRegister,
  };
};
