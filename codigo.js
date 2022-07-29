function calcular() {
    var b = document.getElementById("num1").value;
    var a = document.getElementById("num2").value;
    var r = a * b;
    alert("El area del triangulo es : " + r);
    
};


function calc() {
    var b = document.getElementById("num01").value;
    var a = document.getElementById("num02").value;
    var r = a * b;
    alert("El area del triangulo es : " + r)
};
function ratio() {
    const pi = Math.PI;
    var radio = document.getElementById("num001").value;

    var r = pi * Math.pow(radio, 2);
    alert("El area del círculo es : " + r.toFixed(2))
};

function diasemana() {

    var valor = document.getElementById("numero").value;

    if (valor == 1) {
        alert(" 1 corresponde al día: Lunes");
    } else if (valor == 2) {
        alert("El número 2 corresponde al día: Martes");
    } else if (valor == 3) {
        alert("El número 3 corresponde al día: Miercoles");
    } else if (valor == 4) {
        alert("El número 4 corresponde al día: Jueves");
    } else if (valor == 5) {
        alert("El número 5 corresponde al día: Viernes");
    } else if (valor == 6) {
        alert("El número 6 corresponde al día: Sabado");
    } else if (valor == 7) {
        alert("El número 7 corresponde al día: Domingo");
    } else {
        alert("El número es incorrecto")
    }
};

function calificaciones() {

    var nota = document.getElementById("nota").value;
    if (nota >= 90 || nota == 100) {
        alert("Su calificación es A");
    } else if (nota = 80 || nota == 89) {
        alert("Su calificación es B");
    } else if (nota = 70 || nota == 79) {
        alert("Su calificación es C");
    } else if (nota = 60 || nota == 69) {
        alert("Su calificación es B");

    } else if (nota <= 59) {
        alert("Su calificación es F")
    }

};

function edades() {
    var e1 = document.getElementById("edad1").value;
    var e2 = document.getElementById("edad2").value;

    if (e1 > e2) {
        alert(+e1 + " años es mayor que " + e2);
    } else if (e1 < e2) {
        alert(+e1 + " años es menor que " + e2);
    } else if (e1 == e2) {
        alert(+e1 + "  es igual a " + e2)
};

}

function calcularFactorial() {

var numero = document.getElementById("factor").value;
var resultado =1;

for(var i=1; i<=numero; i++) {
    resultado=resultado*i;
}
alert("El factorial del numero es: " + resultado.toFixed(2))

}
