import s from '@/UI/Inputs/digitCode/digitCode.module.scss'
import type {FC} from "react";
interface IInput {
    name?: string;
}
const DigitCode: FC<IInput> = ({name}) => {
    return <input
        className={s.input}
        type={"text"}
        name={name}
        required
        maxLength={6}
    />
};

export default DigitCode;