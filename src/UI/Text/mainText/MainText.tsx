import s from "@/UI/Text/mainText/mainText.module.scss";
import type {FC, ReactNode} from "react";

interface IMainText {
    children: ReactNode;
    eprofi?: boolean;
}
const MainText: FC<IMainText> = (
    {
        eprofi,
        children
    }) => {
    return <div
        className={s.textEnterToSite}
    >
        {children}
        {eprofi && <span style={{fontWeight: 600, marginLeft: 6}}> E-Profi</span>}
    </div>
};

export default MainText;