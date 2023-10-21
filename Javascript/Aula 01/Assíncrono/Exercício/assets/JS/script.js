let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let feedback = document.querySelector('#textarea')
let nomeOk = false
let emailOk = false
let feedbackOk = false
let mapa = document.querySelector('#mapa')

function validaNome() {
    let txt = document.querySelector('#txtnome')
    if (nome.value.length < 3) {
        txt.innerHTML = 'No mínimo três caracteres'
        txt.style.color = '#f45572'
    } else {
        txt.innerHTML = 'Nome válido'
        txt.style.color = '#ffe4e1'
        nomeOk = true
    }
}

function validaEmail() {
    let txt = document.querySelector('#txtemail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txt.innerHTML = 'Formato de Email inválido'
        txt.style.color = '#f45572'
    } else {
        txt.innerHTML = 'Email válido'
        txt.style.color = '#ffe4e1'
        emailOk = true
    }
}

function validaFeedBack() {
    let txt = document.querySelector('#txtfeedback')
    if (feedback.value.length >= 300) {
        txt.innerHTML = 'Máximo 300 caracteres'
        txt.style.color = '#f45572'
        txt.style.display = 'inline-block'
    } else {
        txt.style.display = 'none'
        feedbackOk = true
    }
}

function enviar() {
    if (nomeOk == true && feedbackOk == true && emailOk == true) {
        alert('Registrado com sucesso !')
    } else {
        alert ('Preencha o formulário corretamente')
    }
}

function mapaZoom() {
    mapa.style.transition = '0.5s ease-in-out'
    mapa.style.width = '700px'
    mapa.style.height = '460px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}