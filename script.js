const products = [
  {
    name: "Smartphone",
    category: "electronics",
    price: 299,
    rating: 4.5,
    img: "https://via.placeholder.com/200x150?text=Phone"
  },
  {
    name: "Laptop",
    category: "electronics",
    price: 899,
    rating: 4.8,
    img: "https://via.placeholder.com/200x150?text=Laptop"
  },
  {
    name: "Jeans",
    category: "clothing",
    price: 49,
    rating: 4.2,
    img: "https://via.placeholder.com/200x150?text=Jeans"
  },
  {
    name: "T-Shirt",
    category: "clothing",
    price: 25,
    rating: 3.9,
    img: "https://via.placeholder.com/200x150?text=T-Shirt"
  }
];

const productContainer = document.getElementById("productContainer");
const categoryFilter = document.getElementById("categoryFilter");
const sortOption = document.getElementById("sortOption");

function displayProducts(productList) {
  productContainer.innerHTML = "";
  productList.forEach(product => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <img src="${product.img}" loading="lazy" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p>Price: $${product.price}</p>
      <p>Rating: ${product.rating}</p>
    `;
    productContainer.appendChild(div);
  });
}

function filterAndSortProducts() {
  let filtered = [...products];

  const selectedCategory = categoryFilter.value;
  const selectedSort = sortOption.value;

  if (selectedCategory !== "all") {
    filtered = filtered.filter(product => product.category === selectedCategory);
  }

  if (selectedSort === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (selectedSort === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (selectedSort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(filtered);
}

categoryFilter.addEventListener("change", filterAndSortProducts);
sortOption.addEventListener("change", filterAndSortProducts);

window.onload = () => {
  displayProducts(products);
};