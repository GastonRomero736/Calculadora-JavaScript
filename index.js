const pantalla = document.querySelector(".pantalla");

const pantallanumero = document.getElementById('#n1');
const pantallanumero2 = document.getElementById('#n2');
const pantallaresultado = document.getElementById('#resultado');



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

        if (boton.id == "sumar") {

            n2.textContent = n1.textContent;
            n1.textContent = null;

        }
        if (boton.id == "restar") {

            n2.textContent = n1.textContent;
            n1.textContent = null;

        }
        if (boton.id == "dividir") {
            
            n2.textContent = n1.textContent;
            n1.textContent = null;

        }
        if (boton.id == "multiplicar") {

            n2.textContent = n1.textContent;
            n1.textContent = null;

        }


        if (boton.id == "igual") {
          
            
                
                resultado.textContent = eval(pantalla.textContent);
                
          
            
                
            return;
        }



        if (n1.textContent == 0) {
            n1.textContent = botonApretado;

        }
        else {

            n1.textContent += botonApretado;

        }

        

    })


})

