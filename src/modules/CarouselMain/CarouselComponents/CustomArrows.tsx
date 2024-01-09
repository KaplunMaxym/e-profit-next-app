import React from 'react';
import s from "@/modules/CarouselMain/carouselMain.module.scss";
import Image from "next/image";

const CustomArrows = ({ onClickHandler, imgArrow, mirrored}: any) => {
    const arrowClass = `${s.arrow} ${mirrored ? s.arrowLeft : s.arrowRight}`;
    return (
        <div onClick={onClickHandler} className={arrowClass}>
            <Image src={imgArrow} alt={'>'}/>
        </div>
    );
};
export default CustomArrows;