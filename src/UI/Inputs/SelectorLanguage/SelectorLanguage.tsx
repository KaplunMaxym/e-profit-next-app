import type {FC} from "react";
import {ISelectorLanguage} from "@/UI/Inputs/SelectorLanguage/ISelectorLanguage";
import s from '@/UI/Inputs/SelectorLanguage/SelectorLanguage.module.scss'

const SelectorLanguage: FC<ISelectorLanguage> = ({data}) => {
    return (
        <select className={s.select}>
            {data.map(item => <option className={s.option} key={item.id} id={item.id}>{item.language}</option>)}
        </select>
    );
};

export default SelectorLanguage;