import React, {MouseEventHandler} from 'react';
import s from "@/modules/CarouselMain/carouselMain.module.scss";

const CustomIndicator = ({ isSelected, onClick }: {isSelected: boolean, onClick: MouseEventHandler<HTMLSpanElement>}) => {
    const selectedIndicator = `${s.customIndicator} ${isSelected ? s.customIndicatorSelected : ''}`
    return(
        <span
            className={selectedIndicator}
            onClick={(e) => onClick(e)}
        >

        </span>
    );
}

export default CustomIndicator;