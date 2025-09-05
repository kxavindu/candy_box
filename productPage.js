function renderProduct() {
  const productId = new URLSearchParams(window.location.search).get("id");
  if (!productId) return;

  const product = products.find(p => p.id === parseInt(productId));
  const container = document.getElementById("product-container");
  if (!product) {
    container.innerHTML = "<h2>Product not found</h2>";
    return;
  }

  // Carousel logic
  const images = window.carouselImages && window.carouselImages[product.id] && window.carouselImages[product.id].length
    ? window.carouselImages[product.id]
    : [product.image];

  let carouselHTML = '';
  if (images.length === 1) {
    carouselHTML = `<img src="${images[0]}" class="d-block w-100" alt="${product.name}">`;
  } else {
    const itemsHTML = images.map((img, i) => `
      <div class="carousel-item ${i === 0 ? 'active' : ''}">
        <img src="${img}" class="d-block w-100" alt="${product.name}">
      </div>
    `).join('');

    carouselHTML = `
      <div id="carousel-${product.id}" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="2000">
        <div class="carousel-inner">${itemsHTML}</div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel-${product.id}" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel-${product.id}" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    `;
  }

  // Render product card
  container.innerHTML = `
    <div class="container d-flex justify-content-center mt-5">
      <figure class="card card-product-grid card-lg p-3">
        <a href="#" class="img-wrap">${carouselHTML}</a>

        <figcaption class="info-wrap mt-3 text-center">
          <h4>${product.name}</h4>
          <p style="text-align:left;">${product.details.replace(/\n/g,"<br>")}</p>
        </figcaption>

        <div class="bottom-wrap-payment mt-3">
          <div class="d-flex justify-content-between align-items-start">
            <div>
              <span id="priceDisplay" style="font-weight:bold; font-size:1.2rem;">${product.price}</span><br>
              <span id="totalPrice" style="font-weight:bold; font-size:1rem; color:#555;">Total: ${product.price}</span>
            </div>
            <div class="quantity-controls d-flex align-items-center gap-2">
              <button id="decrease" class="btn btn-outline-secondary btn-sm">-</button>
              <span id="quantity" style="margin:0 8px;">1</span>
              <button id="increase" class="btn btn-outline-secondary btn-sm">+</button>
            </div>
          </div>

          <!-- Warning Text -->
          <p style="text-align:center; font-size:0.9rem; color:#555; margin-top:10px;">
            Clearly specify how the item should be customized <br> after selecting the quantity !<br><br>
            අයිතම ප්‍රමානය තෙරීමෙන් පසු customize කරගත යුතු ආකාරය පැහැදිලිව මෙහි සදහන් කරන්න !
          </p>

          <!-- Message Box -->
          <div style="display:flex; justify-content:center; margin-top:5px;">
            <textarea id="customMessage" placeholder="Type your customization here..." 
              style="width:70%; max-width:400px; min-height:8px; resize:none; padding:5px; background-color:#ffe5e5; border-radius:5px; overflow:hidden;"></textarea>
          </div>
        </div>

        <div class="bottom-wrap mt-3">
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

  // Auto-expand message box
  const messageBox = document.getElementById("customMessage");
  messageBox.addEventListener("input", () => {
    messageBox.style.height = "auto";
    messageBox.style.height = messageBox.scrollHeight + "px";
  });

  // Order Now logic
  const orderBtn = container.querySelector(".order-now");
  orderBtn.addEventListener("click", () => {
    const total = (priceValue * quantity).toFixed(2);
    const now = new Date();
    const dateTime = now.toLocaleString();
    const messageText = messageBox.value ? `\n*Customize:* ${messageBox.value}` : '';

    const message = `${dateTime}\n\n` +
                    `*🛍️ Order Catalog*\n\n` +
                    `*1️⃣ Item* - ${product.name}\n` +
                    `*2️⃣ Quantity* - ${quantity}\n` +
                    `*3️⃣ Price per item* - ${product.price}${messageText}\n\n` +
                    `*✨ Total: Rs.${total}*\n\n` +
                    `*Please confirm order ✅*`;

    const phoneNumber = "94771440701";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  });

  // Add to Cart logic with customization message
  const addToCartBtn = container.querySelector(".add-to-cart");
  addToCartBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingIndex = cart.findIndex(item => item.id === product.id && item.customMessage === messageBox.value);
    if (existingIndex !== -1) {
        cart[existingIndex].quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity,
            customMessage: messageBox.value
        });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    addToCartBtn.classList.add("added");
    setTimeout(() => addToCartBtn.classList.remove("added"), 800);
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
