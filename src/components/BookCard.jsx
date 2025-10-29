import React from "react";
import { Heart } from "lucide-react"; 
import { Link } from "react-router-dom";
const BookCard = ({ book }) => {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150x200?text=No+Cover";

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
      <Link to={`/book/${book.key.replace("/works/", "")}`}>
        <img
          src={coverUrl}
          alt={book.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-4 flex justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {book.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {book.author_name?.[0] || "Unknown Author"}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {book.first_publish_year
                ? `Published: ${book.first_publish_year}`
                : ""}
            </p>
          </div>
          <h1 className="mt-8"><Heart/></h1>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
