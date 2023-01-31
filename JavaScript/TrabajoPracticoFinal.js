document.getElementById("Boton").addEventListener("click", function() {
    console.log("Hola Mundo! con EventListerner"); 
    document.getElementById("Cambio").innerHTML = "Matias Daniel Toledo Web Developer";
});

document.getElementById("Boton_Color").addEventListener("click", function() {
    document.body.style.backgroundColor = "#90EE90"; 
});

document.getElementById("Boton_default").addEventListener("click", function() {
    document.body.style.backgroundColor = "#ADD8E6"; 
});

document.getElementById("Boton_Ocultar").addEventListener("click", function() {
    document.getElementById("demo").style.display = "none"; 
});