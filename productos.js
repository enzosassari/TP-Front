


let totalCompra = 0;

//------------------ INGRESO DE PRODUCTOS COMO OBJETOS------------------------------

const producto1 = {
    nombre: "Yerba Union",
    cantidad: 5,
    precio: 100
};

const producto2 = {
    nombre: "Dulce de batata",
    cantidad: 5,
    precio: 100
};

const producto3 = {
    nombre: "Vino Don nicanor",
    cantidad: 5,
    precio: 100
};

const producto4 = {
    nombre: "Avena Morixe",
    cantidad: 5,
    precio: 1500
};

const producto5 = {
    nombre: "Aceite Legitimo",
    cantidad: 5,
    precio: 1100
};

const producto6 = {
    nombre: "Papas Pringles",
    cantidad: 5,
    precio: 2800
};

const producto7 = {
    nombre: "Queso Muzzarella",
    cantidad: 5,
    precio: 1990
};

const producto8 = {
    nombre: "Azucar Ledesma",
    cantidad: 5,
    precio: 1230
};



// Función para descontar la cantidad y actualizar cantidad
function descontarCantidad(producto, inputId, stockId) {
    const cantidadIngresada = parseInt(document.getElementById(inputId).value);
        if (producto.cantidad >= cantidadIngresada && cantidadIngresada > 0 ) {
            producto.cantidad -= cantidadIngresada;
            totalCompra += (producto.precio * cantidadIngresada);
            document.querySelector("#totalCompra").innerHTML= ("El total de la compra es $ " + totalCompra); 
            document.getElementById(stockId).textContent = producto.cantidad;
            
        } else {
            alert(`No hay suficiente stock de ${producto.nombre}.`);
        } 
      
}

//Funcion para borrar los input
function borrarInputs(inputId){
    document.getElementById(inputId).value = " ";
}


document.getElementById("comprarButton1").addEventListener("click", function() {
    descontarCantidad(producto1, "cantidadInput1", "stockProducto1");
    borrarInputs("cantidadInput1");
});

document.getElementById("comprarButton2").addEventListener("click", function() {
    descontarCantidad(producto2, "cantidadInput2", "stockProducto2");
    borrarInputs("cantidadInput2");
});

document.getElementById("comprarButton3").addEventListener("click", function() {
    descontarCantidad(producto3, "cantidadInput3", "stockProducto3");
    borrarInputs("cantidadInput3");
});

document.getElementById("comprarButton4").addEventListener("click", function() {
    descontarCantidad(producto4, "cantidadInput4", "stockProducto4");
    borrarInputs("cantidadInput4");
});

document.getElementById("comprarButton5").addEventListener("click", function() {
    descontarCantidad(producto5, "cantidadInput5", "stockProducto5");
    borrarInputs("cantidadInput5");
});

document.getElementById("comprarButton6").addEventListener("click", function() {
    descontarCantidad(producto6, "cantidadInput6", "stockProducto6");
    borrarInputs("cantidadInput6");
});

document.getElementById("comprarButton7").addEventListener("click", function() {
    descontarCantidad(producto7, "cantidadInput7", "stockProducto7");
    borrarInputs("cantidadInput7");
});

document.getElementById("comprarButton8").addEventListener("click", function() {
    descontarCantidad(producto8, "cantidadInput8", "stockProducto8");
    borrarInputs("cantidadInput8");
});


//------------------------- MOSTRAR NOMBRES Y PRECIOS ------------------------

// Array que contiene todos los productos
const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8];

// Función para recorrer los objetos y actualizar los <p> con innerHTML
function mostrarNombrePrecio(arr) {
    for (let i = 0; i < arr.length; i++) {
        document.getElementById(`productoNombre${i+1}`).innerHTML = ` ${arr[i].nombre}`;
        document.getElementById(`productoPrecio${i+1}`).innerHTML = `Precio $ ${arr[i].precio}`;
    }
}
// Llamada a la función para mostrar los nombres y precios
mostrarNombrePrecio(productos);


