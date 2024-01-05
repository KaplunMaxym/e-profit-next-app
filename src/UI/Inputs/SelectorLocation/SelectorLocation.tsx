import s from '@/UI/Inputs/SelectorLocation/SelectorLocation.module.scss'
import Image from "next/image";
import {locationSearch, selectArrow,} from "@/assets";

const SelectorLocation = ({data}: any) => {
    return (
        <div className={s.container}>
            <Image src={locationSearch} alt={'loc'} />

            <div className={s.selectContainer}>
                <div className={s.selectHeader}>
                    <span>Виберіть область</span>
                    <Image src={selectArrow} alt={'arrow'}/>
                </div>
                <div className={s.selectsContainer}>
                    {data && data.map((item: any) => <div className={s.selectItem} key={item.id} id={item.id}>{item.city}</div>)}
                </div>
            </div>

            {/*<select className={s.select}>*/}
            {/*    {data && data.map((item: any) => <option className={s.option} key={item.id} id={item.id}>{item.city}</option>)}*/}
            {/*    /!*{area && area.map(item => <option className={s.option} key={item.id} id={item.id}>{item.city}</option>)}*!/*/}
            {/*</select>*/}
        </div>
    );
};

export default SelectorLocation;