import s from '@/UI/Buttons/btnActionSecondary/btnActionSecondary.module.scss'
import Link from "next/link";
import {FC, MouseEventHandler, ReactNode} from "react";
interface IBtnLink {
    children: ReactNode;
    href: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    fontSize?: number;
    margin?: number;
    height100?: boolean;
}
const BtnActionSecondary: FC<IBtnLink> = ({children, href, onClick, fontSize, margin, height100}) => {
    return <Link
        href={href}
        onClick={onClick}
        className={s.link}
        style={{margin: `${margin}`, height: `${height100 && '100%'}`}}
    >
        {children}
    </Link>
};

export default BtnActionSecondary;