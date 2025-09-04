// searchbar.js
const sbSearchInput = document.getElementById("sb-searchInput");
const sbResultsBox = document.getElementById("sb-resultsBox");

sbSearchInput.addEventListener("input", () => {
  const query = sbSearchInput.value.toLowerCase();
  sbResultsBox.innerHTML = "";

  if(query) {
    // Filter products based on search query
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));

    if(filtered.length > 0) {
      filtered.forEach(p => {
        const div = document.createElement("div");
        div.classList.add("sb-result-item");
        div.innerHTML = `<img src="${p.image}" alt="${p.name}"> <span>${p.name}</span>`;

        // Redirect to product page on click
        div.addEventListener("click", () => {
          window.location.href = `product.html?id=${p.id}`;
        });

        sbResultsBox.appendChild(div);
      });
      sbResultsBox.style.display = "block";
    } else {
      sbResultsBox.style.display = "none";
    }
  } else {
    sbResultsBox.style.display = "none";
  }
});
