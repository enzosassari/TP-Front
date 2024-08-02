
/** ------------------------------------- HOME ----------------------------------------------------------------------------- */

/**document.querySelector(".ofertas .card p") /**para seleccionar elemento al que voy a hacer referencia*/


const productoOferta1 = {
    nombre: "Yerba Mañanita",
    precio: 3000
};

const productoOferta2 = {
    nombre: "Galletitas Rumba",
    precio: 900
};

const productoOferta3 = {
    nombre: "Cerveza Quilmes",
    precio: 1500
};

const productoOferta4 = {
    nombre: "Dulce de leche",
    precio: 2000
};

//------------------------- MOSTRAR NOMBRES Y PRECIOS ------------------------

// Array que contiene todos los productos
const productos = [productoOferta1, productoOferta2, productoOferta3, productoOferta4];

// Función para recorrer los objetos y actualizar los <p> con innerHTML
function mostrarNombrePrecio(arr) {
    for (let i = 0; i < arr.length; i++) {
        document.getElementById(`productoNombre${i+1}`).innerHTML = ` ${arr[i].nombre}`;
        document.getElementById(`productoPrecio${i+1}`).innerHTML = `Precio $ ${arr[i].precio}`;
    }
}
// Llamada a la función para mostrar los nombres y precios
mostrarNombrePrecio(productos);
