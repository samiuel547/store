// Cart logic using localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

// Show cart items on cart.html
if (document.title.includes('Cart')) {
  const itemsList = document.getElementById('cart-items');
  const totalSpan = document.getElementById('total');
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    itemsList.appendChild(li);
    total += item.price;
  });

  totalSpan.textContent = total;
}
