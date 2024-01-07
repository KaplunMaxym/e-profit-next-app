import s from '@/UI/Buttons/btnLinkYellow/btnLinkYellow.module.scss'
import Link from "next/link";
import {FC, MouseEventHandler, ReactNode} from "react";
interface IBtnLink {
    children: ReactNode;
    href: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    margin?: number;
    height100?: boolean;
}
const BtnLinkYellow: FC<IBtnLink> = ({children, href, onClick, margin, height100}) => {
    return <Link
        href={href}
        onClick={onClick}
        className={s.link}
        style={{margin: `${margin}`, height: `${height100 && '100%'}`}}
    >
        {children}
    </Link>
};

export default BtnLinkYellow;