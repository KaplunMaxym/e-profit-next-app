import type {FC} from "react";
import {ISelectorCity} from "@/UI/SelectorCity/ISelectorCity";
import s from '@/UI/SelectorCity/SelectorCity.module.scss'

const SelectorCity: FC<ISelectorCity> = ({city, area}) => {
    return (
        <div className={s.container}>
            <select className={s.select}>
                {city && city.map(item => <option className={s.option} key={item.id} id={item.id}>{item.city}</option>)}
                {area && area.map(item => <option className={s.option} key={item.id} id={item.id}>{item.city}</option>)}
            </select>
        </div>
    );
};

export default SelectorCity;