document.addEventListener("DOMContentLoaded", () => {
  const productId = new URLSearchParams(window.location.search).get("id");
  if (!productId) return;

  const product = products.find(p => p.id === parseInt(productId));
  if (!product) return;

  const alsoLikeRow = document.getElementById("also-like-row");
  if (!alsoLikeRow) return;

  const alsoLikeItems = products.filter(p => p.id !== product.id);
  const itemsPerPage = 3;

  // Setup smooth fade-in/fade-out with CSS
  alsoLikeRow.style.transition = "opacity 0.3s";

  function renderItems() {
    // Fade out
    alsoLikeRow.style.opacity = 0;

    setTimeout(() => {
      alsoLikeRow.innerHTML = "";

      const shuffled = [...alsoLikeItems].sort(() => 0.5 - Math.random());
      const itemsToShow = shuffled.slice(0, itemsPerPage);

      // Create flex container to center items
      const row = document.createElement("div");
      row.style.display = "flex";
      row.style.justifyContent = "center";
      row.style.flexWrap = "wrap";

      itemsToShow.forEach(item => {
        const col = document.createElement("div");
        col.style.flex = "0 0 33.33%";  // force 3 per row
        col.style.maxWidth = "33.33%";
        col.style.padding = "5px";
        col.style.boxSizing = "border-box";

        const card = document.createElement("div");
        card.className = "card h-100";
        card.style.cursor = "pointer";
        card.style.aspectRatio = "1 / 1"; // square card
        card.style.boxShadow = "0 0 15px rgba(0,0,0,0.4)";
        card.onclick = () => window.location.href = `product.html?id=${item.id}`;

        const imgWrapper = document.createElement("div");
        imgWrapper.style.aspectRatio = "1 / 1";
        imgWrapper.style.overflow = "hidden";

        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.name;
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";

        imgWrapper.appendChild(img);
        card.appendChild(imgWrapper);

        const body = document.createElement("div");
        body.className = "card-body text-center";

        const title = document.createElement("h6");
        title.className = "card-title";
        title.textContent = item.name;

        body.appendChild(title);
        card.appendChild(body);
        col.appendChild(card);
        row.appendChild(col);
      });

      alsoLikeRow.appendChild(row);
      alsoLikeRow.style.opacity = 1;
    }, 50);
  }

  renderItems();
  setInterval(renderItems, 10000); // 10 seconds rotation

  const alsoLikeContainer = document.getElementById("also-like-container");
  if (alsoLikeContainer) {
    const heading = alsoLikeContainer.querySelector("h5");
    if (heading) heading.classList.add("text-center");
  }
});
