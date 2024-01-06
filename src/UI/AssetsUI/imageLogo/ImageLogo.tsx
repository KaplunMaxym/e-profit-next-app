import s from "@/UI/AssetsUI/imageLogo/imageLogo.module.scss";
import Image from "next/image";
import {logoMain} from "@/assets";
import type {FC} from "react";

interface IImageLogo {
    marginBottom?: number
}

const ImageLogo: FC<IImageLogo> = ({marginBottom}) => {
    return <div style={{marginBottom: marginBottom}} className={s.logoSvg}><Image src={logoMain} alt={'logo'} priority/></div>
};

export default ImageLogo;