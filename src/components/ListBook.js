import { Link } from "react-router-dom";
import Shelf from "./Shelf";

export default function ListBook({ books, shelfs, onUpdate }) {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                {shelfs.map((shelf) => (
                    <Shelf
                        key={shelf.value}
                        shelf={shelf}
                        onUpdate={onUpdate}
                        books={books.filter(book => book.shelf === shelf.value)}
                    >
                    </Shelf>
                ))}
            </div>
            <div className="open-search">
                <Link to="search">
                    <label>Add a book</label>
                </Link>
            </div>
        </div>
    )
}  