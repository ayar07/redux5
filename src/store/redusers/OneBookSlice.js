import { createSlice } from "@reduxjs/toolkit";
import fetchBooks from "../../store/actions/bookDetCreator";

const initialState = {
    book: [],
    bookIsLoading: false,
    bookIsError: "",
}

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.pending, (state) => {
            state.bookIsLoading = true;
            state.bookIsError = "";
        })
        builder.addCase(fetchBooks.rejected, (state, action) => {
            state.book = [];
            state.bookIsError = action.payload;
            state.bookIsLoading = false;
        })
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.book = action.payload;
            state.bookIsError = "";
            state.bookIsLoading = false;
        })
    }
})

const bookReducer = bookSlice.reducer;

export default bookReducer;