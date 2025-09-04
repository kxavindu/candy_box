document.addEventListener("DOMContentLoaded", () => {
  const productId = new URLSearchParams(window.location.search).get("id");
  if (!productId) return;

  const product = products.find(p => p.id === parseInt(productId));
  if (!product) return;

  const alsoLikeRow = document.getElementById("also-like-row");
  if (!alsoLikeRow) return;

  const alsoLikeItems = products.filter(p => p.id !== product.id);
  const itemsPerPage = 3;

  // Setup smooth fade-in/fade-out
  alsoLikeRow.style.transition = "opacity 0.3s";

  function renderItems() {
    alsoLikeRow.style.opacity = 0;

    setTimeout(() => {
      alsoLikeRow.innerHTML = "";

      const shuffled = [...alsoLikeItems].sort(() => 0.5 - Math.random());
      const itemsToShow = shuffled.slice(0, itemsPerPage);

      // Flex container to center cards
      const row = document.createElement("div");
      row.style.display = "flex";
      row.style.justifyContent = "center";
      row.style.flexWrap = "wrap";
      row.style.gap = "10px"; // space between cards

      itemsToShow.forEach(item => {
        const cardWrapper = document.createElement("div");
        cardWrapper.style.flex = "0 1 30%"; // shrink proportionally on mobile
        cardWrapper.style.maxWidth = "200px"; // optional max width
        cardWrapper.style.aspectRatio = "1 / 1"; // square
        cardWrapper.style.cursor = "pointer";

        cardWrapper.onclick = () => window.location.href = `product.html?id=${item.id}`;

        const card = document.createElement("div");
        card.style.width = "100%";
        card.style.height = "100%";
        card.style.backgroundImage = `url(${item.image})`;
        card.style.backgroundSize = "cover";
        card.style.backgroundPosition = "center";
        card.style.borderRadius = "10px";
        card.style.boxShadow = "0 0 15px rgba(0,0,0,0.4)";

        cardWrapper.appendChild(card);
        row.appendChild(cardWrapper);
      });

      alsoLikeRow.appendChild(row);
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
