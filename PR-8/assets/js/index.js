function displayProducts() {

  let productDiv = document.getElementById("product");
  if (!productDiv) return;

  let products = JSON.parse(localStorage.getItem("product")) || [];

  let searchInput = document.getElementById("search");
  let searchValue = searchInput ? searchInput.value.toLowerCase() : "";

  productDiv.innerHTML = "";

  let found = false;

  products.forEach((item, index) => {

    if (!item) return;

    if (!item.name.toLowerCase().includes(searchValue)) return;

    found = true; 

    productDiv.innerHTML += `
      <div class="col-md-4 mb-3">
        <div class="card shadow">
          <img src="${item.url}" class="card-img-top"
               onerror="this.src='https://via.placeholder.com/150'">
          <div class="card-body">
            <h5>${item.name}</h5>
            <p>₹ ${item.price}</p>

            <div class="mt-2">

  <button class="btn btn-success me-2"
    onclick="addToCart(${index})">
     Add to Cart
  </button>

  <button class="btn btn-warning me-2"
    onclick="editProduct(${index})">
     Edit
  </button>

  <button class="btn btn-danger"
    onclick="deleteProduct(${index})">
      Delete
  </button>

</div>

          </div>
        </div>
      </div>
    `;
  });

  if (!found) {
    productDiv.innerHTML = `
      <h4 class="text-center text-danger">No product found ❌</h4>
    `;
  }
}

function displayCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let cartDiv = document.getElementById("cart");
  if(!cartDiv) return;

  cartDiv.innerHTML = "";

  cart.forEach((item, index) => {
     if (!item) return;

     if (!item.qty) item.qty = 1;  

    cartDiv.innerHTML += `
      <div class="col-md-4 mb-3">
        <div class="card shadow">

          <img src="${item.url}" class="card-img-top"
               onerror="this.src='https://via.placeholder.com/150'">

          <div class="card-body">
            <h5>${item.name}</h5>
            <p class="fw-bold text-success">₹ ${item.price}</p>

          <div class="d-flex align-items-center mt-2">  

            <button class="btn btn-sm btn-danger"
              onclick="decreaseQty(${index})">
                -
            </button>

            <span class="mx-3 fw-bold">${item.qty}</span>

            <button class="btn btn-sm btn-success"
            onclick="increaseQty(${index})">
              +
            </button>

  </div>

</div>

        </div>
      </div>
    `;
  });
}

function addToCart(index) {
  let products = JSON.parse(localStorage.getItem("product")) || [];

  let product = products[index];

  if (!product) return; // 🔥 FIX

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let existing = cart.find(item => item && item.name === product.name);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to cart ✅");
}

function deleteProduct(index) {

  let products = JSON.parse(localStorage.getItem("product")) || [];

  products.splice(index, 1);

  localStorage.setItem("product", JSON.stringify(products));

  displayProducts();
}

function editProduct(index) {

  localStorage.setItem("editIndex", index);

  window.location.href = "index.html";
}

function increaseQty(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (!cart[index].qty) cart[index].qty = 1;

  cart[index].qty += 1;

  localStorage.setItem("cart", JSON.stringify(cart));

  displayCart();
}

function decreaseQty(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (!cart[index].qty) cart[index].qty = 1;

  cart[index].qty -= 1;

  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  displayCart();
}

function goToCart() {
  window.location.href = "cart.html";
}

let form = document.getElementById("productForm");

if (form) {

  let editIndex = localStorage.getItem("editIndex");

  if (editIndex !== null) {
    let products = JSON.parse(localStorage.getItem("product")) || [];
    let product = products[editIndex];

    if (product) {
      document.getElementById("name").value = product.name;
      document.getElementById("url").value = product.url;
      document.getElementById("price").value = product.price;
    }
  }

  form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let url = document.getElementById("url").value;
    let price = document.getElementById("price").value;

    let product = { name, url, price };

    let products = JSON.parse(localStorage.getItem("product")) || [];

    if (editIndex !== null) {
      products[editIndex] = product;
      localStorage.removeItem("editIndex");
    } else {
      products.push(product);
    }

    localStorage.setItem("product", JSON.stringify(products));

    form.reset();

    window.location.href = "product.html";
  });
}

let searchBox = document.getElementById("search");

if (searchBox) {
  searchBox.addEventListener("input", function () {
    displayProducts();
  });
}

displayProducts();
displayCart();