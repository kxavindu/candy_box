document.addEventListener("DOMContentLoaded", () => {
  if (typeof products === "undefined") return; // safety check

  const productId = new URLSearchParams(window.location.search).get("id");
  if (!productId) return;

  const product = products.find(p => p.id === parseInt(productId));
  if (!product) return;

  const alsoLikeRow = document.getElementById("also-like-row");
  if (!alsoLikeRow) return;

  const alsoLikeItems = products.filter(p => p.id !== product.id);
  const itemsPerPage = 3;

  alsoLikeRow.style.transition = "opacity 0.3s";

  function renderItems() {
    alsoLikeRow.style.opacity = 0;

    setTimeout(() => {
      alsoLikeRow.innerHTML = "";
      const shuffled = [...alsoLikeItems].sort(() => 0.5 - Math.random());
      const itemsToShow = shuffled.slice(0, itemsPerPage);

      itemsToShow.forEach(item => {
        const col = document.createElement("div");
        col.className = "col"; // use Bootstrap flex
        col.style.padding = "5px";

        const card = document.createElement("div");
        card.className = "card h-100";
        card.style.cursor = "pointer";
        card.style.aspectRatio = "1 / 1";
        card.style.boxShadow = "0 0 15px rgba(0,0,0,0.4)";
        card.onclick = () => window.location.href = `product.html?id=${item.id}`;

        const img = document.createElement("img");
        img.src = item.image;
        img.className = "card-img-top";
        img.alt = item.name;
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";

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

      alsoLikeRow.style.opacity = 1;
    }, 50);
  }

  renderItems();
  setInterval(renderItems, 10000);

  const alsoLikeContainer = document.getElementById("also-like-container");
  if (alsoLikeContainer) {
    const heading = alsoLikeContainer.querySelector("h5");
    if (heading) heading.classList.add("text-center");
  }
});
