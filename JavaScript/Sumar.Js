document.getElementById("sumar").addEventListener("click", function(){
    
    let numeroA = document.getElementById("Num1").value;
    console.log ("El valor de Num1 es: " +numeroA);
    
    let numeroB = document.getElementById("Num2").value;
    console.log ("El valor de Num2 es: " +numeroB);
    
    let Resultado = sumar(numeroA , numeroB);
    console.log ("El Resultado de la suma es: " +Resultado);

    document.getElementById("resultado").innerHTML = Resultado;
    document.getElementById("Contenedor_resultado").style.display = "Block"
})

function sumar(a,b){
    return a+b
}