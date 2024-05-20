/// <reference types = "cypress" />

describe("HTTP Request", () => {
  it("GET", () => {
    cy.request(
      "GET",
      "https://magento.softwaretestingboard.com/rest/default/V1/products"
    )
      .its("status")
      .should("equal", 200);
  });

  it("POST", () => {
    cy.request({
      methood: "POST",
      url: "https://fakestoreapi.com/products",
      body: {
        title: "product A",
        price: 1000,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "T-Shirt",
      },
    })
      .its("status")
      .should("equal", 200);
  });

  it("PUT", () => {
    cy.request({
      methood: "PUT",
      url: "https://fakestoreapi.com/products/7",
      body: {
        title: "Test product - update",
        price: 5000,
        description: "Update product",
        image: "https://i.pravatar.cc",
        category: "Fashion",
      },
    })
      .its("status")
      .should("equal", 200);
  });

  it("Delete", () => {
    cy.request({
      methood: "DELETE",
      url: "https://fakestoreapi.com/products/6",
    })
      .its("status")
      .should("equal", 200);
  });
});
