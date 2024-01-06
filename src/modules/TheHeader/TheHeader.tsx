import s from '@/modules/TheHeader/theHeader.module.scss'
import Image from "next/image";
import {logoMain} from "@/assets";
import {LanguageSelector} from "@/components";
import {BtnLink} from "@/UI";

const TheHeader = () => {
    return (
        <div className={s.container}>
            <div className={s.leftSubContainer}>
                <Image src={logoMain} alt={'logo'} priority />
                <div className={s.leftLinks}>
                    <BtnLink fontSize={18} href={'/'} >Знайти вакансії</BtnLink>
                    <BtnLink fontSize={18} href={'/'} >Навчальні курси</BtnLink>
                    <BtnLink fontSize={18} href={'/'} >Новини</BtnLink>
                </div>
            </div>
            <div className={s.rightSubContainer}>
                <LanguageSelector />
                <BtnLink fontSize={18} href={'/'}>Увійти</BtnLink>
                <BtnLink fontSize={18} yellow href={'/'}>Реєстрація</BtnLink>
            </div>
        </div>
    );
};

export default TheHeader;