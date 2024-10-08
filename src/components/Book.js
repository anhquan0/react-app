import ReadingStatusSelector from "./ReadingStatusSelector"

export default function Book({ book, shelf, onUpdate }) {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                `url(${book.imageLinks ? book.imageLinks.thumbnail : '/icons/book-placeholder-svgrepo-com.svg'})` // Add the book cover image URL here,
            }}
          ></div>
          <ReadingStatusSelector onUpdate={onUpdate} shelf={shelf} book={book}/>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors ? book.authors.join(', ') : "N/A"}</div>
      </div>
    </li>
  )
}