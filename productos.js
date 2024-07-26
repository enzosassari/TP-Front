

let producto = [{
    nombre: "arroz",
    cantidad: 10,
    precio: 100
},
{
    nombre: "papa",
    cantidad: 10,
    precio: 200
},
{
    nombre: "limon",
    cantidad: 10,
    precio: 300,
}];


let btnArroz = document.getElementById("btnArroz"); 
let btnPapa = document.getElementById("btnPapa");
let btnLimon = document.getElementById("btnLimon");

let totalCompra = 0;

btnArroz.addEventListener("click", ()=>{
    let cantidadArroz = document.getElementById("inputArroz").value;
    if (cantidadArroz<=producto[0].cantidad){
        producto[0].cantidad -= cantidadArroz ;
        totalCompra += (producto[0].precio * cantidadArroz);
        document.querySelector(".arroz").innerHTML=`El producto ${producto[0].nombre} tiene un stock de ${producto[0].cantidad}`;  
        document.querySelector("#totalCompra").innerHTML= ("El total de la compra es : " + totalCompra); 
    }else{
        alert("ERROR! STOCK INSUFICIENTE");
    }
});


btnPapa.addEventListener("click", ()=>{
    let cantidadPapa = document.getElementById("inputPapa").value;
    if (cantidadPapa<=producto[1].cantidad){
        producto[1].cantidad -= cantidadPapa ;
        totalCompra += (producto[1].precio * cantidadPapa);
        document.querySelector(".papa").innerHTML=`El producto ${producto[1].nombre} tiene un stock de ${producto[1].cantidad}`;
        document.querySelector("#totalCompra").innerHTML= ("El total de la compra es : " + totalCompra);   
    }else{
        alert("ERROR! STOCK INSUFICIENTE");
    }
 });
 
 
 btnLimon.addEventListener("click", ()=>{
    let cantidadLimon = document.getElementById("inputLimon").value;
    if (cantidadLimon<=producto[2].cantidad){
        producto[2].cantidad -= cantidadLimon ;
        totalCompra += (producto[2].precio * cantidadLimon);
        document.querySelector(".limon").innerHTML=`El producto ${producto[2].nombre} tiene un stock de ${producto[2].cantidad}`;  
        document.querySelector("#totalCompra").innerHTML= ("El total de la compra es : " + totalCompra); 
    }else{
        alert("ERROR! STOCK INSUFICIENTE");
    }
 });
 
 



