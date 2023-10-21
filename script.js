const leftContainer = document.querySelector(".left-section");
const rightContainer = document.querySelector(".right-section");

document.addEventListener("DOMContentLoaded", getProducts);

async function getProducts() {
  try {
    const GET_PRODUCTS = "https://dummyjson.com/products?limit=100";
    const result = await fetch(GET_PRODUCTS);
    const products = await result.json();
    renderLeftSection(products.products);
  } catch {
    throw Error("service fail");
  }
}

function renderLeftSection(products) {
  leftContainer.innerHTML = products
    .map((product) => {
      return `<div class='product-item' onclick='onProductClick(${JSON.stringify(
        product
      )})'>
    <h3>${product.title}</h3>
    <p>${product.category}</p>
  </div>`;
    })
    .join("");
}

function onProductClick(product) {
  rightContainer.innerHTML = `<h1>${product.title}</h1>
  <p>${product.description}</p>
  <img class='product-img' src='${product.thumbnail}' alt='${product.title}'/>
  `;
}
