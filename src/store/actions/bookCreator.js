import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchBooks = createAsyncThunk("books/fetchAlll", async (payload, thunkApi) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API}/posts`, { signal: thunkApi.signal });
        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        return thunkApi.rejectWithValue(err.message)
    }
})

export default fetchBooks;