class Visitor {
    #name
    #book

    constructor(name) {
        this.#name = name
    }

    IWantToRead(librarian, author, bookName) {
        this.#book = librarian.searchBook(bookName, author)
    }

    WhatIRead() {
        if (this.#book !== undefined) { console.log(`Я читаю ${this.#book.getAuthor, this.#book.getName}`) }
        else { console.log('Моей любимой книги нет((') }
    }
}

module.exports = Visitor