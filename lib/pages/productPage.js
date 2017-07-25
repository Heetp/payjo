let EC = protractor.ExpectedConditions;

function ProductPage(){
  let productPageElements = {
    addToCart: element(by.buttonText("ADD TO CART"))
  }

  this.fClickAddToCart =()=>{
    productPageElements.addToCart.click();
  }

  this.close = ()=>{
    return browser.getAllWindowHandles().then((handles)=>{
      return browser.close().then(()=>{
          return browser.switchTo().window(handles[0]).then(() =>{
            browser.sleep(2000);
          });
      });
    });
  }
}

module.exports = new ProductPage();
