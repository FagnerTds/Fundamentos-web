let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
let mapa = document.querySelector('#mapa');

nome.style.width= '460px'
email.style.width = '460px'

function validaNome(){
    let textNome= document.querySelector('#textNome')
    if(nome.value.indexOf(' ') == -1 ){
        textNome.innerHTML ='Nome iválido'
        textNome.style.color= "red"
    }else{
        textNome.innerHTML= 'Nome Válido'
        textNome.style.color="green"
        nomeOk = true
    }
}

function validaEmail(){
    let textEmail = document.querySelector('#textEmail')
    if(email.value.indexOf("@") == -1 || email.value.indexOf('.')==-1 ){
        textEmail.innerHTML="Email Inválido"
        textEmail.style.color= "red"
    }else{
        textEmail.innerHTML= 'Nome Válido'
        textEmail.style.color="green"
        emailOk = true
    }
}

function validaAssunto(){
    let textAssunto = document.querySelector('#textAssunto')
    if(assunto.value.length >=100){
        textAssunto.innerHTML="o assunto deve ter no máximo 100 caracteres"
    textAssunto.style.color= "red"
    textAssunto.style.display = 'block'
    }else{
        textAssunto.style.display = 'none'
        assuntoOk=true
    }
    
}
function enviar(){
    if(nomeOk==true && emailOk==true && assuntoOk==true){
        alert('Formulário enviado')
    }else{
        alert('Formulário preenchido de forma incorreta')
    }
}

function mapaZoom(){
    mapa.style.width='800px'
    mapa.style.heigth='600px'
}

function mapaNormal(){
    mapa.style.width='400px'
    mapa.style.heigth='250px'

}