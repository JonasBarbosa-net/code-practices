// em JS temos (for, while & do-while) que são estruturas denominadas de "Loops" 
// justamente por repetirem um pedaço de código diversas vezes enquanto uma determinada 
// condição for verdadeira (true). Quando essa condição for falsa (false) o loop para de repetir.



///// EXEMPLO DE USO DO LOOP (for) /////

    for (var numero = 0; numero <= 5; numero++) {
        console.log("o numero do contador é: " + numero)
    }

    //> INICIALIZAÇÃO: Aqui você pode declarar uma variavel que será usada como uma espécie de "contador"
    //> CONDIÇÃO: Enquanto essa condição for verdadeira, o loop continuará a executar, quando se torna falsa o loop é interrompido
    //> INCREMENTO: No 3º parâmetro desse loop, você atualiza o valor da variável do contador