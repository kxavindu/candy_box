const cartContainer = document.getElementById("cart-container");
const cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty 😢</p>";
    return;
  }

  cartContainer.innerHTML = "";
  let grandTotal = 0;

  cart.forEach((item, index) => {
    const priceValue = parseFloat(item.price.replace('Rs.', '').trim());
    const total = priceValue * item.quantity;
    grandTotal += total;

    const card = document.createElement("div");
    card.className = "card mb-3 p-3 d-flex flex-column flex-md-row align-items-center";

    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" width="100" class="me-3 rounded">
      <div class="flex-grow-1">
        <h5>${item.name}</h5>
        ${item.customMessage ? `<p><strong>Customize:</strong> ${item.customMessage}</p>` : ""}
        <p>Quantity: ${item.quantity}</p>
        <p>Price per item: ${item.price}</p>
        <p>Total: Rs.${total}</p>
      </div>
      <button class="btn btn-danger remove-item mt-2 mt-md-0">Remove</button>
    `;

    // Remove item from cart
    card.querySelector(".remove-item").addEventListener("click", () => {
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    });

    cartContainer.appendChild(card);
  });

  const totalDiv = document.createElement("div");
  totalDiv.className = "text-end mt-3";
  totalDiv.innerHTML = `<h4>Grand Total: Rs.${grandTotal}</h4>`;
  cartContainer.appendChild(totalDiv);
}

// Checkout button
document.getElementById("checkout-btn").addEventListener("click", () => {
  if (cart.length === 0) return alert("Cart is empty!");
  alert("Checkout clicked! You can send order via WhatsApp next.");
});

renderCart();
