import s from '@/UI/input/input.module.scss'
import {FC} from "react";
interface IInput {
    type: string;
    name?: string;
}
const Input: FC<IInput> = ({type, name}) => {
    return <input className={s.input} type={type} name={name} required />
};

export default Input;