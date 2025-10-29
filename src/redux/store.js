import { configureStore } from "@reduxjs/toolkit";
import booksReducer from './bookSlice'
import favoirteReducer from './favoriteSlice'


const store =  configureStore({
    reducer:{
        books:booksReducer,
        favorites:favoirteReducer
    }
})

export default store;