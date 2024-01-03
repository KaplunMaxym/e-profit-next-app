import s from '@/UI/Inputs/input/input.module.scss';
import type { FC, ChangeEvent } from 'react';

interface IInput {
    type: string;
    name?: string;
    onChange?: ((value: string) => void);
    error?: any;
}

const Input: FC<IInput> = ({ type, name, onChange = () => {}, error }) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };
    const errorClass = error && error.correct === false ? s.notCorrect : '';
    return (
        <input
            className={`${s.input} ${errorClass}`}
            type={type}
            name={name}
            onChange={handleChange}
            required
        />
    );
};

export default Input;
