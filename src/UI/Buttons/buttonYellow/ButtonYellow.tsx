import type {FC, ReactNode} from "react";
import s from '@/UI/Buttons/buttonYellow/buttonYellow.module.scss'

interface IButtonYellow {
    children: ReactNode;
    type?: "submit" | "reset" | "button";
    active?: boolean;
}
const ButtonYellow: FC<IButtonYellow> = ({children, type, active}) => {
    return(
    <button
        className={s.buttonYellow}
        type={type}
        disabled={active}
    >
        {children}
    </button>)
};

export default ButtonYellow;