'use client';
import s from '@/UI/Inputs/digitCode/digitCode.module.scss'
import {ChangeEvent, FC, useState} from "react";
interface IInput {
    name?: string;
}
const DigitCode: FC<IInput> = ({name}) => {
    const [value, setValue] = useState('');
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const inputValue = e.target.value;
        const maxValue = 999999;
        if (inputValue === '' || (parseInt(inputValue) <= maxValue && inputValue.length <= 6)) {
            setValue(inputValue);
        }
    }
    return <input
        className={s.input}
        type={"number"}
        name={name}
        required
        value={value}
        onChange={handleInputChange}
    />
};

export default DigitCode;