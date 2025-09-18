/*Variables globales*/
let cantidad = 1;
let cart = [];

/*Carga de productos desde el archivo preoductos.json*/
async function loadProducts() {
  try {
    const response = await fetch('productos.json');
    const productos = await response.json();
    displayProductos(productos);
  } catch (error) {
    console.error('Error al cargar los productos:', error);
  }
}

/*Función para mostrar productos en el DOM*/
function displayProductos(productos) {
  const productList = document.querySelector('.cards');
  productos.forEach(product => {
    const article = document.createElement('article');
    article.classList.add('cards__card');
    article.innerHTML = `
        <div class="card__img">
            <img src="${product.imagen}" alt="${product.nombre}">
        </div>
        <div class="card__descripcion">
            <h4 class="descripcion__categoria">${product.categoria}</h4>
            <h2 class="descripcion__nombre">${product.nombre}</h2>
            <p class="descripcion__precio">$${product.precio}</p>
        </div>
        <button onclick="addToCart(${product.id}, this)" class="card__btn-shop">
            <i class="ri-shopping-cart-2-fill"></i>
            Añadir al Carrito
        </button>
        <div class="card__cantidad" id="card__cantidad-${product.id}">
            <button class="cantidad__btn-remove" onclick="decrementarProducto(${product.id})">
            <i class="ri-indeterminate-circle-line"></i>
        </button>

        <div class="cantidad__numero" id="cantidad-${product.id}" data-id="${product.id}">1
        </div>

        <button class="cantidad__btn-add" onclick="incrementarProducto(${product.id})"> <i class="ri-add-circle-line"></i>
        </button>
        </div>
        `;
    productList.appendChild(article);
  });
}

/*Función para añadir productos al carrrito*/

/*Función para incrementar la cantidad de un producto*/

/*Función para disminuir la cantidad de un producto*/

/*Función para eliminar  un producto del carrito*/

/*Función para mostrar los   productos del carrito*/

/*Función para mostrar el modal del pedido*/

/*Función para cerrar el modal del pedido y resetear el estado del carrito*/
loadProducts();
