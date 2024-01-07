import s from '@/UI/Buttons/btnLinkTo/btnLinkTo.module.scss'
import Link from "next/link";
import {FC, MouseEventHandler, ReactNode} from "react";
interface IBtnLinkTo {
    children: ReactNode;
    href: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    margin?: number;
    height100?: boolean;
}
const BtnLinkTo: FC<IBtnLinkTo> = ({children, href, onClick, margin, height100}) => {
    return <Link
        href={href}
        onClick={onClick}
        className={s.link}
        style={{margin: `${margin}`, height: `${height100 && '100%'}`}}
    >
        {children}
    </Link>
};

export default BtnLinkTo;