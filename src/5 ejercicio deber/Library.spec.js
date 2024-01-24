const Library = require('./Library');

describe('Library', () => {
    let library;

    beforeEach(() => {
        library = new Library();
    });

    it('adds a book', () => {
        library.addBook('Don Quijote');
        expect(library.findBook('Don Quijote')).toBeTruthy();
    });

    it('removes a book', () => {
        library.addBook('1984');
        library.removeBook('1984');
        expect(library.findBook('1984')).toBeFalsy();
    });

    it('finds a book', () => {
        library.addBook('Cien Años de Soledad');
        expect(library.findBook('Cien Años de Soledad')).toBeTruthy();
    });
});
