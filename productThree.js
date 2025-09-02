const cardsData = [
  { name: "Item 1", subtitle: "Card subtitle", price: "$25", image: "https://i.imgur.com/ZTkt4I5.jpg", link: "page1.html" },

];






const container = document.getElementById("cards-container");

cardsData.forEach(card => {
  const col = document.createElement("div");
  col.className = "col";

  const cardDiv = document.createElement("div");
  cardDiv.className = "card h-100";
  cardDiv.onclick = () => { window.location.href = card.link; }; // entire card clickable

  const img = document.createElement("img");
  img.src = card.image;
  img.className = "card-img-top";
  img.alt = card.name;

  const body = document.createElement("div");
  body.className = "card-body";

  const title = document.createElement("h5");
  title.className = "card-title";
  title.textContent = card.name;

  const subtitle = document.createElement("h6");
  subtitle.className = "card-subtitle mb-2";
  subtitle.textContent = card.subtitle;

  const text = document.createElement("p");
  text.className = "card-text";
  text.textContent = `Price: ${card.price}`;

  body.append(title, subtitle, text);
  cardDiv.append(img, body);
  col.appendChild(cardDiv);
  container.appendChild(col);
});

