// describe("template spec", () => {
//   it("User Registration", () => {
//     cy.visit("https://magento.softwaretestingboard.com/");
//     /* ==== Generated with Cypress Studio ==== */
//     cy.get(".panel > .header > :nth-child(3) > a")
//       .should("be.visible")
//       .should("contain", "Sign In") //assertion 1
//       .click();
//     cy.get("#firstname").type("Coba2");
//     cy.get("#lastname").type("Test");
//     cy.get("#email_address").type("coba3@coba.com");
//     cy.get("#password").type("Coba123!");
//     cy.get("#password-confirmation").type("Coba123!");
//     cy.get(
//       "#form-validate > .actions-toolbar > div.primary > .action > span"
//     ).click();
//     cy.get(".message-success")
//       .should("be.visible")
//       .should("contain", "Thank you for registering with Main Website Store."); //assertion 2
//     cy.get("#maincontent").should("be.visible").should("contain", "My Account"); //assertion 3
//     /* ==== End Cypress Studio ==== */
//   });
// });

// describe('template spec', () => {

//   })

//   /* ==== Test Created with Cypress Studio ==== */
//   it('TC - 01 Create Account Menggunakan Username dan Password Valid POSITIVE', function() {
//     /* ==== Generated with Cypress Studio ==== */
//     cy.visit('https://magento.softwaretestingboard.com');
//     cy.get('.panel > .header > :nth-child(3) > a').should("be.visible").should("contain", "Create an Account").click();
//     cy.get('#firstname').type('Coba2');
//     cy.get('#lastname').type('apaaja');
//     cy.get('#email_address').type('coba2998@gmail.com');
//     cy.get('#password').type('coba123456@');
//     cy.get('#password-confirmation').type('coba123456@');
//     cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
//     cy.get('.message-success').should("be.visible").should("contain", "Thank you for registering with Main Website Store"); //Exspected result
//     cy.get('#maincontent').should("be.visible").should("contain", "My Account"); // beralih ke halaman My Account
//     /* ==== End Cypress Studio ==== */
//   });

// Hook Pre-Condition Masuk Kehalaman Create Account
describe("User Masuk Ke Halaman Create Account", () => {
  beforeEach(() => {
    cy.visit("https://magento.softwaretestingboard.com");
    cy.clearAllCookies();
  });

  // TC - 02 User Create Account tanpa memasukan password dan muncul error notif
  it("TC - 02 Create Account tanpa memasukan password", function () {
    cy.get(".panel > .header > :nth-child(3) > a")
      .should("be.visible")
      .should("contain", "Create an Account")
      .click();
    cy.get("#firstname").type("coba2");
    cy.get("#lastname").type("apaja");
    cy.get("#email_address").type("coba343@gmail.com");
    cy.get(
      "#form-validate > .actions-toolbar > div.primary > .action > span"
    ).click();
    cy.get("#password-error")
      .should("be.visible")
      .should("contain", "This is a required field"); //Menampilkan pesan password
  });
});
