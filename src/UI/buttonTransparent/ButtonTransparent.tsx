import type {FC, ReactNode} from "react";
import s from '@/UI/buttonTransparent/buttonTransparent.module.scss'
import {useRouter} from "next/navigation";

interface IButtonYellow {
    children: ReactNode;
    type?: "submit" | "reset" | "button";
    navigate: string
}
const ButtonTransparent: FC<IButtonYellow> = ({children, type, navigate}) => {
    const router = useRouter()
    return <button onClick={() => router.push(navigate)} className={s.buttonTransparent} type={type}>{children}</button>
};

export default ButtonTransparent;