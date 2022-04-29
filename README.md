## Primeiro Projeto  - Semana 5
#### ciclo de lógica

-----

Esse exercício permite uma interação no terminal para praticarmos a arquitetura, lógica e sintaxe para criar um banco de dados, buscar informações neste e apresentar o que foi obtido.

Segui o modelo proposto e criei uma biblioteca, uma variável que armazena uma *lista* de **objetos**, isto é, um **Array** de objetos;

Em outro arquivo, para que tudo fique organizado e fácil de organizar que parte, ou componente, é responsável por cada *feature*, ou **recurso** do código que estamos construindo.

Em uma pasta reuni, conforme instruido, os controladores ou os códigos que entram em ação quando requisitados no menu principal do projeto, esses arquivos guardam o que chamamos de funlão callback.

Em cada funcionalidade foi possível praticar  e compreender sintaxes que simplificam e agilizam a maneira de escrever funções, assim como os métodos de interação com arrays.

Ao buscar um livro, usamos o método **livro.filter** para varrer toda a lista e encontrar propriedades de valor igual ao *input* da pessoa usando o programa, nesse caso comparando com o livro.categoria.

Ao solicitar que ordene, o programa utiliza **livro.sort** para comparar e roda inúmeras vezes até que toda a lista esteja na ordem especificada. aqui pelo número de páginas

A terceira opção utiliza uma função para conferir os livros que estão marcados com **True** em *leu* e recomendados e retorna os livros à pessoa.

A última funcionalidade filtra a lista conferindo os livros marcados com **false** na propriedade *leu*



`COMPORTAMENTO ESPERADO`
![image](https://c.tenor.com/4MwauWSFOuYAAAAM/dragon-dragon-ball-z.gif)


===
### `Como criar o projeto` 
Siga os passos abaixo:

| Passo | Comando/informação       |
| --------- | ----------- |
| Inicie um projeto node | `npm init -y` |
| No package.json, crie o script start   | `"start": "node app.js"` |
| Instale as dependências   | `npm i readline-sync` |
| Crie o .gitignore     | `node_modules` |
|

### `Tecnologias`

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `npm` | Gerenciador de pacotes|
| `readline-sync` | Dependência para receber inputs no terminal|
| 
  
### `Arquitetura`

```
 📁 projeto-de-livros
   |- 📁 controllers
   |     |- 📄 buscarLivros.js
   |     |- 📄 listarRecomendados.js
   |     |- 📄 listarLivrosNaoLidos.js
   |     |- 📄 listarLivrosOrdenados.js
   |- 📁 node_modules
   |- 📄 app.js
   |- 📄 database.js
   |- 📄 .gitignore
   |- 📄 package.json  
   |- 📄 package-lock.json
```

### `Requisitos`

- [ ]  **`buscarLivros`** Deverá ser possível buscar livros pela categoria
- [ ]  **`listarLivrosOrdenados`** Deverá retornar todos os livros ordenados de forma crescente por quantidade de páginas.
- [ ]  **`listarRecomendados`** Deverá listar livros que já foram lidos e que são recomendados
- [ ]  **`listarLivrosNaoLidos`** Deverá listar livros que ainda não foram lidos 


`REGRAS`
```
- Inicia o algoritmo escolhendo a forma de busca no menu.
- Caso a pessoa usuária escolha alguma opção inexistente deverá mostrar no console a string 'fim do algoritmo'.
- O comportamento esperado deve ser o pedido da entrada e a impressão das tabelas buscadas no console, conforme requisitos acima.
```



## `Dados`

Criar dados mocados, um array de objetos de livros com a modelagem abaixo.

LIVRO
- nome: string
- categoria: string
- paginas: number
- recomenda: boolean
- leu: boolean
----


