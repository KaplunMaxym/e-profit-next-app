'use client';
import s from '@/UI/Inputs/digitCode/digitCode.module.scss'
import {ChangeEvent, FC, useState} from "react";
interface IInput {
    name?: string;
    marginBottom?: number;
}
const DigitCode: FC<IInput> = ({name, marginBottom}) => {
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
        style={{marginBottom: marginBottom}}
        type={"number"}
        name={name}
        required
        value={value}
        onChange={handleInputChange}
    />
};

export default DigitCode;