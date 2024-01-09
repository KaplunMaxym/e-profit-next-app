'use client';
import s from '@/UI/Inputs/search/search.module.scss'
import Image from "next/image";
import {search} from "@/assets";
import {useAppDispatch} from "@/hooks/useAppSelector";
import {vacanciesSlice} from "@/store/reducers/VacanciesSlice";
import {ChangeEvent, FC, useState} from "react";

interface ISearch {
    searchData?: string;
    setSearchData?: any;
}

const Search: FC<ISearch> = ({setSearchData, searchData}) => {


    const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        // dispatch(setSearchState(e.target.value))
        setSearchData(e.target.value)
    }

    return (
        <div className={s.container}>
            <div className={s.imgContainer}>
                <Image src={search} alt={'search'} />
            </div>
            <div className={s.inputBlock}>
                <input className={s.input} value={searchData} onChange={(e) =>searchHandler(e)} placeholder={'Шукайте роботу'}/>
            </div>
        </div>

    );
};

export default Search;