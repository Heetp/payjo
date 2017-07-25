let EC = protractor.ExpectedConditions;

function CartPage(){
  let cartPageElements = {
    cartIcon: element(by.css("a[href='/viewcart?otracker=Cart_Icon_Click']")),
    cartItems: element.all(by.css("div[data-aid*='Cart-item-row_']")),
    removeItem: element.all(by.cssContainingText("span", "Remove"))
  }

  this.fClickAddToCartIcon =()=>{
    cartPageElements.cartIcon.click().then(()=>{
        browser.wait( EC.urlContains("Cart_Icon_Click"), 10000);
        browser.sleep(2000);
    })
  }

  this.fVerifyItemPresent = (text)=>{
    cartPageElements.cartItems.filter((ele)=>{
      return ele.isElementPresent(by.cssContainingText("a", text)).then((flag)=>{
          console.log(flag, text);
          return flag;
      });
    }).then((selectedItem)=>{
      expect(selectedItem.length).toBeGreaterThan(0, "Item was not added to the cart");
    });
  }

  this.fRemoveItems = ()=>{
    cartPageElements.removeItem.each((ele)=>{
      ele.click();
    });
  };
}

module.exports = new CartPage();
