'use client'
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface VacanciesState {
    vacancies: any;
}

const initialState: VacanciesState = {
    vacancies: [],
}

export const vacanciesSlice = createSlice({
    name: 'vacancies',
    initialState,
    reducers: {
        setVacancies: (state, action: PayloadAction<any>) => {
            state.vacancies = action.payload
        },
    },
})

export default vacanciesSlice.reducer