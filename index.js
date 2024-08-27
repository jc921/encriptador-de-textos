/* La logica a plantear en este proyecto es la siguiente;
problema:
pasar un texto en minusculas y sin acentos que digite el usuario
en un textArea a un pseudo lenguaje que convierta ese texto legible ingresado
en uno que sea dificil de leer.

solucion: para solucionar el problema planteado se hace uso de una funcion que 
nos proporciona javaScript llamada replace que permite mediante expreciones regulares remplazar una letra*/

// funcion que modifica el texto
function encriptar(){
    // declaracion de variables necesarias para hacer uso del DOM
    // cada una obtendra el id de los elemento necesarios del html
        let texto = document.getElementById("texto").value;
        let tituloMensaje = document.getElementById("titulo-mensaje");
        let parrafo = document.getElementById("parrafo");
        let picture = document.getElementById("picture");
    
        let textoCifrado = texto 
            .replace(/e/gi, "enter")
            .replace(/i/gi, "imes")
            .replace(/a/gi, "ai")
            .replace(/o/gi, "ober")
            .replace(/u/gi, "ufat");
    
        // validamos que el elemento html textarea no este vacio
        if (texto.length != 0){
            document.getElementById("texto").value = textoCifrado; // le asignamos el comportamiento de la funcion por medio del id 
            tituloMensaje.textContent = "Texto encriptado con exito"; // mostramos un mensaje 
            parrafo.textContent = ""; // limpiamos el parrafo
            picture.src = "./img/Muno.png";
    
        } else {
            picture.src = "./img/mdos.png";
            tituloMensaje.textContent = "Ningun mensaje fue encontrado";
            parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
            swal("Ooops!","debes ingresar algun texto","warning");
        }
    
    
    }
    
    // funcion encargada de desencriptar el texto
    function desencriptar(){
        // declaramos nuevamente las variables para este scope
        let texto = document.getElementById("texto").value;
        let tituloMensaje = document.getElementById("titulo-mensaje");
        let parrafo = document.getElementById("parrafo");
        let picture = document.getElementById("picture");
    
        let textoCifrado = texto
            .replace(/enter/gi, "e")
            .replace(/imes/gi, "i")
            .replace(/ai/gi, "a")
            .replace(/ober/gi, "o")
            .replace(/ufat/gi, "u");
    
        // validamos que el elemento html textarea no este vacio
        if (texto.length != 0){
            document.getElementById("texto").value = textoCifrado; // le asignamos el comportamiento de la funcion por medio del id 
            tituloMensaje.textContent = "Texto desencriptado con exito"; // mostramos un mensaje 
            parrafo.textContent = ""; // limpiamos el parrafo
            picture.src = "./img/desencriptado.png";
    
        } else {
            picture.src = "./img/mdos.png";
            tituloMensaje.textContent = "Ningun mensaje fue encontrado";
            parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
            swal("Ooops!","debes ingresar algun texto","warning");
        }
    
    
    }