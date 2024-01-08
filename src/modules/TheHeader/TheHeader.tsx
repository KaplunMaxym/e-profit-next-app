import s from '@/modules/TheHeader/theHeader.module.scss'
import Image from "next/image";
import {logoMain} from "@/assets";
import {LanguageSelector} from "@/components";
import {BtnLink, BtnLinkTo, BtnLinkYellow} from "@/UI";

const TheHeader = () => {
    return (
        <div className={s.container}>
            <div className={s.leftSubContainer}>
                <Image src={logoMain} alt={'logo'} priority />
                <div className={s.leftLinks}>
                    <BtnLinkTo href={'/'} >Знайти вакансії</BtnLinkTo>
                    <BtnLinkTo href={'/'} >Навчальні курси</BtnLinkTo>
                    <BtnLinkTo href={'/'} >Новини</BtnLinkTo>
                </div>
            </div>
            <div className={s.rightSubContainer}>
                <LanguageSelector />
                <BtnLink href={'/'}>Увійти</BtnLink>
                <BtnLinkYellow href={'/'}>Реєстрація</BtnLinkYellow>
            </div>
        </div>
    );
};

export default TheHeader;