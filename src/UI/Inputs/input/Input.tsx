"use client"
import s from '@/UI/Inputs/input/input.module.scss'
import {FC, useState} from "react";
import Image from "next/image";
import {eyeHide, eyeShow} from "@/assets";
interface IInput {
    type: string;
    name?: string;
    onChange?: any;
    error?: any;
    placeholder?: string
}
const Input: FC<IInput> = ({type, name, onChange, error, placeholder}) => {
    const errorClass = (error && error.correct === false) && s.errorBorder;
    const [eye, setEye] = useState<boolean>(false)
    return (
        <div className={s.container}>
                <input
                className={`${s.input} ${errorClass}`}
                type={!eye ? type : "text"}
                name={name}
                onChange={e => onChange(e.target.value)}
                placeholder={placeholder}
                required
            />
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