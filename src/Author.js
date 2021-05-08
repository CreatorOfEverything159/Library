class Author {
    #name

    constructor(name) {
        this.#name = name
    }

    get getName() {
        return this.#name
    }
}

module.exports = Author