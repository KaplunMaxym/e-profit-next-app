import s from "@/UI/electricPole/electricPole.module.scss";
import Image from "next/image";
import {electricPole2} from "@/assets";

const ElectricPole = () => {
    return (
        <div className={s.containerElectricPole}>
            <Image className={s.electricPole} src={electricPole2} alt={'electricPole'} />
        </div>
    )

};

export default ElectricPole;