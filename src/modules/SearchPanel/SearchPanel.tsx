'use client';
import s from '@/modules/SearchPanel/searchPanel.module.scss'
import {Search, BtnSearchWork, SelectorLocation} from "@/UI";
import {useAppDispatch} from "@/hooks/useAppSelector";
import {vacanciesSlice} from "@/store/reducers/VacanciesSlice";
import {useState} from "react";

const city = [
    {
        id: 1,
        city: 'Ternopil'
    },
    {
        id: 2,
        city: 'Lviv'
    },
]
const area: any[] = [];

for (let i = 1; i <= 50; i++) {
    area.push({
        id: i,
        city: `City${i}`
    });
}



const SearchPanel = () => {
    const dispatch = useAppDispatch()
    const {setFilterSearch, setVacanciesClear, setCount, setCurrentPageNull, setReload} = vacanciesSlice.actions
    const [searchData, setSearchData] = useState<string>('');

    const submitHandler = () => {
        dispatch(setFilterSearch(searchData))
        dispatch(setVacanciesClear([]))
        dispatch(setCount(0))
        dispatch(setCurrentPageNull())
        dispatch(setReload(true))
    }
    return (
        <div className={s.container}>
            <Search setSearchData={setSearchData} searchData={searchData} />
            {/*<SelectorLocation data={area} headerTitle={'Виберіть область'}/>*/}
            {/*<SelectorLocation data={city} headerTitle={'Виберіть місто'} />*/}
            <BtnSearchWork onClick={submitHandler} height100>Знайти роботу</BtnSearchWork>
        </div>
    );
};

export default SearchPanel;