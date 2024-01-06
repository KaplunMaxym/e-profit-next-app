import s from '@/UI/Buttons/btnLink/btnLink.module.scss'
import Link from "next/link";
import {FC, MouseEventHandler, ReactNode} from "react";
interface IBtnLink {
    children: ReactNode;
    href: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    yellow?: boolean;
    fontSize?: number;
    margin?: number;
    height100?: boolean;
}
const BtnLink: FC<IBtnLink> = ({children, href, onClick, yellow, fontSize, margin, height100}) => {
    return <Link
        href={href}
        onClick={onClick}
        className={`${s.link} ${yellow && s.yellowColor}`}
        style={{fontSize: `${fontSize}px`, margin: `${margin}`, height: `${height100 && '100%'}`}}
    >
        {children}
    </Link>
};

export default BtnLink;