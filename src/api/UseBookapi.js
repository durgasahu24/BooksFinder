import axios from "axios";

const fetchBooks = async (query) => {
  try {
    const response = await axios.get(`https://openlibrary.org/search.json?q=${query}`);
    console.log("response ",response);
    const data = response.data;

    return data.docs || [];
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

export default fetchBooks;
