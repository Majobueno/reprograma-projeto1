
const livro = require('../database')
const read = require('readline-sync')




const escolheCat = () => {
    console.log(`Muito bem, as categorias no momento são:`)
    // vou fazer outro menu e ofecer as categorias que temos na biblioteca
    let categorias = ['biologia', 'ciencias sociais', 'culinaria', 'economia', 'tecnologia'],
    cat = read.keyInSelect(categorias, `qual categoria gostaria de ver? `);
   
   
    // aqui vou criar uma variável, com uma função para filtrar por categoria
    const categoria = livro.filter(livro => livro.categoria === categorias[cat])
   
    // outra para listar os livros, caso cancele, 
    // preciso primeiro fazer um array do nomes pra, então
    const listaLivros = livro.map(item => {return item.nome})
    //por em ordem alfabetica
    const ordemAlf = listaLivros.sort()
    
   
    // estrutura condicional, para de imprimir de acordo com a escolha
   if (categorias[cat] === undefined ) {
       console.log('os livros da biblioteca são: ')
       console.table(ordemAlf)
   } else {
       console.log('perfeito, vamos ver os livros disponíveis de ' + categorias[cat])
       console.table(categoria) 
   }
   //nunca escquecer feixar e colocar tudo que é preciso disonível ou no escopo da função
   } // <<=


   module.exports = escolheCat