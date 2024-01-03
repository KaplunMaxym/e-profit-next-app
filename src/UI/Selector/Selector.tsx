import type {FC} from "react";
import {ISelector} from "@/UI/Selector/ISelector";
import s from '@/UI/Selector/Selector.module.scss'

const Selector: FC<ISelector> = ({data}) => {
    return (
        <select className={s.select}>
            {data.map(item => <option className={s.option} key={item.id} id={item.id}>{item.language}</option>)}
        </select>
    );
};

export default Selector;