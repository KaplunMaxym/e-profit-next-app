import {Search} from "@/UI";
import s from '@/components/searchInput/searchInput.module.scss'

const SearchInput = () => {
    return (
        <div className={s.container}>
            <Search />
        </div>
    );
};

export default SearchInput;