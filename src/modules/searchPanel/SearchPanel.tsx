import s from '@/modules/searchPanel/searchPanel.module.scss'
import {BtnLink, SelectorCity} from "@/UI";
import {SearchInput} from "@/components";

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
const area = [
    {
        id: 1,
        city: 'Bereshany'
    },
    {
        id: 2,
        city: 'Terebovlia'
    },
]
const SearchPanel = () => {
    return (
        <div className={s.container}>
            <SearchInput />
            <SelectorCity area={area} />
            <SelectorCity city={city} />
            <BtnLink height100 yellow fontSize={20} href={'/'}>Знайти роботу</BtnLink>
        </div>
    );
};

export default SearchPanel;