'use client';
/* eslint-disable react-hooks/exhaustive-deps */
import s from '@/modules/VacanciesLayout/vacanciesLayout.module.scss'
import {Vacancy} from "@/components";
import {Employment} from "@/modules";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/hooks/useAppSelector";
import {vacanciesSlice} from "@/store/reducers/VacanciesSlice";
import axios from "axios";
import getConfig from 'next/config';



const VacanciesLayout = () => {
    const dispatch = useAppDispatch();
    const {setVacancies} = vacanciesSlice.actions;
    const {vacancies} = useAppSelector(data => data.vacanciesReducer);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [fetching, setFetching] = useState<boolean>(true);
    const [count, setCount] = useState<number>(10);

    const { publicRuntimeConfig } = getConfig();
    console.log(publicRuntimeConfig.BASE_URL)

    useEffect(() => {
        if (fetching) {
            axios.get(`http://localhost:3000/api/vacancies?page=${currentPage}&limit=10`)
                .then(data => {
                    dispatch(setVacancies([...vacancies, ...data.data.response.vacancies.data]));
                    setCount(data.data.response.vacancies.data.length)
                    setCurrentPage(prevState => prevState + 1);
                })
                .finally(() => setFetching(false))
        }
    }, [fetching]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        };
    }, []);

    const scrollHandler = (e: any) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 500 && count === 10)
            setFetching(true)
    }

    return (
        <div className={s.container}>
            <Employment />
            {vacancies ? <div className={s.vacanciesContainer}>{vacancies.map((item: any) => <Vacancy key={item.id} data={item} />)}</div> : ''}
        </div>
    );
};

export default VacanciesLayout;