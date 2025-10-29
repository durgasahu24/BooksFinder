import React from "react";
import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.items);

  if (favorites.length === 0)
    return (
      <p className="text-center text-gray-600 mt-10">
        No favorites yet. ❤️ Try adding some books!
      </p>
    );

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-20">
      {favorites.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  );
};

export default Favorites;
