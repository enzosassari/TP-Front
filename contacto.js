
let nombre = document.getElementById("nombre"); //guardo el input en una variable
let apellido = document.getElementById("apellido");  //guardo el input en una variable
let email = document.getElementById("email"); 
let telefono = document.getElementById("telefono"); 
let caja = document.getElementById("caja"); 

let btnEnviar = document.getElementById("btnEnviar");
let informacion = [];

document.getElementById('myForm').addEventListener("submit", function(e) {
//btnEnviar.addEventListener("click", function(e) {    ///creamos una funcion anonima
    e.preventDefault();   //previene la accion del form de actualizacion de la pagina
    
    informacion[0] = nombre.value;  //accedo al valor del input, primera posicion
    informacion[1] = apellido.value; //accedo al valor del input , segunda posicion
    informacion[2] = email.value;
    informacion[3] = telefono.value;
    informacion[4] = caja.value;

    console.log (`Su nombre es ${informacion[0]} y su apellido es ${informacion[1]}`);  //muestra la informacion que se guardo, no es necesario 
    
   
    let blob = new Blob([ informacion ], { type: "text/plain;charset=utf-8"});  //informacion se lo pasamos como array por eso los corchetes
                  //[Enzo,Sassari]  forma de array
    saveAs(blob, "contacto.txt");  //usamos la libreria FileServer.js  ...ponemos blob en el txt
 
})
