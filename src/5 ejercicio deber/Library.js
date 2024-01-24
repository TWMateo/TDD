class Library {
    constructor() {
        this.books = [];
    }

    addBook(title) {
        this.books.push(title);
    }

    removeBook(title) {
        this.books = this.books.filter(book => book !== title);
    }

    findBook(title) {
        return this.books.includes(title);
    }
}

module.exports = Library;
