import "./css/App.css";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom"
import * as API from "./BooksAPI";
import ListBook from "./components/ListBook";
import SearchBook from "./components/SearchBook";

function App() {
  const [error, setError] = useState(false);
  const [listBooks, setListBooks] = useState([]);
  const [searchBooks, setSearchBooks] = useState([]);

  const shelfs = useMemo(() => [
    { label: "Currently Reading", value: "currentlyReading" },
    { label: "Want to Read", value: "wantToRead" },
    { label: "Read", value: "read" }
  ], []);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const books = await API.getAll();
        setListBooks(books);
      } catch {
        setError(true);
      }
    };

    getBooks();
  }, []);  

  const updateBookFunc = useCallback(async (book, shelf) => {
    try {
      await API.update(book, shelf);
      setListBooks((prevBooks) => {
        if(shelf === "none") {
          return prevBooks.filter((b) => book.id !== b.id);
        } else {
          book.shelf = shelf;
          return prevBooks.filter((b) => book.id !== b.id).concat(book);
        }
      });
    } catch {
      setError(true);
    }
  }, []);
  
  const searchBooksFunc = useCallback(async (query) => {
    if(query.trim()) {
      try {
        const searchBookList = await API.search(query);
        setSearchBooks(searchBookList.error ? []: searchBookList);
      } catch {
        setSearchBooks([])
      }
    } else {
      setSearchBooks([]);
    }
  }, []);

  const resetSearch = useCallback(() => {
    setSearchBooks([]);
  }, [])

  if (error) {
    return <div>Error!</div>;
  } else {
    return (
      <div className="app">
        <Routes>
          <Route
            exact path="/"
            element={<ListBook books={listBooks} onUpdate={updateBookFunc} shelfs={shelfs}></ListBook>}
          >
          </Route>
          <Route 
            exact
            path="/search"
            element={
              <SearchBook
                books={listBooks} searchBooks={searchBooks} onSearch={searchBooksFunc} onUpdate={updateBookFunc} onResetSearch={resetSearch}
              />
            }
          >
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
