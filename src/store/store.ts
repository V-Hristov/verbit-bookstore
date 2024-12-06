import { configureStore} from '@reduxjs/toolkit';
import booksReducer from './booksSlice'
import cartReducer from './cartSlice';
import userReducer from './userSlice';

export const store = configureStore({
    reducer: {
        books: booksReducer,
        user: userReducer,
        cart: cartReducer,
    },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;