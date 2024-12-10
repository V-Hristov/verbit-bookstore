import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import {isValidEmail} from "../helpers/validators";

export interface User {
    id: number | null;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    dateOfBirth: Date | null;
}

const initialState: User = {
    id: 1,
    firstName: "Valentin",
    lastName: "Hristov",
    email: "ValentinHristov@hotmail.com",
    dateOfBirth: new Date("1991-05-08"),
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setFirstName: (state, action: PayloadAction<string>) => {
            state.firstName = action.payload;
        },
        setLastName: (state, action: PayloadAction<string>) => {
            state.lastName = action.payload;
        },
        setEmail: (state, action: PayloadAction<string>) => {
            if (isValidEmail(action.payload)) {
                state.email = action.payload;
            } else {
                throw new Error('Invalid Emial!');
            }
        },
        setDateOfBirth: (state, action: PayloadAction<Date>) => {
            state.dateOfBirth = action.payload;
        },
    }
})



export default userSlice.reducer;