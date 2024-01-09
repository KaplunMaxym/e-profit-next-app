'use client';
/* eslint-disable react-hooks/exhaustive-deps */
import s from '@/modules/VacanciesLayout/vacanciesLayout.module.scss'
import {Vacancy} from "@/components";
import {Employment} from "@/modules";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/hooks/useAppSelector";
import {vacanciesSlice} from "@/store/reducers/VacanciesSlice";
import axios from "axios";

const VacanciesLayout = () => {
    const dispatch = useAppDispatch();
    const {setVacancies, setCount, setCurrentPagePlusOne, setReload} = vacanciesSlice.actions;
    const {vacancies, filterVacancies, count, reload} = useAppSelector(data => data.vacanciesReducer);
    // const [currentPage, setCurrentPage] = useState<number>(1);
    const [fetching, setFetching] = useState<boolean>(true);
    // const [count, setCount] = useState<number>(10);

    useEffect(() => {
        if (fetching || reload) {
            // axios.get(`/api/vacancies?page=${currentPage}&limit=10`)
            axios.get(`/api/filterParams?search=${filterVacancies.search}&minsalary=${filterVacancies.minsalary}&maxsalary=${filterVacancies.maxsalary}&region_id=${filterVacancies.region_id}&condition=${filterVacancies.condition}&city_id=${filterVacancies.city_id}&page=${filterVacancies.page}&limit=${filterVacancies.limit}`)
                .then(data => {
                    dispatch(setVacancies(data.data));
                    dispatch(setCount(data.data.length as number));
                    dispatch(setCurrentPagePlusOne());
                })
                .finally(() => {
                    setFetching(false)
                    dispatch(setReload(false))
                })
        }
    }, [fetching, reload]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        };
    }, []);
    const scrollHandler = (e: any) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 500 && count === 10) {
            setFetching(true);
        }
    }

    return (
        <div className={s.container}>
            <Employment />
            {vacancies ? <div className={s.vacanciesContainer}>{vacancies.map((item: any, index: number) => <Vacancy key={index} data={item} />)}</div> : <div className={s.vacanciesContainer}>Loading...</div>}
        </div>
    );
};

export default VacanciesLayout;