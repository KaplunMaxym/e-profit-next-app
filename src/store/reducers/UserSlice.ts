'use client'
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserState {
    emailByVerification: string
}

const initialState: UserState = {
    emailByVerification: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setEmailByVerification: (state, action: PayloadAction<string>) => {
            state.emailByVerification = action.payload
        },
    },
})

export default userSlice.reducer