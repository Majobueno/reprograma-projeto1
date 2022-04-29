// No arquivo database crie e exporte a sua base no formato array de objetos
// contendo alguns dos livros que você tirou da cabeça com os seguintes campos:

// ```
// nome: string
// categoria: string
// paginas: number
// recomenda: boolean
// leu: boolean
//
// ```

const livro = [
    { 
        nome: 'Bem Vinda Dev',
        categoria: "tecnologia",
        paginas: 685,
        recomenda: true,
        leu: true,
    
    },
    {
        nome: 'o falo no centro da sociedade',
        categoria: "ciencias sociais",
        paginas: 166,
        recomenda: true,
        leu: false,
    },
    {
        nome: 'Ovos pós páscoa',
        categoria: "culinaria",
        paginas: 89,
        recomenda: true,
        leu: true,
    },
    {
        nome: 'Cozinhando um peru no natal',
        categoria: "culinaria",
        paginas: 68,
        recomenda: false,
        leu: true,
    },
    {
        nome: 'virando planta',
        categoria: "biologia",
        paginas: 351,
        recomenda: true,
        leu: false,
    },
    {
        nome: 'O Programa da Dev na sexta',
        categoria: "tecnologia",
        paginas: 18,
        recomenda: true,
        leu: true,
    },
    {
        nome: 'o maior organismo do planeta',
        categoria: "biologia",
        paginas: 435,
        recomenda: true,
        leu: true,
    },
    {
        nome: 'um mando outro obece',
        categoria: "ciencias sociais",
        paginas: 85,
        recomenda: false,
        leu: false,
    },
    {
        nome: 'A Dev mais Potente em Rede',
        categoria: "tecnologia",
        paginas: 68,
        recomenda: true,
        leu: false,
    },
    {
        nome: 'como deixar algoritmos mais inteligentes',
        categoria: "tecnologia",
        paginas: 341,
        recomenda: true,
        leu: false,
    },
    {
        nome: 'o que faz uma variável',
        categoria: 'tecnologia',
        paginas: 612,
        recomenda: false,
        leu: true,
    },
    {
        nome: 'Mito e Herança Brasileira',
        categoria: "ciencias sociais",
        paginas: 170,
        recomenda: false,
        leu: true,
    },
    {
        nome: 'desprogramando o patriarcado',
        categoria: "tecnologia",
        paginas: 169,
        recomenda: true,
        leu: false,
    },
    {
        nome: 'Independecia Financeira é Coletiva',
        categoria: "economia",
        paginas: 158,
        recomenda: true,
        leu: false,
    },
    {
        nome: 'Um bom emprego de Let',
        categoria: "tecnologia",
        paginas: 15,
        recomenda: true,
        leu: true,
    },
    {
        nome: 'vivendo no Brasil sem PIB',
        categoria: ['ciencias sociais', 'economia'],
        paginas: 1313,
        recomenda: true,
        leu: false,
    },
    {
        nome: 'quando um boolean resolve',
        categoria: "tecnologia",
        paginas: 410,
        recomenda: true,
        leu: true,
    },
    {
        nome: 'pancs de pascua',
        categoria: "culinaria",
        paginas: 233,
        recomenda: true,
        leu: false,
    },
    {
        nome: 'a facada e a ferida das Fake News',
        categoria: "ciencias sociais",
        paginas: 165,
        recomenda: true,
        leu: true,
    },
    {
        nome: 'cozidos e fermentados: comida probiótica',
        categoria: "culinaria",
        paginas: 167,
        recomenda: true,
        leu: true,
    }
    ] 
    
    module.exports = livro
    