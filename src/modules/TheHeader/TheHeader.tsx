import s from '@/modules/TheHeader/theHeader.module.scss'
import Image from "next/image";
import {logoMain} from "@/assets";
import {LanguageSelector} from "@/components";
import {BtnActionSecondary, BtnLink, BtnActionPrimary} from "@/UI";

const TheHeader = () => {
    return (
        <div className={s.container}>
            <div className={s.leftSubContainer}>
                <Image src={logoMain} alt={'logo'} priority />
                <div className={s.leftLinks}>
                    <BtnLink href={'/'} >Знайти вакансії</BtnLink>
                    <BtnLink href={'/'} >Навчальні курси</BtnLink>
                    <BtnLink href={'/'} >Новини</BtnLink>
                </div>
            </div>
            <div className={s.rightSubContainer}>
                <LanguageSelector />
                <BtnActionSecondary href={'/'}>Увійти</BtnActionSecondary>
                <BtnActionPrimary href={'/'}>Реєстрація</BtnActionPrimary>
            </div>
        </div>
    );
};

export default TheHeader;