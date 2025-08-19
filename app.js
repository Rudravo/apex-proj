
let allProducts = [];


async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  return await res.json();
}


function displayResults(products) {
  const container = document.getElementById("product-container");
  container.innerHTML = "";

  if (products.length === 0) {
    container.innerHTML = "<p>No products found</p>";
    return;
  }

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}" loading="lazy">
      <h3>${product.title}</h3>
      <p><strong>$${product.price}</strong></p>
    `;

    card.addEventListener("click", () => {
      showProductDetail(product.id);
    });

    container.appendChild(card);
  });
}


function showProductDetail(id) {
  const product = allProducts.find(p => p.id === id);
  if (!product) return;


  history.pushState({ id }, "", `?id=${id}`);


  const container = document.getElementById("product-detail");
  container.innerHTML = `
    <img src="${product.image}" alt="${product.title}">
    <div class="detail-info">
      <h2>${product.title}</h2>
      <p><strong>Price:</strong> $${product.price}</p>
      <p><strong>Category:</strong> ${product.category}</p>
      <p>${product.description}</p>
    </div>
  `;

  
  document.getElementById("product-list-section").classList.add("hidden");
  document.getElementById("product-detail-section").classList.remove("hidden");
}


document.getElementById("backBtn").addEventListener("click", (e) => {
  e.preventDefault();
  history.pushState({}, "", "/");
  document.getElementById("product-detail-section").classList.add("hidden");
  document.getElementById("product-list-section").classList.remove("hidden");
});


document.getElementById("searchInput").addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const results = allProducts.filter(item =>
    item.title.toLowerCase().includes(query)
  );
  displayResults(results);
});


window.addEventListener("DOMContentLoaded", async () => {
  allProducts = await fetchProducts();
  displayResults(allProducts);

  
  const params = new URLSearchParams(window.location.search);
  if (params.has("id")) {
    showProductDetail(parseInt(params.get("id")));
  }
});


window.addEventListener("popstate", (event) => {
  const params = new URLSearchParams(window.location.search);
  if (params.has("id")) {
    showProductDetail(parseInt(params.get("id")));
  } else {
    document.getElementById("product-detail-section").classList.add("hidden");
    document.getElementById("product-list-section").classList.remove("hidden");
  }
});
