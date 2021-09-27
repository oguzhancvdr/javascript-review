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
    products: [],
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
    addProduct: function (name, price) {
      let id;
      if (data.products.length > 0) {
        id = data.products[data.products.length - 1].id + 1;
      } else {
        id = 0;
      }

      const newProduct = new Product(id, name, parseFloat(price));
      data.products.push(newProduct);

      return newProduct;
    },
    getTotal: function(){
      let total = 0;
      data.products.forEach(function(item){
        total += item.price;
      })

      data.total = total;
      return data.total;
    }
  };
})();

// UI Controller
const UIController = (function () {
  const Selectors = {
    productList: "#item-list",
    addBtn: "#addBtn",
    productName: "#productName",
    productPrice: "#price",
    productCard: "#productCard",
    totalTL: "#total-tl",
    totalDollar: "#total-dollar",
  };

  return {
    createProductList: function (products) {
      let html = "";
      products.forEach((prd) => {
        html += `
            <tr>
              <td>${prd.id}</td>
              <td>${prd.name}</td>
              <td>$${prd.price}</td>
              <td class="text-right">
                <button type="submit" class="btn btn-outline-warning btn-sm">
                  <i class="far fa-edit"></i>
                </button>
              </td>
            </tr>          
          `;
      });
      document.querySelector(Selectors.productList).innerHTML = html;
    },
    getSelectors: function () {
      return Selectors;
    },
    addProductToList: function (prd) {
      document.querySelector(Selectors.productCard).style.display = "block";
      var item = `
        <tr>
          <td>${prd.id}</td>
          <td>${prd.name}</td>
          <td>$${prd.price}</td>
          <td class="text-right">
          <button type="submit" class="btn btn-outline-warning btn-sm">
            <i class="far fa-edit"></i>
          </button>
          </td>
        </tr>     
      `;
      document.querySelector(Selectors.productList).innerHTML += item;
    },
    clearInputs: function () {
      document.querySelector(Selectors.productName).value = "";
      document.querySelector(Selectors.productPrice).value = "";
    },
    hideProductCard: function () {
      document.querySelector(Selectors.productCard).style.display = "none";
    },
    showTotal: function(total){
      document.querySelector(Selectors.totalDollar).textContent = total;
      document.querySelector(Selectors.totalTL).textContent = (total * 8.35).toFixed(2);
    }
  };
})();

// App Controller
const App = (function (ProductCtrl, UICtrl) {
  const UISelectors = UICtrl.getSelectors();

  // load event listeners
  const loadEventListeners = function () {
    // * addProduct event
    document
      .querySelector(UISelectors.addBtn)
      .addEventListener("click", submitProduct);
  };
  const submitProduct = function (e) {
    const productName = document.querySelector(UISelectors.productName).value;
    const productPrice = document.querySelector(UISelectors.productPrice).value;
    if (productName !== "" && productPrice !== "") {
      // Add product
      const newProduct = ProductCtrl.addProduct(productName, productPrice);

      // add to list
      UICtrl.addProductToList(newProduct);

      // get total
      const total = ProductCtrl.getTotal();

      // show total
      UICtrl.showTotal(total);

      // clear inputs
      UICtrl.clearInputs();
    }

    e.preventDefault();
  };

  return {
    init: function () {
      const products = ProductCtrl.getProducts();

      if (products.length == 0) {
        UICtrl.hideProductCard();
      } else {
        UICtrl.createProductList(products);
      }
      // load event listeners
      loadEventListeners();
    },
  };
})(ProductController, UIController);

App.init();
