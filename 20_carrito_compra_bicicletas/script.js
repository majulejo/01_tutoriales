let cart = [];

const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const cartModal = document.getElementById("cart-modal");
const closeCart = document.getElementById("close-cart");
const checkoutButton = document.getElementById("checkout");
const totalElement = document.getElementById("total");
const purchaseModal = document.getElementById("purchase-modal");
const closePurchase = document.getElementById("close-purchase");

document.querySelectorAll(".add-to-cart").forEach((button) => {

    button.addEventListener("click", function (event) {
        event.preventDefault();
        const productCard = button.closest(".card-product");
        const productName = productCard.querySelector("h3").textContent;
        const productPrice = parseFloat(productCard.querySelector(".price").textContent.replace("$", ""));
        const product = {name: productName, price: productPrice};
        cart.push(product);
        updateCartCount();
        saveCart();
        updateTotal();
    });

});

function updateCartCount() {
    cartCount.textContent = cart.length;
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    displayCart();
    updateTotal();
    saveCart(); // Solo si usas localStorage
}

function displayCart() {
    cartItems.innerHTML = '';
    if (cart.length === 0) {
        const li = document.createElement("li");
        li.textContent = "El carrito está vacío";
        li.style.fontStyle = "italic";
        li.style.color = "#999";
        cartItems.appendChild(li);
    } else {
        cart.forEach((item, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span>${item.name} - $${item.price}</span>
                    <button onclick="removeFromCart(${index})" 
                            style="background: #e74c3c; 
                                   color: white; 
                                   border: none; 
                                   padding: 5px 10px; 
                                   border-radius: 5px; 
                                   cursor: pointer; 
                                   font-size: 12px;">
                        Eliminar
                    </button>
                </div>
            `;
            cartItems.appendChild(li);
        });
    }
}

// Alternativa: Botón con ícono X:
// Si prefieres un botón más pequeño con solo una "X":

// function displayCart() {
//     cartItems.innerHTML = '';
//     if (cart.length === 0) {
//         const li = document.createElement("li");
//         li.textContent = "El carrito está vacío";
//         li.style.fontStyle = "italic";
//         li.style.color = "#999";
//         cartItems.appendChild(li);
//     } else {
//         cart.forEach((item, index) => {
//             const li = document.createElement("li");
//             li.innerHTML = `
//                 <div style="display: flex; justify-content: space-between; align-items: center;">
//                     <span>${item.name} - $${item.price}</span>
//                     <button onclick="removeFromCart(${index})" 
//                             style="background: #f69858; 
//                                    color: white; 
//                                    border: none; 
//                                    padding: 3px 8px; 
//                                    border-radius: 50%; 
//                                    cursor: pointer; 
//                                    font-size: 12px;
//                                    width: 25px;
//                                    height: 25px;">
//                         ×
//                     </button>
//                 </div>
//             `;
//             cartItems.appendChild(li);
//         });
//     }
// }

function updateTotal() {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    totalElement.textContent =`Total: $${total}`;
}

document.getElementById("cart-icon").addEventListener('click', function() {

    cartModal.style.display = "flex";
    displayCart();
    updateTotal();
});

closeCart.addEventListener("click", function() {
    cartModal.style.display = "none";
});

checkoutButton.addEventListener('click', function() {

    purchaseModal.style.display = "flex";
    cart = [];
    updateCartCount();
    saveCart();
    updateTotal();
    cartModal.style.display = "none";
});

closePurchase.addEventListener('click', function() {

    purchaseModal.style.display = "none";
});

function loadCart() {
    const saveCart = localStorage.getItem("cart");
    if(saveCart) {
        cart = JSON.parse(saveCart);
        updateCartCount();
        updateTotal();
    }
}

loadCart();
