import s from '@/UI/Inputs/search/search.module.scss'


const Search = () => {
    return (
        <div className={s.container}>
            <input className={s.input} placeholder={'Шукайте роботу'}/>
        </div>

    );
};

export default Search;