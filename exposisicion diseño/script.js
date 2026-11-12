
var numero = 0;

function mostrarSeccion() {

    var secciones = document.getElementsByClassName("diapositiva");

    for (var i = 0; i < secciones.length; i++) {
        secciones[i].style.display = "none";
    }

    
    secciones[numero].style.display = "block";

 
    document.getElementById("contador").innerHTML =
        + (numero + 1) + " / " + secciones.length;

}
function siguiente() {

    var secciones = document.getElementsByClassName("diapositiva");

    if (numero < secciones.length - 1) {
        numero++;
        mostrarSeccion();
    }

}
function anterior() {

    if (numero > 0) {
        numero--;
        mostrarSeccion();
    }

}

mostrarSeccion();
