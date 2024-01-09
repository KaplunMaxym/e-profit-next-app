"use client"
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { carouselImages } from "@/assets";
import s from '@/modules/CarouselMain/carouselMain.module.scss';
import BtnActionPrimary from "@/UI/Buttons/btnActionPrimary/btnActionPrimary";
import CustomArrows from "@/modules/CarouselMain/CarouselComponents/CustomArrows";
import CustomIndicator from "@/modules/CarouselMain/CarouselComponents/CustomIndicator";

const carouselInterval = 3000;
const CarouselMain = () => {
    const carouselSettings = {
        infiniteLoop: true,
        interval: carouselInterval,
        dynamicHeight: true,
        autoPlay: true,
        showThumbs: false,
        showStatus: false,
        renderIndicator: (clickHandler: (e: React.MouseEvent) => void, isSelected: boolean, index: number) => (
            <CustomIndicator isSelected={isSelected} onClick={(e) => clickHandler(e)} key={index} />
        ),
        renderArrowPrev: (onClickHandler: () => void) =>
            <CustomArrows
                onClickHandler={onClickHandler}
                mirrored={true}
                imgArrow={carouselImages.carouselArrow}
            />,
        renderArrowNext: (onClickHandler: () => void) =>
            <CustomArrows
                onClickHandler={onClickHandler}
                mirrored={false}
                imgArrow={carouselImages.carouselArrow}
            />,
        swipeable: true,
        emulateTouch: true,
    }
    return (
        <div className={s.carouselContainer}>
            <Carousel {...carouselSettings as any}>
                <div className={s.carouselSlide}>
                    <div className={s.slideContentContainer}>
                        <h2>Знайдіть роботу в компанії, яка впроваджує енергоефективні технології </h2>
                        <BtnActionPrimary href={'/'}>
                            Пошук роботи
                        </BtnActionPrimary>
                    </div>
                    <Image
                        className={s.slideBackImage}
                        src={carouselImages.cr1}
                        alt={'none'}
                    />
                </div>
                <div className={s.carouselSlide}>
                    <div className={s.slideContentContainer}>
                        <h2>Підберіть кваліфікованих працівників чи випускників навчальних центрів у вашу компанію </h2>
                        <BtnActionPrimary href={'/'}>
                            Пошук роботи
                        </BtnActionPrimary>
                    </div>
                    <Image
                        className={s.slideBackImage}
                        src={carouselImages.cr2}
                        alt={'none'}
                    />
                </div>
                <div className={s.carouselSlide}>
                    <div className={s.slideContentContainer}>
                        <h2>Шукайте навчальні програми та навчальні центри, у енергетичній сфері</h2>
                        <BtnActionPrimary href={'/'}>
                            Пошук роботи
                        </BtnActionPrimary>
                    </div>
                    <Image
                        className={s.slideBackImage}
                        src={carouselImages.cr3}
                        alt={'none'}
                    />
                </div>
            </Carousel>
        </div>
    );
};

export default CarouselMain;