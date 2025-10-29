import React from "react";
import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";

const BookList = () => {
  const books = useSelector((state) => state.books.books);

  

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-19">
      {books.length === 0 ? (
        <p className="text-center text-gray-600 col-span-full">No books found. Try searching!</p>
      ) : (
        books.map((book) => <BookCard key={book.key} book={book} />)
      )}
    </div>
  );
};

export default BookList;
