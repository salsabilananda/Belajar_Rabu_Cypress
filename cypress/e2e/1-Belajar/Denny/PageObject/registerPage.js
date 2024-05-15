export const register = () => {
  const usernameInput = () => cy.get("#email");
  const passwordInput = () => cy.get("#pass");
  const submitButton = () => cy.get("#send2");

  const randomEmail = Math.floor(Math.random() * 100000);

  const loginUser = (username, password) => {
    if (!username && !password) {
      usernameInput().invoke("val", username);
      passwordInput().invoke("val", password);
      submitButton().click();
    } else {
      usernameInput().type(username);
      passwordInput().type(password);
      submitButton().click();
    }
  };
  return { loginUser, randomEmail };
};
