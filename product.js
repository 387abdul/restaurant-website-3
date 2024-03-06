document.addEventListener("DOMContentLoaded", function () {
  // Fetch product details from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  // Find the product with the matching ID
  const product = products.find(item => item.id == productId);

  if (product) {
    // Populate product details on the page
    populateProductDetails(product);
  } else {
    // Handle case where the product is not found
    console.error("Product not found!");
  }
});

function populateProductDetails(product) {
  var productDetailsContainer = document.getElementById('productDetailsContainer');

  // Use inner HTML to directly render the product details
  productDetailsContainer.innerHTML = `
    <section class="container s-product my-5 pt-5">
      <div class="row mt-4">
        <div class="col-lg-6 col-md-12 col-12 images-prod">
          <img class="img-fluid w-80" id="Main-image" src="${product.image}" alt="" />
        </div>
        <div class="col-lg-5 col-md-12 col-12 ms-5 product-desc">
          <h1 class="text-light">${product.name}</h1>
          <h4><span class="text-light pt-3" id="total">Rs ${product.price.toFixed(2)}</span></h4>
          <p class="pt-3 pb-3">${product.description}</p>
          <div class="size-card">
            <div class="size">
              <button id="sub">-</button>
              <span id="number">1</span>
              <button id="add">+</button>
            </div>
            <div class="add-card">
              <button onclick="add_to_cart('${product.id}','${product.name}','${product.image}','${product.description}','${product.price}')">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  // Event listeners for increment and decrement buttons
  let subtractElement = document.getElementById("sub");
  let addElement = document.getElementById("add");
  let numberElement = document.getElementById("number");
  let totalPrice = document.getElementById("total");

  let currentNumber = 1;
  let currentPrice = product.price;

  addElement.addEventListener("click", () => {
    currentNumber += 1;
    numberElement.textContent = currentNumber;
    currentPrice += product.price;
    totalPrice.textContent = "Rs " + currentPrice.toFixed(2);
  });

  subtractElement.addEventListener("click", () => {
    if (currentNumber > 1) {
      currentNumber -= 1;
      numberElement.textContent = currentNumber;
      currentPrice -= product.price;
      totalPrice.textContent = "Rs " + currentPrice.toFixed(2);
    }
  });
}

// Function to simulate adding to cart (replace with your actual addToCart function)
function addToCart(productId) {
  // Your existing addToCart logic here
  console.log("Product added to cart:", productId);
}

// // Example product data
// const exampleProduct = {
//   id: 1,
//   image: "https://example.com/product.jpg",
//   name: "Example Product",
//   price: 10.99,
//   description: "Lorem ipsum dolor sit amet.",
// };

// Call populateProductDetails with the example product
populateProductDetails(exampleProduct);
calculate();