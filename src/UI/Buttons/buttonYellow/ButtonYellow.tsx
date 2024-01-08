import type {FC, ReactNode} from "react";
import s from '@/UI/Buttons/buttonYellow/buttonYellow.module.scss'
import Image from "next/image";
import {loadingSpiner} from "@/assets";

interface IButtonYellow {
    children: ReactNode;
    type?: "submit" | "reset" | "button";
    active?: boolean;
    loading?: boolean;
}
const ButtonYellow: FC<IButtonYellow> = ({children, type, active, loading}) => {
    return(
    <button
        className={`${s.buttonYellow} ${!active && s.buttonYellowHover}`}
        type={type}
        disabled={active}
    >
        {children}
        {loading && <Image src={loadingSpiner} className={s.img} alt={'loading'} />}
    </button>)
};

export default ButtonYellow;