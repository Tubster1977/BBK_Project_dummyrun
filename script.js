let carts = document.querySelectorAll('.add-cart');

let products = [
  {
    name: 'Inquisitive Dunnock',
    tag: 'inquisitve dunnock',
    price: 30.0,
    inCart: 0
  },
  {
    name: 'Elegant Great Crested Grebe',
    tag: 'elegant great crested grebe',
    price: 30.0,
    inCart: 0
  },
  {
    name: 'Family of Mandarin Ducks',
    tag: 'family of mandarin ducks',
    price: 30.0,
    inCart: 0
  },
  {
    name: 'Turf Wars',
    tag: 'turf wars',
    price: 30.0,
    inCart: 0
  },
  {
    name: 'Hiding Pheasant',
    tag: 'hiding pheasant',
    price: 30.0,
    inCart: 0
  },
  {
    name: 'Cormorant Wings',
    tag: 'cormorant wings',
    price: 30.0,
    inCart: 0
  },
  {
    name: 'Mandarin Family Time',
    tag: 'mandarin family time',
    price: 30.0,
    inCart: 0
  },
  {
    name: 'Winter Goldfinch',
    tag: 'winter goldfinch',
    price: 30.0,
    inCart: 0
  },
  {
    name: 'Great Tit on the Feeder',
    tag: 'great tit on the feeder',
    price: 30.0,
    inCart: 0
  },
  {
    name: 'Poised Grey Heron',
    tag: 'poised grey heron',
    price: 30.0,
    inCart: 0
  },
]

for (let i=0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    cartNumbers(products[i]);
    totalCost(products[i])
  })
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');
  if(productNumbers) {
    document.querySelector('.cart span').textContent = productNumbers;
  }
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);
  if(productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1)
    document.querySelector('.cart span').textContent = productNumbers + 1;
  } else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1;
  }
  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  if(cartItems != null) {
    if(cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product
      }
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.InCart = 1;
    cartItems = {
      [product.tag]: product
    }
  }
  localStorage.setItem("productsInCart", JSON.stringify 
  (cartItems));
}

function totalCost(product) {
    // console.log("The product price is", product.price);
    let cartCost = localStorage.getItem("totalCost");

    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost);

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
    
}
  
function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productsContainer = document.querySelector(".products-section-container");
  
  console.log(cartItems);
  if(cartItems && productsContainer) {
    productsContainer.innerHTML = '';
    Object.values(cartItems).map(item => {
        productsContainer.innerHTML += `
        <div class="products">
        <ion-icon name="close-circle-outline"></ion-icon>
        <img src="/images/${item.tag}.jpg">
        <span>${item.name}</span>
        </div>
        `
    });
  }
  

}

onLoadCartNumbers();
displayCart();

