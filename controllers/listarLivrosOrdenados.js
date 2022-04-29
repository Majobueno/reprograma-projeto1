// Deverá retornar todos os livros ordenados de forma crescente por quantidade de páginas. 
const livro = require('../database')

const livroOrdenado = livro.sort(function(a, b){ return a.paginas - b.paginas})
    console.log('Aqui estão os livros, por números de páginas: ')
    console.table(livroOrdenado)

module.exports = livroOrdenado