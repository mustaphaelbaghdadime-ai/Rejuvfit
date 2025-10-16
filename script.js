let cartCount = 0;
const cartCountEl = document.getElementById("cart-count");
const buttons = document.querySelectorAll(".add-to-cart");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    cartCount++;
    cartCountEl.textContent = cartCount;
    alert(`${btn.dataset.name} added to cart!`);
  });
});

document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thanks for reaching out! We’ll get back to you soon.");
  e.target.reset();
});