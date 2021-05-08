class Book {
    #name
    #author

    constructor(name, author) {
        this.#name = name
        this.#author = author
    }

    get getName() {
        return this.#name
    }

    get getAuthor() {
        return this.#author
    }
}

module.exports = Book