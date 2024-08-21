const encriptar = document.getElementById("encriptar_btn");
const desencriptar = document.getElementById("desencriptar_btn");
const copy = document.getElementById("copy_btn");
const textarea = document.getElementById("encriptar_textarea"); // Textarea de ingreso de texto id
let resultado = "";
//-------------------Encriptar function--------------------------------
function encriptarTexto() {
    let texto = textarea.value;
    let textoEncriptado = "";

    for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i];
        switch (caracter) {
            case 'e':
                textoEncriptado += 'enter';
                break;
            case 'i':
                textoEncriptado += 'imes';
                break;
            case 'a':
                textoEncriptado += 'ai';
                break;
            case 'o':
                textoEncriptado += 'ober';
                break;
            case 'u':
                textoEncriptado += 'ufat';
                break;
            default:
                textoEncriptado += caracter;
        }
    }

    resultado = textoEncriptado;

    mostrarResultado();
}
//-------------------Desencriptar function--------------------------------

function desencriptarTexto() {
    let textoEncriptado = textarea.value;
    let textoDesencriptado = textoEncriptado;

    textoDesencriptado = textoDesencriptado.replace(/enter/g, 'e'); //global replace /g
    textoDesencriptado = textoDesencriptado.replace(/imes/g, 'i');
    textoDesencriptado = textoDesencriptado.replace(/ai/g, 'a');
    textoDesencriptado = textoDesencriptado.replace(/ober/g, 'o');
    textoDesencriptado = textoDesencriptado.replace(/ufat/g, 'u');

    resultado = textoDesencriptado;

    mostrarResultado();

}

//-------------------Copiar function--------------------------------
function copiarTexto() {
    navigator.clipboard.writeText(resultado);
    limpiarTextarea();
}

//-------------------mostrar en otro textarea -----------------
function mostrarResultado() {

    ocultarElementos();
    document.getElementById("output_msg").value = resultado;
}
//----------------limpiar textarea--------------
function limpiarTextarea() {
    document.getElementById("encriptar_textarea").value = "";
}
//-------------------ocultar elementos-----------------
function ocultarElementos() {
    document.getElementById("output_msg").style.display = "block";
    document.getElementById("copy_btn").style.display = "block";
    document.querySelector("h3").style.display = "none";
    document.getElementById("msg_outputArea").style.display = "none";
    document.getElementById("no_found_img").style.display = "none";
}
