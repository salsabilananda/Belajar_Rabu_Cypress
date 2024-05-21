/// <reference types = "cypress" />


describe("Post method", () => {
  it("POST", () => {
    const requestBody = {
      id: 32,
      title: "Test post",
      price: 15000,
      category: "Fashion",
      description: "lorem ipsium",
    };

    cy.request({
      methodd: "POST",
      url: "https://fakestoreapi.com/products",
      body: requestBody,
    }).then((response) => {
        expect(response.status).to.eq(200)
            expect(response.body.);
    });
  });
});
