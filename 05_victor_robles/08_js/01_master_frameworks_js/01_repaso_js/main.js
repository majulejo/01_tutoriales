/*var nombre = "José Antonio";
var altura = "172";

var concatenacion = nombre + " " + altura;

var datos = document.getElementById("datos");
datos.innerHTML = `
<h1>Soy la caja de datos</h1>    
<h2>Mi  nombre es :${nombre}<h2>
<h3>Mido: ${altura} cm</h3>
`;
if(altura <=170){
    datos.innerHTML += `<h1>    Eres bajito.    </h1>    `;
}else{
    datos.innerHTML += `<h1>    Eres más alto de lo esperado.    </h1>    `;
}

for(var i = 10;i<=25; i++){
    //bloque de instrucciones
    datos.innerHTML += "<h2>Estamos en el año: "+i;
}
    */

function MuestraMiNombre(nombre, altura){
    var misDatos =  `
<h1>Soy la caja de datos</h1>    
<h2>Mi  nombre es :${nombre}<h2>
<h3>Mido: ${altura} cm</h3>
`;
return misDatos;
}
function imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre("José Antonio Márquez", 167);
}
imprimir();

var nombres = ["Victor", "José", "Pablo"]
document.writeln('<h1>Listado de Nombres</h1>');
/*
for(i = 0; i < nombres.length; i++){
    document.writeln(nombres[i] + "<br>");
}
    */
   /*
   nombres.forEach(function(nombre){
    document.writeln(nombre +  "<br>");   
   });
   */
   nombres.forEach((nombre) => {
    document.writeln(nombre +  "<br>");   
   });