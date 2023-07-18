// setTimeout define o tempo necessário até que uma função seja executada.

setTimeout(() => {
    console.log("o tempo acabou!")
    OtempoAcabou()
}, 2000); // 1s = 1000 milissegundos


function OtempoAcabou() {
    console.log("A função foi executada com sucesso!")
}



function dataAtual() {
    var data = new Date()
    console.log(data.toLocaleString())
}
setInterval(dataAtual, 1000) //> a cada 1s
// executa a mesma função diversas vezes (loop), por um intervalo de tempo definido.