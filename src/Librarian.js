class Librarian {
    #name
    #library

    constructor(name, library) {
        this.#name = name
        this.#library = library
    }

    get getName() {
        return this.#name
    }

    #searchByAuthor = (author, books) => {
        for (let book of books) {
            if (book.getAuthor.getName === author) {
                return book
            }
        }
    };

    #searchByNameAndAuthor = (name, author, books) => {
        for (let book of books) {
            if (book.getAuthor.getName === author && book.getName === name) {
                return book
            }
        }
    };

    searchBook(bookName, authorName) {
        let libBooks = this.#library.getBooks
        let book
        if (bookName !== undefined && authorName !== undefined) { book = this.#searchByNameAndAuthor(bookName, authorName, libBooks) }
        else if (authorName !== undefined) { book = this.#searchByAuthor(authorName, libBooks) }

        if (book === undefined) {
            console.log(`Книги "${bookName || ''}" - ${authorName} в библиотеке ${this.#library.getName} нет!`)
        }

        return book
    }
}

module.exports = Librarian