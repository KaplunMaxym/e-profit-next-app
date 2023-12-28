import {FC, ReactNode} from "react";
import s from '@/UI/button/button.module.scss'

interface IButton {
    children: ReactNode;
    type?: "submit" | "reset" | "button";
    color?: string;
}
const Button: FC<IButton> = ({children, type, color}) => {
    return <button className={s.button} style={{background: color}} type={type}>{children}</button>
};

export default Button;