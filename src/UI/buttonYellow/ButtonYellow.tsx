import {FC, ReactNode} from "react";
import s from '@/UI/buttonYellow/buttonYellow.module.scss'

interface IButtonYellow {
    children: ReactNode;
    type?: "submit" | "reset" | "button";
}
const ButtonYellow: FC<IButtonYellow> = ({children, type}) => {
    return <button className={s.buttonYellow} type={type}>{children}</button>
};

export default ButtonYellow;