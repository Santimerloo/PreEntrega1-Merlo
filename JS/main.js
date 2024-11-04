
const operaciones = ["Sumar", "Restar", "Multiplicar", "Calcular IMC"];
let opcionSeleccionada = 0;

//ELECCION

function mostrarMenu() {
    let mensaje = "Elige una opción:\n";
    for (let i = 0; i < operaciones.length; i++) {
        mensaje += `${i + 1}. ${operaciones[i]}\n`;
    }
    mensaje += "5. Salir";
    opcionSeleccionada = parseInt(prompt(mensaje));

    
    if (isNaN(opcionSeleccionada) || opcionSeleccionada < 1 || opcionSeleccionada > 5) {
        alert("Opción no válida. Por favor, elige una opción entre 1 y 5.");
        mostrarMenu();
    }
}

//funcion operaciones

function calcularOperacion(tipoOperacion) {
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Error: Ambos valores deben ser números.");
        return;
    }

    switch (tipoOperacion) {
        case "Sumar":
            resultado = num1 + num2;
            console.log(`Resultado de la suma: ${resultado}`);
            break;
        case "Restar":
            resultado = num1 - num2;
            console.log(`Resultado de la resta: ${resultado}`);
            break;
        case "Multiplicar":
            resultado = num1 * num2;
            console.log(`Resultado de la multiplicación: ${resultado}`);
            break;
    }
    alert(`El resultado de la operación es: ${resultado}`);
}

// ICM

function calcularIMC() {
    let peso = parseFloat(prompt("Ingresa tu peso en kilogramos:"));
    let altura = parseFloat(prompt("Ingresa tu altura en metros:"));
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Error: El peso y la altura deben ser números positivos.");
        return;
    }
    let imc = peso / (altura * altura);
    console.log(`Tu IMC es: ${imc.toFixed(2)}`);
    alert(`Tu IMC es: ${imc.toFixed(2)}`);
}

// SIMULADOR CALCULADORA

function iniciarSimulador() {
    mostrarMenu();
    while (opcionSeleccionada !== 5) { 
        switch (opcionSeleccionada) {
            case 1:
                calcularOperacion("Sumar");
                break;
            case 2:
                calcularOperacion("Restar");
                break;
            case 3:
                calcularOperacion("Multiplicar");
                break;
            case 4:
                calcularIMC();
                break;
            default:
                alert("Opción no válida. Por favor, intenta de nuevo.");
        }
        mostrarMenu(); 
    }
    alert("Gracias por usar el simulador. ¡Hasta pronto!");
}