

let producto = [{
    nombre: "arroz",
    cantidad: 5,
    precio: 1500
},
{
    nombre: "papa",
    cantidad: 20,
    precio: 4000
},
{
    nombre: "limon",
    cantidad: 40,
    precio: 2000,
}];


let btnArroz = document.getElementById("btnArroz"); 
let btnPapa = document.getElementById("btnPapa");
let btnLimon = document.getElementById("btnLimon");

var inputValor = document.getElementById("inputArroz").value;
var cantidadADescontar = parseInt(inputValor);

btnArroz.addEventListener("click", ()=>{
    //if (inputValor<=producto[0].cantidad){
        producto[0].cantidad -= cantidadADescontar ;
        document.querySelector(".arroz").innerHTML=`El producto ${producto[0].nombre} tiene un stock de ${producto[0].cantidad}`; 
    //}else{
     //   alert("ERROR! STOCK INSUFICIENTE");
   // }
});

btnPapa.addEventListener("click", ()=>{
    producto[1].cantidad -- ;
    document.querySelector(".papa").innerHTML=`El producto ${producto[1].nombre} tiene un stock de ${producto[1].cantidad}`; 
 });
 
 
 btnLimon.addEventListener("click", ()=>{
    producto[2].cantidad -- ;
    document.querySelector(".limon").innerHTML=`El producto ${producto[2].nombre} tiene un stock de ${producto[2].cantidad}`; 
 });
 
 
  



document.querySelector("input").innerHTML="";


