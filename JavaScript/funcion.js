/**document.getElementById("Boton").onclick = function(){
    console.log("Capturamos el evento Click") 
    document.getElementById("demo").innerHTML = "Estamos Probando el primer evento en JS";
}


document.addEventListener("click", function() {
    console.log("Hola Mundo! con EventListerner"); 
    document.getElementById("demo").innerHTML = "Estamos Probando el primer evento en JS";
});
*/

document.getElementById("Boton").addEventListener("click", function() {
    console.log("Hola Mundo! con EventListerner"); 
    document.getElementById("demo").innerHTML = "Estamos Probando el primer evento en JS";
});

document.getElementById("Boton_Color").addEventListener("click", function() {
    document.body.style.backgroundColor = "#90EE90"; 
});

document.getElementById("Boton_default").addEventListener("click", function() {
    document.body.style.backgroundColor = "blue"; 
});

document.getElementById("Boton_Ocultar").addEventListener("click", function() {
    document.getElementById("demo").style.display = "none"; 
});

const collection = document.getElementsByClassName("prueba");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "green";
}

