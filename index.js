const pantalla = document.querySelector(".pantalla");

let pantallanumero1 = document.getElementById('#n1');
let pantallanumero2 = document.getElementById('#n2');
let pantallaresultado = document.getElementById('#resultado');

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
            operar()
        }
        if (boton.id == "igual") {
            resultado.textContent = eval(pantalla.textContent);
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
function operar() {
    n2.textContent = n1.textContent;
    n1.textContent = "";
}
