let nome = document.getElementById('nome');
let email = document.getElementById('email');
let assunto = document.querySelector('#assunto');

function olaMundo() {
    alert("Olá Mundo !!")
}

function verificarCampos() {
    if (nome.value == "" || email.value == "" || assunto.value == "") {
        alert('Os campos são obrigatórios !')
    }
    else { alert('Os campos foram validados com sucesso !') }
}