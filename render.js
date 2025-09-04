// Get query param from URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function renderCategory() {
  const container = document.getElementById("cards-container");
  if (!container) return;

  const categoryParam = getQueryParam("cat");
  if (!categoryParam) return; // If no ?cat, do nothing

  // Filter products by category
  const filtered = products.filter(p => p.category.toLowerCase() === categoryParam.toLowerCase());




// Update page title dynamically
const titleElement = document.querySelector("h1.text-center");
if (titleElement) {
  titleElement.textContent = categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1);

  // Highlight the page title
  titleElement.style.backgroundColor = "#fefae0"; // pastel pink
  titleElement.style.color = "#333";             // text color for contrast
  titleElement.style.padding = "8px 20px";       // padding inside highlight
  titleElement.style.borderRadius = "6px";       // subtle rounding
  titleElement.style.display = "inline-block";   // fit highlight to text

  // Center the title on the page
  titleElement.style.textAlign = "center";       // center text inside h1
  titleElement.style.marginLeft = "auto";        // center h1 itself
  titleElement.style.marginRight = "auto";       // center h1 itself
  titleElement.style.display = "table";          // allows auto margins to work
}









  // Clear previous content
  container.innerHTML = "";

  // Generate cards
  filtered.forEach(product => {
    const col = document.createElement("div");
    col.className = "col";

    const card = document.createElement("div");
    card.className = "card h-100";
    card.style.cursor = "pointer";
    card.onclick = () => {
      window.location.href = `product.html?id=${product.id}`;
    };

    const img = document.createElement("img");
    img.src = product.image;
    img.className = "card-img-top";
    img.alt = product.name;

    const body = document.createElement("div");
    body.className = "card-body text-center";

    const title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = product.name;

    const price = document.createElement("p");
    price.className = "card-text";
    price.textContent = ` ${product.price}`;

    body.appendChild(title);
    body.appendChild(price);
    card.appendChild(img);
    card.appendChild(body);
    col.appendChild(card);
    container.appendChild(col);
  });
}

// Run on page load
document.addEventListener("DOMContentLoaded", renderCategory);


// Back button dynamic redirect
document.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.getElementById("back-btn");

  if (backBtn) {
    backBtn.addEventListener("click", () => {
      const productId = new URLSearchParams(window.location.search).get("id");
      const product = products.find(p => p.id === parseInt(productId));

      if (product) {
        window.location.href = `productTemplate.html?cat=${product.category}`;
      } else {
        window.history.back(); // fallback
      }
    });
  }
});

