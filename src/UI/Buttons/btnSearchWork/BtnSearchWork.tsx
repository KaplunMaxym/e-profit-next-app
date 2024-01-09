import s from '@/UI/Buttons/btnSearchWork/btnSearchWork.module.scss'
import {FC, MouseEventHandler, ReactNode} from "react";
interface IBtnSearchWork {
    children: ReactNode;
    onClick?:  MouseEventHandler<HTMLButtonElement>;
    fontSize?: number;
    margin?: number;
    height100?: boolean;
}
const BtnSearchWork: FC<IBtnSearchWork> = ({children, onClick, fontSize, margin, height100}) => {
    return <button
        onClick={onClick}
        className={s.link}
        style={{margin: `${margin}`, height: `${height100 && '100%'}`}}
    >
        {children}
    </button>
};

export default BtnSearchWork;