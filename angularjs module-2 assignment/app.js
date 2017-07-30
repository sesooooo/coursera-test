(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var tobuyitem = this;
  tobuyitem.items = ShoppingListCheckOffService.gettobuyItems();


tobuyitem.buyitem = function (itemIndex) {
    ShoppingListCheckOffService.checkoff(itemIndex);
    
  };

 /* tobuyitem.buyitem = function () {
    ShoppingListCheckOffService.addItem(tobuyitem.itemName, tobuyitem.itemQuantity);
  }*/
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtitem = this;

  boughtitem.items = ShoppingListCheckOffService.getboughtItems();

  // showList.removeItem = function (itemIndex) {
  //   ShoppingListCheckOffService.removeItem(itemIndex);
  // };
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var tobuyitems = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "chips",
    quantity: "20"
  },
  {
    name: "Chocolate",
    quantity: "5"
  }
];
  var boughtitems =[];

  service.checkoff = function (itemIdex) {
    boughtitems.push(tobuyitems[itemIdex]);
    tobuyitems.splice(itemIdex, 1);
  };

  service.gettobuyItems = function () {
    return tobuyitems;
  };

  service.getboughtItems = function () {
    return boughtitems;
  };
}

})();
