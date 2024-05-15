/// <reference types = "cypress"/>

const user = require("../../../../fixtures/data/userData.json");
const account = require("../../../../fixtures/data/account.json");
const message = require("../../../../fixtures/data/messageData.json");
const { pages } = require("../PageObject/navigation");
const { register } = require("../PageObject/registerPage");

const getPages = pages();
const login = register();

describe("Test suite login", () => {
  beforeEach("test", () => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    getPages.visitAccount();
  });

  describe("POSITIVE", () => {
    it("Login with the valid email & password", () => {
      login.loginUser(user.validUser.email, user.validUser.password);
      cy.get(account.userLogin)
        .should(
          "contain",
          `${user.validUser.firstName} ${user.validUser.lastName}!`
        )
        .and("be.visible");
    });
  });

  describe("NEGATIVE", () => {
    it.only("Login with the empty email & password", () => {
      login.loginUser("", "");
      cy.get(account.Errormsg).should("contain", message.LoginRequired);
    });
  });
});
