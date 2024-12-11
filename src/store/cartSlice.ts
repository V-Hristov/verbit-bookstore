import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book } from './bookSlice';

interface CartState {
    items: Book[];
}

const initialState: CartState = {
    items: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addBookToCart: (state, action: PayloadAction<Book>) => {
            const bookIndex = state.items.findIndex(book => book.id === action.payload.id);

            if (bookIndex !== -1) {
                state.items[bookIndex].stock += 1;
                state.items[bookIndex].price += state.items[bookIndex].price;
            } else {
                const book = action.payload;
                book.stock = 1;
                state.items.push(book);
            }
        },
        removeBookFromCart: (state, action: PayloadAction<Book>) => {
            const index = state.items.findIndex(book => book.id === action.payload.id);
            if (index !== -1) {
                state.items.splice(index, 1);
            }
        },
        removeAllBooksFromCart: (state) => {
            state.items = [];
        }
    },
});

export const { addBookToCart, removeBookFromCart, removeAllBooksFromCart } = cartSlice.actions;

export default cartSlice.reducer;