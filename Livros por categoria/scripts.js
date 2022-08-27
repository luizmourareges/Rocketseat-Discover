const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionári",
                author: "T. Harv Eker",
            },            
            {
                title: "O homem mais rico da Babilônia",
                author: "Gerorge C. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ], 
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury",
            },            
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ], 
    },    
];

// contar número de categorias e o número de livros de cada categoria
const totalCategories = booksByCategory.length

console.log('Total de categorias: ', totalCategories)
for(let category of booksByCategory){
    console.log('Total de livros da categoria: ', category.category)
    console.log(category.books.length)
}

// contar o número de autores
function countAutors(){
    let authors = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1  ){
                authors.push(book.author)
            }
        }
    }

    console.log("Total de autores: ", authors.length) 
}

countAutors();

//mostrar livros do autor Augusto Cury
function booksOfAugustoCury(){
    let books = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === 'Augusto Cury'){
                books.push(book.title)
            }
        }
    }

    console.log("Livros do autor Augusto Cury: ", books) 
}

booksOfAugustoCury();

