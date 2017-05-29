var loginPage = require("./../lib/pages/loginPage.js");
var productCategories = require("./../lib/pages/productCategories.js");
var searchBox = require("./../lib/pages/searchBox.js");
var mobilePage = require("./../lib/pages/mobilePage.js");
var productPage =  require("./../lib/pages/productPage.js")

describe("Flipkart E2E", () =>{
  it("Navigate", ()=>{
      loginPage.fNavigate();
  });

  it("Login", () => {
      loginPage.fLogin();
  });

  it("Verify top menu in the Home page - Electronics should be present alogwith other product categories", () =>{
      productCategories.fVerifyProductLists();
  });

  it("Navigate to Electronics-> Mobile", ()=>{
    productCategories.fNavigateSubCategory("ELECTRONICS", "Mobiles")
  });

  it("Search for mobile in the search bar", ()=>{
    searchBox.fSearchProduct("Mobiles");
  });

  it("select 4 GB RAM filter", () =>{
    mobilePage.filterSearch("RAM","4 GB");
  });

  it("Verify if 4GB is displayed in the description of the results", () =>{
    mobilePage.fVerifyResultDescription("4 GB RAM");
  });

  it("Type moto in the brand filter textbox - Motorola checkbox should appear.Select it", (done)=>{
    mobilePage.filterSeachTextbox("BRAND", "Moto").then(()=>{
    mobilePage.filterSearch("BRAND", "Motorola").then(()=>{
      done();
    });
    });
  });

  it("The Results should have only motorola phones",() =>{
    mobilePage.fVerifyResultTitleContains("Moto");
  });

  it("Clear the brand filter",(done)=> {
    mobilePage.fClearFilter("Motorola").then(done);
  });

  it("Open 'Moto G5 Plus (Lunar Grey, 32 GB)'",()=>{
    mobilePage.fOpenResultLink("Moto G5 Plus (Lunar Grey, 32 GB)");
  });

  it("Add the mobile to Cart",()=>{
    productPage.fClickAddToCart();
  });
});
