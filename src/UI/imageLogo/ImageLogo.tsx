import s from "@/UI/imageLogo/imageLogo.module.scss";
import Image from "next/image";
import {logoMain} from "@/assets";
import {FC} from "react";

interface IImageLogo {
    marginBottom?: number
}

const ImageLogo: FC<IImageLogo> = ({marginBottom}) => {
    return <div style={{marginBottom: marginBottom}} className={s.logoSvg}><Image src={logoMain} alt={'logo'} priority/></div>
};

export default ImageLogo;