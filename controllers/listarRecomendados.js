// Deverá listar livros que já foram lidos e que são recomendados
//criar constante livro que busque meus dados
const livro = require('../database')

console.log(`Esses eu já li e digo, leia: `)
//faço uma função para filtar os livros lidos e recomendados, guardo numa variável
const livrosRecomendados = livro.filter(livro => livro.leu === true && livro.recomenda === true)
console.table(livrosRecomendados)

module.exports = livrosRecomendados