const cart = [];
const cartCount = document.getElementById('cart-count');
const cartPopup = document.getElementById('cart-popup');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    const name = btn.dataset.name;
    const price = parseFloat(btn.dataset.price);

    // Check if item already in cart
    const existing = cart.find(item => item.name === name);
    if (existing) {
      existing.qty++;
    } else {
      cart.push({ name, price, qty: 1 });
    }
    updateCartDisplay();
  });
});

document.getElementById('cart-btn').addEventListener('click', () => {
  cartPopup.classList.toggle('hidden');
});

document.getElementById('close-cart').addEventListener('click', () => {
  cartPopup.classList.add('hidden');
});

function updateCartDisplay() {
  cartItems.innerHTML = '';
  let total = 0;
  let count = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} x${item.qty} — $${item.price * item.qty}`;
    cartItems.appendChild(li);
    total += item.price * item.qty;
    count += item.qty;
  });

  cartCount.textContent = count;
  cartTotal.textContent = `Total: $${total}`;
}

const cartBtn = document.getElementById('cart-btn');
const closeCartBtn = document.getElementById('close-cart');

cartBtn.addEventListener('click', () => {
  cartPopup.classList.toggle('show'); // toggle the show class
});

closeCartBtn.addEventListener('click', () => {
  cartPopup.classList.remove('show');
});