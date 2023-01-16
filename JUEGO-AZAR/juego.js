
var number = document.getElementById("range").value;

function playNumber() {

    if (number <= 15) {
        console.log("El número ingresado tiene opciones de ganar");
        range = true;
    } else {
        console.log("El número ingresado no es favorable")
        range = false;
    }
    return range;
}

