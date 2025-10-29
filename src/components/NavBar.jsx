import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Search } from "lucide-react"; 
import { useDispatch } from "react-redux";
import { setBooks } from "../redux/bookSlice";
import useNetworkStatus from "../hooks/useNetworkStatus";
import { toast } from "react-hot-toast";
import fetchBooks from '../api/fetchBooks'

const NavBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const isOnline = useNetworkStatus(); //  Track online/offline status

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isOnline) {
      toast.error("🚫 You’re offline. Please connect to the internet.");
       setQuery("");
      return;
    }

    if (query.trim() === "") {
      toast.error("Please enter a search term.");
      return;
    }

    try {
      const books = await fetchBooks(query);
      if (books.length === 0) {
        toast("No books found for that query.");
      }
      dispatch(setBooks(books));
      setQuery("");
    } catch (error) {
      toast.error("Something went wrong while fetching books.");
      console.error(error);
    }
  };

  return (
    <header className="w-full flex flex-col sm:flex-row justify-between items-center bg-white dark:bg-gray-900 px-6 py-4 shadow-md rounded-lg fixed top-0 left-0 right-0 z-50">
      
      {/* App Title */}
      <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3 sm:mb-0">
        Book Finder
      </h1>

      {/* Search Bar */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center w-full sm:max-w-xl bg-gray-50 dark:bg-gray-800 rounded-full border border-gray-300 dark:border-gray-700 overflow-hidden shadow-sm"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search books by title..."
          className="flex-grow px-4 py-2 bg-transparent text-gray-800 dark:text-gray-100 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 flex items-center justify-center transition-all"
        >
          <Search className="w-5 h-5" />
        </button>
      </form>

      {/* Favorites Link */}
      <Link
        to="/favorites"
        className="flex items-center gap-2 mt-3 sm:mt-0 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-semibold transition-all"
      >
        <Heart className="w-5 h-5" />
        <span>Favorites</span>
      </Link>
    </header>
  );
};

export default NavBar;
