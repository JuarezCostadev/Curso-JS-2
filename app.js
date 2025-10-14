let listaDeNumerosSorteados = [];
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMensagenInicial (){
    exibirTexto('h1', 'Número Secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 10:'); 
}    

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTexto('h1', 'ACERTOU!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let textoComTp = `VOCÊ DESCOBRIU O NÚMERO SECRETO COM ${tentativas} ${palavraTentativa}!!`;
        exibirTexto('p', textoComTp);
        document.getElementById('reiniciar').removeAttribute('disabled');
        tentativas += 1;
} else{
    if(chute > numeroSecreto){
        exibirTexto('p', 'O número secreto é menor!');
    } else{
        exibirTexto('p', 'O número secreto é maior!');
    }
    tentativas++;
    limparCampo()
}

}

function numeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * 4 + 1);
        if(listaDeNumerosSorteados.includes(numeroEscolhido)){
            return numeroAleatorio();
        } else{
            listaDeNumerosSorteados.push(numeroEscolhido);
            return numeroEscolhido;
        }}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';

}

function reiniciarJogo() {

    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagenInicial ();
    document.getElementById('reiniciar').setAttribute('disabled', true)

}

exibirMensagenInicial ();
