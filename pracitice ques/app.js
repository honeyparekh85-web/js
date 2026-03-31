// selecting product list container
const productList = document.getElementById("product-list");

// function to show products on page
function displayProducts() {

    products.forEach((item) => {

        // create product card
        const card = document.createElement("div");
        card.className = "product";

        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <div class="price-row">
                <span>₹${item.price}</span>
                <button>Add</button>
            </div>
        `;

        productList.appendChild(card);
    });
}

// calling function
displayProducts();
