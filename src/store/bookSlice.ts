import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Book {
    id: number | null;
    title: string;
    author: string;
    price: number;
    stock: number;
}

interface BookState {
    item: Book | null;
}

const initialState: BookState = {
    item: null,
}

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setBook: (state, action: PayloadAction<Book>) => {
            state.item = action.payload;
        },
    },
});

export const { setBook } = bookSlice.actions;
export default bookSlice.reducer;