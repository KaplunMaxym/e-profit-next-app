import {FC, ReactNode} from "react";
import s from '@/UI/buttonTransparent/buttonTransparent.module.scss'

interface IButtonYellow {
    children: ReactNode;
    type?: "submit" | "reset" | "button";
}
const ButtonTransparent: FC<IButtonYellow> = ({children, type}) => {
    return <button className={s.buttonTransparent} type={type}>{children}</button>
};

export default ButtonTransparent;