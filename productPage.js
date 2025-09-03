function renderProduct() {
  const productId = new URLSearchParams(window.location.search).get("id");
  if (!productId) return;

  const product = products.find(p => p.id === parseInt(productId));
  const container = document.getElementById("product-container");
  if (!product) {
    container.innerHTML = "<h2>Product not found</h2>";
    return;
  }

  // Render product HTML
  container.innerHTML = `
    <div class="container d-flex justify-content-center mt-5">
      <figure class="card card-product-grid card-lg p-3">
        <a href="#" class="img-wrap">
          <img src="${product.image}" alt="${product.name}">
        </a>
        <figcaption class="info-wrap mt-3">
          <div>
            <h4>${product.name}</h4>
            <p>${product.details}</p>
          </div>
        </figcaption>

        <div class="bottom-wrap-payment mt-3">
          <div class="d-flex justify-content-between align-items-center">
            <span id="priceDisplay" style="font-weight:bold; font-size:1.2rem;">${product.price}</span>
            <div class="quantity-controls">
              <button id="decrease" class="btn btn-outline-secondary btn-sm">-</button>
              <span id="quantity" style="margin:0 8px;">1</span>
              <button id="increase" class="btn btn-outline-secondary btn-sm">+</button>
            </div>
          </div>
          <div>
            <span id="totalPrice" style="font-weight:bold; font-size:1rem; color:#555;">Total: ${product.price}</span>
          </div>
        </div>

        <div class="bottom-wrap mt-3">
          <p style="text-align:center; font-size:0.9rem; color:#555; margin-bottom:8px;">
            Please select quantity before ordering
          </p>
          <div class="d-flex justify-content-between">
            <a href="#" class="btn btn-primary order-now">Order Now</a>
            <a href="#" class="btn btn-warning add-to-cart">
              <i class="fa fa-cart-plus me-2"></i> Add to Cart
            </a>
          </div>
        </div>
      </figure>
    </div>
  `;

  // Quantity logic
  let quantity = 1;
  const qtyDisplay = document.getElementById("quantity");
  const totalPriceDisplay = document.getElementById("totalPrice");
  const priceValue = parseFloat(product.price.replace('Rs.', '').trim());

  function updateTotal() {
    const total = (priceValue * quantity).toFixed(2);
    totalPriceDisplay.textContent = `Total: Rs.${total}`;
  }

  document.getElementById("increase").addEventListener("click", () => {
    quantity++;
    qtyDisplay.textContent = quantity;
    updateTotal();
  });

  document.getElementById("decrease").addEventListener("click", () => {
    if (quantity > 1) quantity--;
    qtyDisplay.textContent = quantity;
    updateTotal();
  });

  updateTotal();

  // Order Now logic
  const orderBtn = container.querySelector(".order-now");
  orderBtn.addEventListener("click", () => {
    const total = (priceValue * quantity).toFixed(2);
    const now = new Date();
    const dateTime = now.toLocaleString();

    const message = `${dateTime}\n\n` +
                    `*🛍️ Order Catalog*\n\n` +
                    `*1️⃣ Item* - ${product.name}\n` +
                    `*2️⃣ Quantity* - ${quantity}\n` +
                    `*3️⃣ Price per item* - ${product.price}\n\n` +
                    `*✨ Total: Rs.${total}*\n\n` +
                    `*Please confirm order ✅*`;

    const phoneNumber = "94771440701";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  });

  // Add to Cart logic with color flash
  const addToCartBtn = container.querySelector(".add-to-cart");

  addToCartBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingIndex = cart.findIndex(item => item.id === product.id);

    if (existingIndex !== -1) {
        cart[existingIndex].quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // Flash color to green briefly
    addToCartBtn.classList.add("added");
    setTimeout(() => {
      addToCartBtn.classList.remove("added");
    }, 800); // 0.8 seconds
  });

  // Back button logic
  const backBtn = document.getElementById("back-btn");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      window.location.href = `productTemplate.html?cat=${product.category}`;
    });
  }
}

document.addEventListener("DOMContentLoaded", renderProduct);
