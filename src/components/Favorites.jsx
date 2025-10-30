import React from "react";
import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";
import { Heart,ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Favorites = () => {
  
  const favorites = useSelector((state) => state.favorites.items);

  if (favorites.length === 0)
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4">
        <Heart className="w-12 h-12 text-red-500 animate-pulse" />
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          No favorites yet ❤️
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-md">
          Looks like you haven’t added any books to your favorites yet.
          Browse and tap the heart icon on books you love!
        </p>
      </div>
    );

  return (
    <div className="min-h-screen px-6 py-8 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="flex items-center justify-center gap-3 mb-10">
        <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 ">
          Your Favorite Books
        </h1>
      </div>

       <Link
        to="/"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 mb-8 -mt-6 transition"
      >
        <ArrowLeft className="w-5 h-5 mr-2" /> Back to Home
      </Link>

      {/* Book Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {favorites.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
