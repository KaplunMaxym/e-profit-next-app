import s from "@/UI/AssetsUI/electricPole/electricPole.module.scss";
import Image from "next/image";
import {electricPole2} from "@/assets";

const ElectricPole = () => {
    return (
        <div className={s.containerElectricPole}>
            <Image className={s.electricPole} src={electricPole2} alt={'electricPole'} priority />
        </div>
    )

};

export default ElectricPole;