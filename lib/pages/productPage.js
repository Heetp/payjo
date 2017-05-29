let EC = protractor.ExpectedConditions;

function ProductPage(){
  let productPageElements = {
    addToCart: element(by.buttonText("ADD TO CART"))
  }

  this.fClickAddToCart =()=>{
    productPageElements.addToCart.click().then(() => {
      browser.sleep(4000);
    });
  }
}

module.exports = new ProductPage();
