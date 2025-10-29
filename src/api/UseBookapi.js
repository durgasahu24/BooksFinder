import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setBooks } from "../redux/bookSlice"; 

function UseBookApi() {
  const dispatch = useDispatch();

  const fetchBooks = async (query) => {
    try {
      const res = await axios.get(
        `https://openlibrary.org/search.json?title=${query}`
      );

      const bookData = res.data.docs.map((book) => ({
        key: book.key,
        title: book.title,
        author: book.author_name?.[0],
        year: book.first_publish_year,
        coverId: book.cover_i,
      }));

      // ✅ Dispatch to Redux store
      dispatch(setBooks(bookData));
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  // you can return the function to use it in other components
  return { fetchBooks };
}

export default UseBookApi;
