import React, { createContext, useState } from 'react';
import { v4 as uuid4 } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: 'name of the wind', author: 'patrick rothfuss', id: 1 },
    { title: 'name final empire', author: 'brandon sanderson', id: 2 },
  ]);
  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid4() }]);
  };
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
