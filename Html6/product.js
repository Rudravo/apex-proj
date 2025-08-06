const products = [
  { name: "Laptop", category: "tech", price: 800, rating: 4.5 },
  { name: "Headphones", category: "tech", price: 150, rating: 4.2 },
  { name: "Book: JS Basics", category: "books", price: 30, rating: 4.8 },
  { name: "Notebook", category: "books", price: 15, rating: 3.9 },
];

let currentProducts = [...products];

function renderProducts() {
  const list = document.getElementById("productList");
  list.innerHTML = "";
  currentProducts.forEach(p => {
    list.innerHTML += `<div>
      <h4>${p.name}</h4>
      <p>Category: ${p.category}</p>
      <p>Price: ₹${p.price}</p>
      <p>Rating: ${p.rating}</p>
    </div><hr>`;
  });
}

function filterProducts() {
  const cat = document.getElementById("categoryFilter").value;
  currentProducts = cat === "all" ? [...products] : products.filter(p => p.category === cat);
  sortProducts();
}

function sortProducts() {
  const sort = document.getElementById("sortOption").value;
  if (sort === "price") {
    currentProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "rating") {
    currentProducts.sort((a, b) => b.rating - a.rating);
  }
  renderProducts();
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
});
