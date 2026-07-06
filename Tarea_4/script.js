function calcular() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);

    let salida = "";

    for (let i = 1; i <= 5; i++) {
        if (i === 1) {
            salida += "1) Suma: " + (n1 + n2) + "<br>";
        } else if (i === 2) {
            salida += "2) Resta: " + (n1 - n2) + "<br>";
        } else if (i === 3) {
            salida += "3) Multiplicación: " + (n1 * n2) + "<br>";
        } else if (i === 4) {
            if (n2 !== 0) {
                salida += "4) División: " + (n1 / n2) + "<br>";
            } else {
                salida += "4) División: No se puede dividir para 0<br>";
            }
        } else if (i === 5) {
            salida += "5) Módulo: " + (n1 % n2) + "<br>";
        }
    }

    document.getElementById("resultado").innerHTML = salida;
}