import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import {isValidEmail} from "../helpers/validators";

export interface User {
    id: number | null;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    dateOfBirth: number | undefined;
}

const initialState: User = {
    id: 1,
    firstName: "Valentin",
    lastName: "Hristov",
    email: "ValentinHristov@hotmail.com",
    dateOfBirth: new Date("1991-05-08").getTime(),
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUserProfile: (state, action: PayloadAction<User>) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
            state.dateOfBirth = action.payload.dateOfBirth;
        }
    }
})

export const {updateUserProfile} = userSlice.actions;

export default userSlice.reducer;