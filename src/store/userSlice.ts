import { createSlice, PayloadAction} from '@reduxjs/toolkit';

interface User {
    id: number | null;
    name: string | null;
    email: string | null;
    isLoggedIn: boolean;
}

const initialState: User = {
    id: null,
    name: null,
    email: null,
    isLoggedIn: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
})



export default userSlice.reducer;