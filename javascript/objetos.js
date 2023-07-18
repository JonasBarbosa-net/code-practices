var seuNome = "Jonas Barbosa"
var idade = "20 anos"
var estadoCivil = "Solteiro(a)"
var escolar = "Ensino fundamental Completo!"


const usuario = {
    nome: seuNome,
    idade: idade,
    estado: estadoCivil,

    escolaridade: {
        historico: escolar
    }
}

console.log("seu nome é: " + usuario.nome)
console.log(usuario.escolaridade.historico)