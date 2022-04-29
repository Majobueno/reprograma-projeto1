// Deverá listar livros que ainda não foram lidos

const livro = require("../database")

console.log(`Lista de desejos: `)
const listaDesejos = livro.filter(livro => { if(livro.leu === false) { 
    return livro.nome
    }
})


console.table(listaDesejos)

module.exports = listaDesejos