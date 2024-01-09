import s from '@/UI/Buttons/btnApplySideLeftBar/btnApplySideLeftBar.module.scss'
import {FC, MouseEventHandler, ReactNode} from "react";
interface IBtnLink {
    children: ReactNode;
    onClick?:  MouseEventHandler<HTMLButtonElement>;
    margin?: number;
    height100?: boolean;
}
const BtnApplySideLeftBar: FC<IBtnLink> = ({children, onClick, margin, height100}) => {
    return <button
        onClick={onClick}
        className={s.link}
        style={{margin: `${margin}`, height: `${height100 && '100%'}`}}
    >
        {children}
    </button>
};

export default BtnApplySideLeftBar;