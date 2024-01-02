"use client"

import s from '@/UI/Inputs/input/input.module.scss'
import type {FC} from "react";
interface IInput {
    type: string;
    name?: string;
    onChange?: any;
    error?: any;
}
const Input: FC<IInput> = ({type, name, onChange, error}) => {
    const errorClass = (error && error.correct === false)? s.notCorrect: '';
    return <input
        className={`${s.input} ${errorClass}`}
        type={type}
        name={name}
        onChange={e => onChange(e.target.value)}
        required
    />
};

export default Input;