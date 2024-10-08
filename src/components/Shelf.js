import Book from "./Book";

export default function Shelf({ shelf, books, onUpdate }) {
    const booksInShelf = books.filter((book) => book.shelf === shelf.value);

    return (

        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf.label}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        booksInShelf.map((book) => {
                            return <Book key={book.id} book={book} onUpdate={onUpdate} shelf={shelf.value}></Book>
                        })
                    }
                </ol>
            </div>
        </div>
    )
}