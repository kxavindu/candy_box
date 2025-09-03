const searchInput = document.getElementById('search-input');
const cardsContainer = document.getElementById('cards-container');

function renderProducts(productsList) {
    cardsContainer.innerHTML = '';

    productsList.forEach(product => {
        // Highlight matched text
        const filter = searchInput.value.toLowerCase();
        const nameLower = product.name.toLowerCase();
        const startIndex = nameLower.indexOf(filter);
        let highlightedName = product.name;

        if (startIndex !== -1 && filter !== '') {
            highlightedName =
                product.name.substring(0, startIndex) +
                '<span class="highlight">' +
                product.name.substring(startIndex, startIndex + filter.length) +
                '</span>' +
                product.name.substring(startIndex + filter.length);
        }

        const col = document.createElement('div');
        col.className = 'col-6 col-md-6 col-lg-4';
        col.innerHTML = `
            <div class="card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body text-center">
                    <h5 class="card-title">${highlightedName}</h5>
                    <p class="card-text">${product.details}</p>
                    <a href="productTemplate.html?cat=${product.category}" class="btn btn-buy">Show More</a>
                </div>
            </div>
        `;
        cardsContainer.appendChild(col);
    });
}

// Initial render
renderProducts(products);

// Search input listener
searchInput.addEventListener('input', () => {
    const filter = searchInput.value.trim().toLowerCase();
    if (filter === '') {
        renderProducts(products); // Show all if empty
    } else {
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(filter)
        );
        renderProducts(filteredProducts);
    }
});
