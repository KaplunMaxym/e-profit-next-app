import type {FC, ReactNode} from 'react';
import s from '@/UI/Text/label/label.module.scss';

interface ILabel {
    children: ReactNode;
    center?: boolean
}
const Label: FC<ILabel> = ({children, center}) => {
    return <label className={`${s.label} ${center && s.center}`}>{children}</label>
};

export default Label;