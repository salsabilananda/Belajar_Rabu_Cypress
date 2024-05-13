/// <reference types="cypress" />

import Navigation from "../../../../support/PageObject/Navigation";

const submit = Navigation.getSubmit();

describe('User Registration', () => {
  beforeEach(()=> {
    Navigation.visitHomepage();
    cy.clearAllCookies;
    cy.contains("Create an Account").click();
    cy.clearAllCookies;
  });

  it('TC-1_Registrasi akun (POSITIVE)', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.panel > .header > :nth-child(3) > a').click();
    cy.get('#firstname').type('Ayang');
    cy.get('#lastname').type('Beb');
    cy.get('#email_address').type('ayang59@gmail.com');
    cy.get('#password').type('Hadi1234');
    cy.get('#password-confirmation').type('Hadi1234');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
    cy.get('.message-success').should("be.visible")
    .should("contain", "Thank you for registering with Main Website Store.");
    /* ==== End Cypress Studio ==== */
  });

  it('TC-2_Registrasi akun dengan email yang sama (NEGATIVE)', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.panel > .header > :nth-child(3) > a').click();
    cy.get('#firstname').type('Ayang');
    cy.get('#lastname').type('Beb');
    cy.get('#email_address').type('ayang58@gmail.com');
    cy.get('#password').type('Hadi1234');
    cy.get('#password-confirmation').type('Hadi1234');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
    cy.get(".confirmation > .control").should("be.visible")
    .should("contain", "There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.");
    /* ==== End Cypress Studio ==== */
  });

  it('TC-3_Registrasi akun tanpa input nama (NEGATIVE)', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.panel > .header > :nth-child(3) > a').click();
    cy.get('#firstname').click();
    cy.get('#lastname').type('Mantan');
    cy.get('#email_address').type('mantan@gmail.com');
    cy.get('#password').type('Mantan1234');
    cy.get('#password-confirmation').type('Mantan1234');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
    cy.get(".confirmation > .control").should("be.visible")
    .should("contain", "This is a required field.");
    /* ==== End Cypress Studio ==== */
  });

  it('TC-4_Registrasi akun tanpa input nama belakang (NEGATIVE)', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.panel > .header > :nth-child(3) > a').click();
    cy.get('#firstname').type('Mantan');
    cy.get('#lastname').click();
    cy.get('#email_address').type('mantan2@gmail.com');
    cy.get('#password').type('Mantan1234');
    cy.get('#password-confirmation').type('Mantan1234');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
    cy.get(".confirmation > .control").should("be.visible")
    .should("contain", "This is a required field.");
    /* ==== End Cypress Studio ==== */
  });

  it('TC-4_Registrasi akun tanpa input passwoerd (NEGATIVE)', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.panel > .header > :nth-child(3) > a').click();
    cy.get('#firstname').type('Mantan');
    cy.get('#lastname').type('Mantan');
    cy.get('#email_address').type('mantan2@gmail.com');
    cy.get('#password').type('Mantan1234');
    cy.get('#password-confirmation').type('Mantan1234');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
    cy.get(".confirmation > .control").should("be.visible")
    .should("contain", "This is a required field.");
    /* ==== End Cypress Studio ==== */
  });
})