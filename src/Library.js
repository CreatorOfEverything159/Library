class Library {
    #books = []
    #name

    constructor(name, books) {
        this.#books = books
        this.#name = name
    }

    get getBooks() {
        return this.#books
    }

    get getName() {
        return this.#name
    }
}

module.exports = Library