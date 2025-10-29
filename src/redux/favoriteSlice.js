import { createSlice } from "@reduxjs/toolkit";

// Load saved favorites from localStorage (if any)
const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: savedFavorites,
  },
  reducers: {
    addToFavorites: (state, action) => {
      const book = action.payload;
      const exists = state.items.find((b) => b.key === book.key);
      if (!exists) {
        state.items.push(book);
        localStorage.setItem("favorites", JSON.stringify(state.items));
      }
    },
    removeFromFavorites: (state, action) => {
      state.items = state.items.filter((b) => b.key !== action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.items));
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
