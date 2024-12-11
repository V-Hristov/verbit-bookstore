import { configureStore} from '@reduxjs/toolkit';
import bookReducer from './bookSlice'
//import cartReducer from './cartSlice';
import userReducer from './userSlice';

export const store = configureStore({
    reducer: {
        book: bookReducer,
        user: userReducer,
        //cart: cartReducer,
    },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;