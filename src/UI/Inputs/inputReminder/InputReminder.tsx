import s from '@/UI/Inputs/inputReminder/inputReminder.module.scss'
import type {FC} from "react";
interface IInput {
    type: string;
    name?: string;
}
const InputReminder: FC<IInput> = ({type, name}) => {
    return (
        <div className={s.container}>
            <span className={s.spanInputReminder}>
                <input id={'check'} className={s.inputRemindMe} type={type} name={name} />
                <label className={s.label} htmlFor={'check'}>Запамʼятати мене</label>
            </span>
            <span className={s.forgetPassword}>
                Забули пароль?
            </span>
        </div>
    )
};

export default InputReminder;