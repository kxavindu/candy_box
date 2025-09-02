


const cardsData = [
  { name: "Item 1", subtitle: "Card subtitle", price: "$25", image: "https://i.imgur.com/ZTkt4I5.jpg", link: "page1.html" },
  { name: "Item 2", subtitle: "Card subtitle", price: "$30", image: "https://i.imgur.com/ZTkt4I5.jpg", link: "page2.html" },
  { name: "Item 3", subtitle: "Card subtitle", price: "$20", image: "https://i.imgur.com/ZTkt4I5.jpg", link: "page3.html" },
  { name: "Item 4", subtitle: "Card subtitle", price: "$35", image: "https://i.imgur.com/ZTkt4I5.jpg", link: "page4.html" },
  { name: "Item 5", subtitle: "Card subtitle", price: "$28", image: "https://i.imgur.com/ZTkt4I5.jpg", link: "page5.html" },
  { name: "Item 6", subtitle: "Card subtitle", price: "$40", image: "https://i.imgur.com/ZTkt4I5.jpg", link: "page6.html" },
  { name: "Item 7", subtitle: "Card subtitle", price: "$22", image: "https://i.imgur.com/ZTkt4I5.jpg", link: "page7.html" },
  { name: "Item 8", subtitle: "Card subtitle", price: "$32", image: "https://i.imgur.com/ZTkt4I5.jpg", link: "page8.html" },
  { name: "Item 9", subtitle: "Card subtitle", price: "$27", image: "https://i.imgur.com/ZTkt4I5.jpg", link: "page9.html" }
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

