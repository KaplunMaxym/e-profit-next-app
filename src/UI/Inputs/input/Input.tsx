"use client"
import s from '@/UI/Inputs/input/input.module.scss'
import {ChangeEvent, FC, useState} from "react";
import Image from "next/image";
import {exclamationMark, eyeHide, eyeShow} from "@/assets";
interface IInput {
    type: string;
    name?: string;
    onChange?: ((value: string) => void);
    error?: any;
    placeholder?: string
}
const Input: FC<IInput> = ({type, name, onChange = () => {}, error, placeholder}) => {
    const errorClass = (error && error.correct === false) && s.errorBorder;
    const [eye, setEye] = useState<boolean>(false)
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <div className={s.container}>
                <input
                className={`${s.input} ${errorClass}`}
                type={!eye ? type : "text"}
                name={name}
                onChange={handleChange}
                placeholder={placeholder}
                required
            />
            {errorClass &&
                <div className={s.errorText}>Невірні дані
                    <Image className={s.imgExclamationMark} src={exclamationMark} alt={'err'} />
                </div>
            }
            {type === 'password' &&
                <Image
                    onClick={() => setEye(!eye)}
                    className={s.img}
                    src={eye ? eyeShow : eyeHide}
                    alt={'o'}
                />
            }
        </div>
    )
};

export default Input;