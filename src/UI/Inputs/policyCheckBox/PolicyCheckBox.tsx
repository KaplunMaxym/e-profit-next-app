import s from '@/UI/Inputs/policyCheckBox/policyCheckBox.module.scss'
import React, {FC} from "react";
import Link from "next/link";
interface IInput {
    type?: string;
    name?: string;
    onChange?: any;
}
const PolicyCheckBox: FC<IInput> = ({type, name, onChange}) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        onChange(event.target.value);
    };
    return (
        <div className={s.container}>
            <span className={s.spanInputReminder}>
                <input id={'check'} className={s.inputRemindMe} type={"checkbox"} name={name} onChange={handleInputChange} />
                <label htmlFor={'check'} className={s.checkText}> Я прочитав і приймаю
                    <Link
                        className={s.forgetPassword}
                        href={'https://www.eprofi.in.ua/privacyPolicy'}
                    >
                        Політику конфіденціальності
                    </Link>
                </label>
            </span>
        </div>
    )
};

export default PolicyCheckBox;