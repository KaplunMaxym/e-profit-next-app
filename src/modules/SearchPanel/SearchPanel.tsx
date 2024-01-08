import s from '@/modules/SearchPanel/searchPanel.module.scss'
import {Search, SelectorLocation, BtnSearchWork} from "@/UI";

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
    return (
        <div className={s.container}>
            <Search/>
            <SelectorLocation data={area} headerTitle={'Виберіть область'}/>
            <SelectorLocation data={city} headerTitle={'Виберіть місто'} />
            <BtnSearchWork height100 href={'/'}>Знайти роботу</BtnSearchWork>
        </div>
    );
};

export default SearchPanel;