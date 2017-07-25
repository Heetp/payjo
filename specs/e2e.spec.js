let loginPage = require("./../lib/pages/loginPage.js");
let productCategories = require("./../lib/pages/productCategories.js");
let searchBox = require("./../lib/pages/searchBox.js");
let mobilePage = require("./../lib/pages/resultPage.js");
let productPage =  require("./../lib/pages/productPage.js")
let cartPage = require("./../lib/pages/cartPage.js");

describe("Flipkart E2E", () =>{
  let resultTitle;
  it("Navigate", ()=>{
      loginPage.fNavigate();
  });

  it("Login", () => {
      loginPage.fLogin();
  });

  it("Verify top menu in the Home page - Electronics should be present alogwith other product categories", () =>{
      productCategories.fVerifyProductLists();
  });

  it("Search for mobile in the search bar", ()=>{
    searchBox.fSearchProduct("Iphone 7");
  });

  it("Open the First Link -  The product should be opened in new page'",(done)=>{
    mobilePage.fClickFirstLink().then((text)=>{
      resultTitle = text;
      done();
    })
  });

  it("Add the mobile to Cart",()=>{
    productPage.fClickAddToCart();
  });

  it("close the product window", ()=>{
    productPage.close();
  });

  it("Click on Cart option", ()=>{
    cartPage.fClickAddToCartIcon();
  });

  it("Verify the item added",()=>{
    cartPage.fVerifyItemPresent(resultTitle);
  });

  it("Remove the items in cart",()=>{
    cartPage.fRemoveItems();
  });

  it("Logout", ()=>{
    loginPage.fLogout();
  });
});
