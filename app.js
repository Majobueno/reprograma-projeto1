
//para que eu solicite a biblioteca raline
const read = require('readline-sync')
//criar as constantes que linkam com os js na pasta controllers
const escolheCat = require('./controllers/buscarLivros')
const listaNaoLidos = require('./controllers/listarLivrosNaoLidos')
const livroOrdenado = require('./controllers/listarLivrosOrdenados')
const listaRecomendados = require('./controllers/listarRecomendados')

const resposta = read.question(`
====================== Menu ========================

1 - CATEGORIA: Buscar livro por categoria
2 - ORDENAR: Ordenar livros por quantidade de paginas
3 - RECOMENDADOS: Buscar livros recomendados
4 - LISTA DE DESEJO: Busca livros nao lidos

5 - SAIR

Digite um numero[1-5]: 
`)

//Quando a pessoa escolher a opção 1, eu quero que o js chame
// a funcão que vai estar no meu arquivo controllers/buscarLivros
switch (resposta) {
  case '1':
    //chamar a funcao buscarLivros
    escolheCat()
    break
  case '2':
console.log(`do mais curtinho pro mais cheio de letra:
`)    
    //aprensentar por pagina
console.table(livroOrdenado)
    break
    case '3':
console.log(`esses valem muito a pena Ler: 
`)      
    //chamar a liste de lidos e recomendados
console.table(listaRecomendados)
    break
    case '4':
console.log(`Esses faltam em nossa coleçao 
`)
    //chamar a funcao dos livros que não foram lidos
console.table(listaNaoLidos)
    break
  default:
    console.log('fim do algoritmo')
    break
}
