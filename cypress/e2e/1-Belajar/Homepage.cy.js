// cypress/e2e/homepage.cy.js
/// <reference types="cypress" />

import Navigation from "../../support/PageObject/Navigation";
import ProductLocator from "../../support/PageObject/ProductLocator";

const stuff = ProductLocator.getProduct_hoodie();

describe("Homepage Test Suite", () => {
  beforeEach(() => {
    Navigation.visitHomepage();
  });

  it("Buka halaman depan", () => {
    cy.get(".home-main > .content > .info").should("be.visible");
    cy.get(".content-heading > .title").should("be.visible");
  });

  it("Menampilkan hot selling pada halaman depan", () => {
    cy.get(".content-heading > .title").should("be.visible");
  });

  it("Dapat mencari product", () => {
    const productName = "t-shirt";
    cy.get("#search").type(productName);
    cy.get('button[title="Search"]').click();
    cy.url().should("include", "catalogsearch/result/");
    cy.contains("h1", `Search results for: '${productName}'`);
  });

  it("Menampilkan product populer pada halaman depan", () => {
    cy.get(stuff).should("have.length.above", 0);
  });

  it("Verifikasi banner iklan", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get(".home-erin > .content > .info").click();
    cy.get(":nth-child(5) > .filter-options-title").click();
    cy.get(
      '[href="https://magento.softwaretestingboard.com/collections/erin-recommends.html?color=60"] > .swatch-option'
    ).click();
    cy.get(":nth-child(2) > .product-item-info")
      .should("be.visible")
      .should("contain", "Diva Gym Tee");
  });
});
