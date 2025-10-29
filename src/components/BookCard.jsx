import React from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../redux/favoriteSlice";
import toast from "react-hot-toast"

const BookCard = ({ book }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  const isFavorite = favorites.some((fav) => fav.key === book.key);

  const toggleFavorite = (e) => {
    e.preventDefault();
    if (isFavorite) {
      dispatch(removeFromFavorites(book.key));
      toast.error("Book removed from favorite") 
} else {
  dispatch(addToFavorites(book));
  toast.success("Book added into favorite") 
}

  };

  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150x200?text=No+Cover";

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 relative">
      <Link to={`/book/${book.key.replace("/works/", "")}`}>
        <img
          src={coverUrl}
          alt={book.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-4 flex justify-between items-start">
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

          <button
            onClick={toggleFavorite}
            className="text-red-500 hover:text-red-600 mt-1"
            title={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart
              fill={isFavorite ? "red" : "none"}
              stroke="red"
              className="w-6 h-6 transition-all"
            />
          </button>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
