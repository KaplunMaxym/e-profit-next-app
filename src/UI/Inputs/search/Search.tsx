import s from '@/UI/Inputs/search/search.module.scss'
import Image from "next/image";
import {search} from "@/assets";


const Search = () => {
    return (
        <div className={s.container}>
            <div className={s.imgContainer}>
                <Image src={search} alt={'search'} />
            </div>
            <div className={s.inputBlock}>
                <input className={s.input} placeholder={'Шукайте роботу'}/>
            </div>
        </div>

    );
};

export default Search;