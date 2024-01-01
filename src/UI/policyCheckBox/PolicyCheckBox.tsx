import s from '@/UI/policyCheckBox/policyCheckBox.module.scss'
import {FC} from "react";
interface IInput {
    type?: string;
    name?: string;
}
const PolicyCheckBox: FC<IInput> = ({type, name}) => {
    return (
        <div className={s.container}>
            <span className={s.spanInputReminder}>
                <input id={'check'} className={s.inputRemindMe} type={"checkbox"} name={name} />
                <label htmlFor={'check'} className={s.checkText}> Я прочитав і приймаю
                    <span className={s.forgetPassword}> Політику конфіденціальності</span>
                </label>
            </span>
        </div>
    )
};

export default PolicyCheckBox;