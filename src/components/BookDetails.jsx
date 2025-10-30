import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import { Heart, ArrowLeft } from "lucide-react";
import { addToFavorites, removeFromFavorites } from "../redux/favoriteSlice";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [authors, setAuthors] = useState([]);

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const res = await axios.get(`https://openlibrary.org/works/${id}.json`);
        const bookData = res.data;
        setBook(bookData);

        if (bookData.authors) {
          const authorNames = await Promise.all(
            bookData.authors.map(async (a) => {
              const authorRes = await axios.get(
                `https://openlibrary.org${a.author.key}.json`
              );
              return authorRes.data.name;
            })
          );
          setAuthors(authorNames);
        }
      } catch (error) {
        console.error("Error fetching book details:", error);
        toast.error("Failed to fetch book details");
      }
    };
    fetchBookDetails();
  }, [id]);

  if (!book) return <Loader />;

  const isFavorite = favorites.some((fav) => fav.key === book.key);

  const toggleFavorite = (e) => {
    e.preventDefault();
    if (isFavorite) {
      dispatch(removeFromFavorites(book.key));
      toast.error("Book removed from favorites");
    } else {
      dispatch(addToFavorites(book));
      toast.success("Book added to favorites");
    }
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 mb-6 transition"
      >
        <ArrowLeft className="w-5 h-5 mr-2" /> Back to Home
      </Link>

      {/* Book Section */}
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        {/* Cover */}
        {book.covers ? (
          <img
            src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`}
            alt={book.title}
            className="w-56 h-auto rounded-lg shadow-md"
          />
        ) : (
          <div className="w-56 h-72 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-500">
            No Cover
          </div>
        )}

        {/* Details */}
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 flex items-center gap-3">
            {book.title}
            <button
              onClick={toggleFavorite}
              className="text-red-500 hover:text-red-600 transition"
              title={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              <Heart
                fill={isFavorite ? "red" : "none"}
                stroke="red"
                className="w-6 h-6 transition-all"
              />
            </button>
          </h1>

          {authors.length > 0 && (
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Author:</strong> {authors.join(", ")}
            </p>
          )}

          <p className="leading-relaxed">
            {book.description?.value ||
              book.description ||
              "No description available."}
          </p>

          {book.first_publish_date && (
            <p className="text-gray-600 dark:text-gray-400">
              📅 <strong>First Published:</strong> {book.first_publish_date}
            </p>
          )}

          {book.subjects && (
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                Subjects:
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {book.subjects.map((subject, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

