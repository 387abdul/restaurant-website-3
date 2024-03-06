const shop = document.getElementById("show-cart");

let basket = JSON.parse(localStorage.getItem('products')) || []

let generateProduct = () => {
  shop.innerHTML = products.map((x) => {
    let { id, name, price, description, image } = x;
    return `
      <div class="card mt-5" style="width: 18rem;" id="product-id-${id}">
        <img src="${image}" class="card-img-top" alt="..."  onclick="redirectToProductPage('${id}')">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${description}</p>
          <p class="card-price">$${price}</p>
          <a href="#" class="btn btn-danger" onclick="add_to_cart('${id}','${name}','${image}','${description}','${price}')">Add to Bucket</a>
        </div>
      </div>
    `;
  }).join('');
}

let redirectToProductPage = (id) => {
  window.location.href = `product.html?id=${id}`;
};

let add_to_cart = (id,name,image,description,price) =>{
  // console.log(id);
  basket.push({
    id:id,
    item:1,
    image:image,
    description:description,
    name:name,
    price:price
  })

  // Update localStorage with the updated basket array
  localStorage.setItem('products', JSON.stringify(basket))


  calculate()
}

let calculate = () =>{
  let cart_icon = document.getElementById('cart_amount')
  let cart_amount = basket.length

  cart_icon.innerHTML = cart_amount

}
calculate();
generateProduct();
