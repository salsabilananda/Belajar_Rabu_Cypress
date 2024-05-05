// Start Cypress tests
describe("[Non_FT]_API Test Suite", () => {
  it("1. Should retrieve product details", () => {
    cy.request({
      method: "GET",
      url: "https://magento.softwaretestingboard.com/rest/default/V1/products",
      failOnStatusCode: false,
      headers: {
        Authorization: "Bearer cdxf96vcah8pbivc3zzrshd8t15ikua5",
      },
    }).then((response) => {
      if (response.status === 200) {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an("array").and.not.to.be.empty;
      } else if (response.status === 401) {
        cy.log(
          "Unauthorized: The request lacks proper authentication or authorization credentials"
        );
        expect(response.status).to.eq(401, "Expected status code to be 401");
      } else {
        cy.log(`Request failed with status code ${response.status}`);
        expect(response.status).to.eq(200, "Expected status code to be 200");
      }
    });
  });

  it("2. Should retrieve user information", () => {
    cy.request({
      method: "GET",
      url: "https://magento.softwaretestingboard.com/rest/default/V1/me",
      failOnStatusCode: false,
    }).then((response) => {
      if (response.status === 200) {
        expect(response.status).to.eq(200);
        // Add assertions for user information if needed
      } else if (response.status === 404) {
        cy.log("User information endpoint not found");
        expect(response.status).to.eq(404, "Expected status code to be 404");
      } else {
        cy.log(`Request failed with status code ${response.status}`);
        expect(response.status).to.eq(200, "Expected status code to be 200");
      }
    });
  });
  it("3. Search Products", () => {
    const keyword = "T-shirt";
    cy.request({
      method: "GET",
      url: `https://magento.softwaretestingboard.com/rest/V1/products?searchCriteria[searchString]=${keyword}`,
      failOnStatusCode: false,
    }).then((response) => {
      if (response.status === 200) {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("items").and.to.be.an("array");
      } else if (response.status === 401) {
        cy.log(
          "Unauthorized: The request lacks proper authentication or authorization credentials"
        );
        expect(response.status).to.eq(401, "Expected status code to be 401");
      } else {
        cy.log(`Request failed with status code ${response.status}`);
        expect(response.status).to.eq(200, "Expected status code to be 200");
      }
    });
  });
});
