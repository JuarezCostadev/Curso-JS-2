let tituloH1 = document.querySelector('h1');
tituloH1.innerHTML = 'Hora do Desafio';

function verificarClique(){
    console.log('foi clicado');
}
function verificarAlert(){
    alert('Eu amo JS!');
}
function verificarPrompt(){
    let cidade = prompt('Qual o nome da sua cidade?');
    alert(`Estive em ${cidade} e lembrei de você!`);
}
function verificarSoma(){
    let n1 = Number(prompt('Insira um valor: '));
    let n2 = Number(prompt('Insira outro valor: '));
    alert(` ${n1} + ${n2} = ${n1 + n2}`)
}
