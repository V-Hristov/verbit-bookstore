import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Book {
    id: number;
    title: string;
    author: string;
    price: number;
    stock: number;
}

interface BooksState {
    items: Book[];
}

const initialState: BooksState = {
    items: [],
}

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setBooks: (state, action: PayloadAction<Book[]>) => {
            state.items = action.payload;
        },
    },
});

export const {setBooks} = booksSlice.actions;
export default booksSlice.reducer;