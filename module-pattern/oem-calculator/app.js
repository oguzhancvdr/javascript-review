// Storage Controller
const StorageController = (function () {})();

// Product Controller
const ProductController = (function () {
  // * private
  class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }

  const data = {
    products: [
      { id: 0, name: "Screen", price: 200 },
      { id: 1, name: "RAM", price: 150 },
      { id: 2, name: "Keyboard", price: 15 },
    ],
    selectedProduct: null,
    total: 0,
  };

  // * public
  return {
    getProducts: function () {
      return data.products;
    },

    getData: function () {
      return data;
    },
  };
})();

// UI Controller
const UIController = (function () {})();

// App Controller
const App = (function (ProductCtrl, UICtrl) {



  return {
    init : function(){
      console.log("starting app...");
      const products = ProductCtrl.getProducts();
      // UICtrl.createProductList(products);
    }
  }
})(
  ProductController,
  UIController
);

App.init();
