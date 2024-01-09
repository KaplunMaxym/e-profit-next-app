'use client'
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface VacanciesState {
    vacancies: any[];
    filterVacancies: {
        search: string;
        minsalary: string;
        maxsalary: string;
        region_id: number;
        condition: number[];
        city_id: number;
        page: number;
        limit: number;
    };
    searchState: string;
    count: number;
    reload: boolean;
}

const initialState: VacanciesState = {
    vacancies: [],
    filterVacancies: {
        search: '',
        minsalary: '',
        maxsalary: '',
        region_id: 200018,
        condition: [],
        city_id: 300009,
        page: 1,
        limit: 10
    },
    searchState: '',
    count: 10,
    reload: false,
}

export const vacanciesSlice = createSlice({
    name: 'vacancies',
    initialState,
    reducers: {
        setVacancies: (state, action: PayloadAction<any>) => {
            // state.vacancies = action.payload
            state.vacancies = [...state.vacancies, ...action.payload]
        },


        setVacanciesClear: (state, action: PayloadAction<any>) => {
            state.vacancies = []
        },
        setSearchState: (state, action: PayloadAction<string>) => {
            state.searchState = action.payload
        },

        setCount(state, action: PayloadAction<number>) {
            state.count = action.payload;
        },
        setCurrentPagePlusOne(state) {
            state.filterVacancies.page = state.filterVacancies.page + 1;
        },
        setCurrentPageNull(state) {
            // state.currentPage = 1;
            state.filterVacancies.page = 1;
        },
        setReload(state, action: PayloadAction<boolean>) {
            state.reload = action.payload
        },




        setFilterSearch: (state, action: PayloadAction<string>) => {
            state.filterVacancies.search = action.payload
        },
        setFilterMinSalary: (state, action: PayloadAction<string>) => {
            state.filterVacancies.minsalary = action.payload
        },
        setFilterMaxSalary: (state, action: PayloadAction<string>) => {
            state.filterVacancies.maxsalary = action.payload
        },
        setFilterRegionId: (state, action: PayloadAction<number>) => {
            state.filterVacancies.region_id = action.payload
        },
        setFilterCondition: (state, action: PayloadAction<never[]>) => {
            state.filterVacancies.condition = [...action.payload]
        },
        setFilterCityId: (state, action: PayloadAction<number>) => {
            state.filterVacancies.city_id = action.payload
        },
        setFilterPage: (state, action: PayloadAction<number>) => {
            state.filterVacancies.page = action.payload
        },
        setFilterLimit: (state, action: PayloadAction<number>) => {
            state.filterVacancies.limit = action.payload
        },
    },
})

export default vacanciesSlice.reducer