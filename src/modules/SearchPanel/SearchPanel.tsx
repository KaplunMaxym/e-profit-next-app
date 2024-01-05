import s from '@/modules/SearchPanel/searchPanel.module.scss'
import {BtnLink, Search, SelectorLocation} from "@/UI";

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
            <Search/>
            <SelectorLocation data={area} />
            {/*<SelectorLocation data ={city} />*/}
            <BtnLink height100 yellow fontSize={20} href={'/'}>Знайти роботу</BtnLink>
        </div>
    );
};

export default SearchPanel;