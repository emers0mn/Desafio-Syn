let enviar = document.getElementById('enviar');
let nomecompleto = document.getElementById('nomecompleto');
let aviso1 = document.getElementById('aviso1');
let aviso2 = document.getElementById('aviso2');
let email = document.getElementById('email');


enviar.addEventListener('click', error);

function error() {
    if (nomecompleto.value === ""){
        aviso1.innerText = '"Por favor, informe seu nome completo."' 
    }
    if (email.value === "") {
        aviso2.innerText = '"Por favor, informe seu melhor e-mail. "'        
    }
};