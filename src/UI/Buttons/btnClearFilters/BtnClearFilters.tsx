import s from '@/UI/Buttons/btnClearFilters/btnClearFilters.module.scss'
import {FC, MouseEventHandler, ReactNode} from "react";
import Image from "next/image";
import {x} from "@/assets";
interface IBtnLink {
    children: ReactNode;
    onClick?:  MouseEventHandler<HTMLButtonElement>;
    margin?: number;
    height100?: boolean;
}
const BtnClearFilters: FC<IBtnLink> = ({children, onClick, margin, height100}) => {
    return (
        <div className={s.container}>
            <button
                onClick={onClick}
                className={s.link}
                style={{margin: `${margin}`, height: `${height100 && '100%'}`}}
            >
                {children}
            </button>
            <Image className={s.img} src={x} alt={'x'} />
        </div>
    )
};

export default BtnClearFilters;