import s from '@/UI/Inputs/SelectorLocation/SelectorLocation.module.scss'
import Image from "next/image";
import {locationSearch} from "@/assets";

const SelectorLocation = (data: any) => {
    return (
        <div className={s.container}>
            <Image src={locationSearch} alt={'loc'} />
            <select className={s.select}>
                {data && data.map((item: any) => <option className={s.option} key={item.id} id={item.id}>{item.city}</option>)}
                {/*{area && area.map(item => <option className={s.option} key={item.id} id={item.id}>{item.city}</option>)}*/}
            </select>
        </div>
    );
};

export default SelectorLocation;