'use client'
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface VacanciesState {
    vacancies: any;
    filterVacancies: {
        search: string;
        minsalary: number;
        maxsalary: number;
        region_id: number;
        condition: number[];
        city_id: number;
        page: number;
        limit: number;
    };
}

const initialState: VacanciesState = {
    vacancies: [],
    filterVacancies: {
        search: '',
        minsalary: 0,
        maxsalary: 0,
        region_id: 0,
        condition: [],
        city_id: 0,
        page: 0,
        limit: 0
    }
}

export const vacanciesSlice = createSlice({
    name: 'vacancies',
    initialState,
    reducers: {
        setVacancies: (state, action: PayloadAction<any>) => {
            // state.vacancies = action.payload
            state.vacancies = [...state.vacancies, ...action.payload]
        },
        setFilterSearch: (state, action: PayloadAction<string>) => {

        },
        setFilterMinSalary: (state, action: PayloadAction<number>) => {

        },
        setFilterMaxSalary: (state, action: PayloadAction<number>) => {

        },
        setFilterRegionId: (state, action: PayloadAction<number>) => {

        },
        setFilterCondition: (state, action: PayloadAction<[number]>) => {

        },
        setFilterCityId: (state, action: PayloadAction<number>) => {

        },
        setFilterPage: (state, action: PayloadAction<number>) => {

        },
        setFilterLimit: (state, action: PayloadAction<number>) => {

        },
    },
})

export default vacanciesSlice.reducer