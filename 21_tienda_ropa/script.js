const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const totalElemento = document.getElementById('total');

cargarEventListeners();

function cargarEventListeners() {
    elementos1.addEventListener('click' , comprarElemento);
    carrito.addEventListener('click' , eliminarElemento);
    vaciarCarritoBtn.addEventListener('click',  vaciarCarrito);

    // Agregar evento para mostrar/ocultar carrito
    document.getElementById('img-carrito').addEventListener('click', mostrarCarrito);
}


function comprarElemento(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}


function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: parseFloat(elemento.querySelector('.price').textContent.replace('$', '')), // Convertir a número
        id: elemento.querySelector('a').getAttribute('data-id'),
    }
    insertarCarrito(infoElemento);    
}


function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>
        <img src="${elemento.imagen}" width=100 />
    </td>
    <td>
        ${elemento.titulo}
    </td>
    <td>
        $${elemento.precio}
        </td>
    <td>
        <a href="#" class="borrar"  data-id="${elemento.id}">X </a>
    </td>
    `;

    lista.appendChild(row);
    actualizarTotal(); // Actualizar total después de agregar
}


function eliminarElemento(e) {
    e.preventDefault();
    if(e.target.classList.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
        actualizarTotal(); // Actualizar total después de eliminar
    }
}


function vaciarCarrito() {
    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    actualizarTotal(); // Actualizar total después de vaciar
    return false;
}

// NUEVA FUNCIÓN: Calcular y mostrar el total
function actualizarTotal() {
    const productos = lista.querySelectorAll('tr');
    let total = 0;
    
    productos.forEach(producto => {
        const precioTexto = producto.querySelector('td:nth-child(3)').textContent;
        const precio = parseFloat(precioTexto.replace('$', ''));
        total += precio;
    });
    
    if (totalElemento) {
        totalElemento.textContent = `Total: $${total.toFixed(2)}`;
    }
}

/// Función para mostrar/ocultar carrito
function mostrarCarrito(e) {
    e.preventDefault();
    e.stopPropagation();
    const carrito = document.getElementById('carrito');
    if (carrito.style.display === 'block') {
        carrito.style.display = 'none';
    } else {
        carrito.style.display = 'block';
    }
}

// Cerrar carrito al hacer clic fuera de él
document.addEventListener('click', function(e) {
    const carrito = document.getElementById('carrito');
    const imgCarrito = document.getElementById('img-carrito');
    
    if (!carrito.contains(e.target) && e.target !== imgCarrito && !imgCarrito.contains(e.target)) {
        carrito.style.display = 'none';
    }
});