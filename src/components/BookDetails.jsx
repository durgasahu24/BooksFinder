import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const res = await axios.get(`https://openlibrary.org/works/${id}.json`);
        const bookData = res.data;
        setBook(bookData);

        // Fetch author names (they come as author keys)
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
      }
    };
    fetchBookDetails();
  }, [id]);

  if (!book) return <p className="text-center mt-10 text-gray-600">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md mt-10">
      {/* Back Button */}
      <Link
        to="/"
        className="text-blue-500 hover:text-blue-700 mb-4 inline-block"
      >
        ← Back to Home
      </Link>

      {/* Book Cover */}
      {book.covers && (
        <img
          src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`}
          alt={book.title}
          className="w-64 h-auto rounded-lg shadow-md mx-auto mb-6"
        />
      )}

      {/* Book Title */}
      <h1 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400 mb-2">
        {book.title}
      </h1>

      {/* Authors */}
      {authors.length > 0 && (
        <p className="text-center text-gray-700 dark:text-gray-300 mb-4">
          <strong>Author:</strong> {authors.join(", ")}
        </p>
      )}

      {/* Description */}
      <p className="text-gray-800 dark:text-gray-200 mb-4 leading-relaxed">
        {book.description?.value || book.description || "No description available."}
      </p>

      {/* Publish Year */}
      {book.first_publish_date && (
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          📅 <strong>First Published:</strong> {book.first_publish_date}
        </p>
      )}

      {/* Subjects */}
      {book.subjects && (
        <div className="mt-4">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">Subjects:</h3>
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
  );
};

export default BookDetails;

