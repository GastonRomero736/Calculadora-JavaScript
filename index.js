const pantalla = document.querySelector(".pantalla");

let pantallanumero1 = document.getElementById('n1');
let pantallanumero2 = document.getElementById('n2');
let pantallaresultado = document.getElementById('resultado');

const botones = document.querySelectorAll('.boton');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const botonApretado = boton.textContent;

        if (boton.id == "C") {
            n1.textContent = 0;
            n2.textContent = "";
            resultado.textContent = "";
            return;
        }
        if (boton.id == "sumar" || boton.id == "restar" || boton.id == "dividir" || boton.id == "multiplicar") {
            Operar()
        }
        if (boton.id == "igual") {
            const expresion = pantalla.textContent;

            const partes = expresion.split("/");
            if (partes.length > 1) {
                const divisor = parseFloat(partes[1].trim());
                const error = Validar(divisor);

                if (error) {
                    resultado.textContent = error;
                } else {
                    try {
                        resultado.textContent = eval(expresion);
                    } catch (e) {
                        resultado.textContent = "Error: Expresión inválida.";
                    }
                }
            } else {
                try {
                    resultado.textContent = eval(expresion);
                } catch (e) {
                    resultado.textContent = "Error: Expresión inválida.";
                }
            }
        }

        if (n1.textContent == 0) {
            n1.textContent = "";
            n1.textContent += botonApretado;
        }
        else {
            n1.textContent += botonApretado;
        }
    })
})
function Operar() {
    n2.textContent = n1.textContent;
    n1.textContent = "";
}

function Validar(divisor) {
    if (divisor == 0) {
        return "Error: No se puede dividir por cero";
    }
    else {
        return null;
    }
}

