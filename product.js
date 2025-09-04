


//Add new items and images 


const products = [
  { id: 1, name: "Item 1", price: "Rs.100.00", category: "apple", image: "web_images/idkwtf.jpg", details: "An apple is a sweet and juicy fruit. It grows on apple trees. Apples can be red, green, or yellow. They are round and crunchy. Eating apples is healthy because they are full of vitamins. Apples keep your body strong and your tummy happy. You can eat them raw or cooked." },
  { id: 2, name: "Item 2", price: "Rs.20.00", category: "apple", image: "web_images/rider.jpg", details: "Details about item 2" },
  { id: 3, name: "Item 3", price: "Rs.70.00", category: "apple", image: "web_images/sky.jpg", details: "Details about item 3" },
  { id: 4, name: "Item 4", price: "Rs.35.00", category: "orange", image: "web_images/sky.jpg", details: "Details about item 4" },
  { id: 5, name: "Item 5", price: "Rs.28.00", category: "orange", image: "web_images/idkwtf.jpg", details: "Details about item 5" },
  { id: 6, name: "Item 6", price: "Rs.40.00", category: "banana", image: "web_images/sky.jpg", details: "Details about item 6" },
  { id: 7, name: "Item 7", price: "Rs.22.00", category: "apple", image: "web_images/idkwtf.jpg", details: "Details about item 7" },
];





//change carousel images links too when update new itames @carouselImages.js

// UNIVERSAL BACK BUTTON
document.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.getElementById("back-btn");
  if (!backBtn) return;

  backBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Try to go to last saved page
    const lastPage = sessionStorage.getItem('lastPage');
    if (lastPage) {
      window.location.href = lastPage;
    } else {
      // fallback: if on a product page, go to category of that product
      const productId = new URLSearchParams(window.location.search).get("id");
      if (productId && typeof products !== "undefined") {
        const product = products.find(p => p.id === parseInt(productId));
        if (product) {
          window.location.href = `productTemplate.html?cat=${product.category}`;
          return;
        }
      }
      // fallback: just go back in history
      window.history.back();
    }
  });

  // Store current page as lastPage when clicking product cards
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      sessionStorage.setItem('lastPage', window.location.href);
    });
  });
});



