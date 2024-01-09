'use client'
/* eslint-disable react-hooks/exhaustive-deps */
import s from '@/modules/Employment/employment.module.scss'
import {BtnApplySideLeftBar, SelectorLocation} from "../../UI";
import {BtnClearFilters} from "@/UI";
import {useAppSelector} from "@/hooks";
import {vacanciesSlice} from "@/store/reducers/VacanciesSlice";
import {useAppDispatch} from "@/hooks/useAppSelector";
import {useEffect, useState} from "react";
import axios from "axios";

const Employment = () => {
    const {filterVacancies} = useAppSelector(state => state.vacanciesReducer);
    const {setFilterCondition, setFilterMinSalary, setFilterMaxSalary, setFilterSearch, setVacanciesClear, setCount, setCurrentPageNull, setReload} = vacanciesSlice.actions;
    const dispatch = useAppDispatch();
    const [checkedItems, setCheckedItems] = useState([]);
    const [minsalary, setMinsalary] = useState<string>('');
    const [maxsalary, setMaxsalary] = useState<string>('');
    const [condition, setCondition] = useState<never[]>([]);
    const [regionsData, setRegionsData] = useState<[]>([])
    const [regions, setRegions] = useState<[]>([])
    const [city, setCity] = useState<[]>()

    useEffect(() => {
        if (regionsData) {
            setCity(regionsData.slice(0, 24) as [])
            setRegions(regionsData.slice(24) as [])
        }
    }, [regionsData]);


    useEffect(() => {
        axios.get('/api/region')
            .then(data => setRegionsData(data.data))
    }, []);

    const handleCheckboxChange = (event: any) => {
        const checkboxValue = parseInt(event.target.id.replace('id', ''), 10);
        if (event.target.checked) {
            // Додаємо до масиву, якщо checkbox вибраний
            setCheckedItems([...checkedItems, checkboxValue] as any[number]);
        } else {
            // Видаляємо з масиву, якщо checkbox забраний
            setCheckedItems(checkedItems.filter(item => item !== checkboxValue));
        }
    };
    useEffect(() => {
        setCondition(checkedItems);
    }, [checkedItems, dispatch]);

    const salaryMinHandler = (e: any) => {
        setMinsalary(e.target.value)
    }

    const salaryMaxHandler = (e: any) => {
        setMaxsalary(e.target.value)
    }

    const submitHandler = () => {
        // axios.get(`/api/filterParams?search=${filterVacancies.search}&minsalary=${filterVacancies.minsalary}&maxsalary=${filterVacancies.maxsalary}&region_id=${filterVacancies.region_id}&condition=${filterVacancies.condition}&city_id=${filterVacancies.city_id}&page=${filterVacancies.page}&limit=${filterVacancies.limit}`)
        // // axios.get(`/api/filterParams?search=${filterVacancies.search}&minsalary=${filterVacancies.minsalary}&maxsalary=${filterVacancies.maxsalary}&region_id=${filterVacancies.region_id}&condition=${filterVacancies.condition}&city_id=${filterVacancies.city_id}&page=${filterVacancies.page}&limit=${filterVacancies.limit}`)
        // // axios.get(`/api/filterParams?search=енерг&minsalary=3000&maxsalary=10000&region_id=200018&condition=1,2&city_id=300009&page=1&limit=100`)
        //     .then(data => {
        //         console.log(data.data)
        //         dispatch(setVacanciesRewrite(data.data))
        //     })

        dispatch(setFilterMinSalary(minsalary))
        dispatch(setFilterMaxSalary(maxsalary))
        dispatch(setFilterCondition(condition))

        dispatch(setVacanciesClear([]))
        dispatch(setCount(0))
        dispatch(setCurrentPageNull())
        dispatch(setReload(true))
    }
    const clearFilterData = () => {
        setMinsalary('')
        setMaxsalary('')
        setCheckedItems([])
    }

    return (
        <div className={s.container}>
            <ul className={s.subContainer}>
                <li>
                    <h3 className={s.title}>Область</h3>
                    <SelectorLocation data={city} headerTitle={'Виберіть область'}/>
                    {/*<input className={s.inputString} placeholder={'Виберіть область'}/>*/}
                </li>
                <li>
                    <h3 className={s.title}>Місто</h3>
                    <SelectorLocation headerTitle={'Виберіть місто'}/>
                </li>
            </ul>
            <div>
                <h3 className={s.title}>Зайнятість</h3>
                <ul>
                    <li><input id={'id1'} type={'checkbox'} onChange={handleCheckboxChange}/>
                        <label htmlFor={'id1'} className={s.checkbox}>Повна</label></li>
                    <li><input id={'id2'} type={'checkbox'} onChange={handleCheckboxChange}/>
                        <label htmlFor={'id2'} className={s.checkbox}>Неповна</label></li>
                    <li><input id={'id3'} type={'checkbox'} onChange={handleCheckboxChange}/>
                        <label htmlFor={'id3'} className={s.checkbox}>Дистанційна</label></li>
                </ul>
            </div>
            <div>
                <h3 className={s.title}>Зарплата</h3>
                <div className={s.salarySub}>
                    <div>
                        <p style={{marginBottom: 8}}><span className={s.fromTo}>від</span></p>
                        <p><span className={s.fromTo}>до</span></p>
                    </div>
                    <div>
                        <div><input className={s.input} value={minsalary} onChange={salaryMinHandler} /></div>
                        <div><input className={s.input} value={maxsalary} onChange={salaryMaxHandler} /></div>
                    </div>
                </div>

            </div>
            <div className={s.buttons}>
                <BtnApplySideLeftBar onClick={submitHandler}>Застосувати</BtnApplySideLeftBar>
                <BtnClearFilters onClick={clearFilterData}>Очистити фільтр</BtnClearFilters>
            </div>
        </div>
    );
};

export default Employment;

// {{TEST}}/api/vacancy?search=енерг&minsalary=3000&maxsalary=10000&region_id=200018&condition=1,2&city_id=300009&page=1&limit=100