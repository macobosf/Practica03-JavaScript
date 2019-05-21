imagenArray = [1, 2, 3, 4, 5];

var pos = 0;

function iniciar() {
    pos = 0;
    aleatorios();
    console.log(pos);
    validarPos();
}

function validarPos() {
    mostrar();
    console.log(imagen);
    if (pos == 4) {
        document.getElementById("siguiente").disabled = true;
        document.getElementById("anterior").disabled = false;
    } else if (pos == 0) {
        document.getElementById("siguiente").disabled = false;
        document.getElementById("anterior").disabled = true;
    } else {
        document.getElementById("siguiente").disabled = false;
        document.getElementById("anterior").disabled = false;
    }
}

function mostrar() {

    var direccion = "../images/" + imagenArray[pos] + ".jpg";
    console.log(direccion);
    document.getElementById("imagen").src = direccion;

}

function aleatorios() {
    for (var i = 0; i < 5; i++) {
        imagenArray[i] = Math.round(Math.random() * 9) + 1;
    }
    console.log(imagenArray);
}

function adelante() {
    pos++;
    console.log(pos);
    validarPos();
    mostrar();
}

function atras() {
    pos--;
    console.log(pos);
    validarPos();
    mostrar();
}