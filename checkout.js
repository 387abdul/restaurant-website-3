let shoppingCart = document.getElementById("shopping_cart");
let label = document.getElementById("label");
let basket = JSON.parse(localStorage.getItem("products")) || [];

let calculate = () => {
  let cart_icon = document.getElementById("cart_amount");
  cart_icon.innerHTML = basket.length;
};

let updateCart = () => {
  window.location.reload();
};
let generate_cart_item = () => {
  if (basket.length !== 0) {
    // shoppingCart.innerHTML = "hello";
    return (shoppingCart.innerHTML = basket
      .map((x) => {
        let { id, name, image, description, price } = x;

        return `
      <div class="container mt-5 mb-5">
      <div class="row mt-5">
          <div class="col-lg-4 md-12 col-sm-12 checkProductimg">
              <img src="${image}"
                  alt="" width="60%">
          </div>
          <div class="col-lg-8 col-sm-12 md-12 mt-4 checkProducttext">
              <h1>${name}</h1>
              <p>${description}</p>
              <p>$${price} </p>
              <button onclick=removeFromBasket(${id}) type="button" class="btn btn-danger  removeBtn float-right">Remove from Basket</button>
          </div>
      </div>
  </div>`;
      })
      .join(""));
  } else {
    shoppingCart.innerHTML = `
    <div class="container text-center mt-5 mb-5" style="height:30vh;">
    <h1>Your Cart is Empty!</h1>
    <button type="submit" onclick="window.location.href='home.html'" class="btn btn-danger ">Go Shopping Now</button>
   </div>`;
  }
};

calculate();

generate_cart_item();

let removeFromBasket = (id) => {
  // alert(id)
  basket = basket.filter((x) => {
    return x.id != id;
  });
  localStorage.setItem("products", JSON.stringify(basket)); // Fixed syntax error
  calculate();
  generate_cart_item();
  updateCart();
};

let Total_amount = () => {
  if (basket.length != 0) {
    let total_amount = 0;
    basket.map((item) => {
      total_amount += item.item * item.price;
    });

    label.innerHTML = `
    <hr>
  <div class="checkout_area text-center mt-5 mb-5">
    <h3 >Total Amount is : <span>$${total_amount}</span></h3>
    <button type="button" class="btn btn-danger  removeBtn float-right mt-3" onclick="alert('Your Do Not Have Enough Money To Buy This Make Some Money First And Than Enjoy Chill bites.')" >Checkout</button>
  </div>`;
  } else {
    label.innerHTML = `
    <hr>
    <div class="checkout_area text-center mt-5 mb-5">
    <h3>Total Amount : $0.00 </h3>
    <button type="button" class="btn btn-danger  removeBtn float-right mt-3" onclick="alert('Your Do Not Order Anything.')">Checkout</button>
  </div>`;
  }
  calculate();
  generate_cart_item();
};

Total_amount();
