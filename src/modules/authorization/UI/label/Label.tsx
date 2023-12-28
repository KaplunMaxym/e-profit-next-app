import {FC, ReactNode} from 'react';
import s from '@/modules/authorization/UI/label/label.module.scss';

interface ILabel {
    children: ReactNode;
}
const Label: FC<ILabel> = ({children}) => {
    return <label className={s.label}>{children}</label>
};

export default Label;