document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ alsoLike.js loaded");

  // 1. Check if products array is available
  if (typeof products === "undefined") {
    console.error("❌ products is undefined. Did you load products.js before this script?");
    return;
  }
  console.log("✅ products loaded:", products);

  // 2. Get current productId from URL
  const productId = new URLSearchParams(window.location.search).get("id");
  console.log("ℹ️ productId from URL:", productId);
  if (!productId) {
    console.warn("⚠️ No productId in URL (example: ?id=1)");
    return;
  }

  // 3. Find the current product
  const product = products.find(p => p.id === parseInt(productId));
  if (!product) {
    console.error("❌ No matching product found for id:", productId);
    return;
  }
  console.log("✅ Current product:", product);

  // 4. Get the "also like" row container
  const alsoLikeRow = document.getElementById("also-like-row");
  console.log("ℹ️ alsoLikeRow element:", alsoLikeRow);
  if (!alsoLikeRow) {
    console.error("❌ Missing #also-like-row element in HTML");
    return;
  }

  // 5. Prepare "also like" items
  const alsoLikeItems = products.filter(p => p.id !== product.id);
  const itemsPerPage = 3;

  // Smooth fade
  alsoLikeRow.style.transition = "opacity 0.3s";

  function renderItems() {
    console.log("🔄 Rendering new 'Also Like' items...");

    // Fade out
    alsoLikeRow.style.opacity = 0;

    setTimeout(() => {
      alsoLikeRow.innerHTML = "";
      const shuffled = [...alsoLikeItems].sort(() => 0.5 - Math.random());
      const itemsToShow = shuffled.slice(0, itemsPerPage);

      console.log("✅ Items to show:", itemsToShow);

      itemsToShow.forEach(item => {
        const col = document.createElement("div");
        col.className = "col-md-4 mb-3"; // Bootstrap grid column
        col.style.padding = "5px";

        const card = document.createElement("div");
        card.className = "card h-100";
        card.style.cursor = "pointer";
        card.style.aspectRatio = "1 / 1";
        card.style.boxShadow = "0 0 15px rgba(0,0,0,0.4)";
        card.onclick = () => {
          console.log(`➡️ Redirecting to product.html?id=${item.id}`);
          window.location.href = `product.html?id=${item.id}`;
        };

        const img = document.createElement("img");
        img.src = item.image;
        img.className = "card-img-top";
        img.alt = item.name;
        img.style.objectFit = "cover";
        img.style.height = "200px";

        const body = document.createElement("div");
        body.className = "card-body text-center";

        const title = document.createElement("h6");
        title.className = "card-title";
        title.textContent = item.name;

        body.appendChild(title);
        card.appendChild(img);
        card.appendChild(body);
        col.appendChild(card);
        alsoLikeRow.appendChild(col);
      });

      // Fade in
      alsoLikeRow.style.opacity = 1;
    }, 50);
  }

  // 6. Initial render + auto rotation
  renderItems();
  setInterval(renderItems, 10000);

  // 7. Center the heading if available
  const alsoLikeContainer = document.getElementById("also-like-container");
  if (alsoLikeContainer) {
    const heading = alsoLikeContainer.querySelector("h5");
    if (heading) {
      heading.classList.add("text-center");
      console.log("✅ Heading centered");
    }
  }
});
