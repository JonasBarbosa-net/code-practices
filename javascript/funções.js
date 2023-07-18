/*
funcoes são trechos de codigo que só são executados quando chamados/invocados.

    - funcão Void (Vazio)
    - função com paramentros
    - função Return
    - função Arrow 

    define variavel - var  let  const
*/




let valor = 20
function entrar() {
    console.log("Função Void foi chamada!")
    console.log(`O valor aplicado na variável é: ${valor}`)
}

entrar() // chamar/invocar a função




let DisplayNome = "Jonas"
function mostraNome(nomeDaPessoa) { // parâmetros só funcionam "dentro da função"
    console.log(nomeDaPessoa)
}

mostraNome("Olá " + DisplayNome + " é um prazer conhecê-lo!")




console.log("Vamos montar uma calculadora!")

let definirNumero1 = 30
let definirNumero2 = 30

function soma(numero1, numero2) {
    let resultado = numero1 + numero2
    console.log("A soma dos números foi: " + resultado)
}

soma(definirNumero1, definirNumero2)