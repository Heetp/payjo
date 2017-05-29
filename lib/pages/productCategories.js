let EC = protractor.ExpectedConditions;

function ProductCategories(){
  let productCategoriesElements = {
    productLists: element.all(by.css("li.Wbt_B2Qa2xUnKtJb3FX25"))
  }

  this.fNavigateSubCategory = (mainCategory, subCategory)=>{
    productCategoriesElements.productLists.filter((elm, index)=>{
      return elm.getText().then((text)=>{
        return text === mainCategory.toUpperCase();
      })
    }).then((selectedProduct)=>{
      if(selectedProduct[0]){
        browser.actions().mouseMove(selectedProduct[0]);
        element(by.linkText(subCategory)).click().then(() =>{
          browser.sleep(5000);
          browser.wait( EC.urlContains(subCategory), 10000);
        })
      }
    })
  }

  this.fVerifyProductLists = ()=>{
    let expectedList = ["ELECTRONICS", "APPLIANCES", "MEN", "WOMEN", "BABY & KIDS", "HOME & FURNITURE", "BOOKS & MORE", "OFFER ZONE"];
    productCategoriesElements.productLists.each((elm, index)=>{
      expect(elm.getText()).toEqual(expectedList[index]);
    })
  }
}

module.exports = new ProductCategories();
