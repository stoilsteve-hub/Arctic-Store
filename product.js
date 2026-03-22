// product.js
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

async function getProduct() {
    const res = await fetch('https://fakestoreapi.com/products/' + productId);
    const product = await res.json();
    
    document.getElementById('single-product-container').innerHTML = `
        <article class="product-card">
            <header>
                <h2>${product.title}</h2>
            </header>
            <img src="${product.image}" alt="${product.title}">
            <p class="price">${product.price}€</p>
            <p class="description">${product.description}</p>
            <button id="order-btn">Order</button>
        </article>
    `;
}

if (productId) {
    getProduct();
}
