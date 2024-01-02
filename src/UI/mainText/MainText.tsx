import s from "@/UI/mainText/mainText.module.scss";
import type {FC, ReactNode} from "react";

interface IMainText {
    fontSize?: number;
    marginBottom?: number;
    children: ReactNode;
    eprofi?: boolean;
    fontWeight?: number;
}
const MainText: FC<IMainText> = (
    {
        fontSize,
        marginBottom,
        eprofi,
        fontWeight,
        children
    }) => {
    return <div
        className={s.textEnterToSite}
        style={{fontSize: fontSize, fontWeight: fontWeight, marginBottom: marginBottom}}
    >
        {children}
        {eprofi && <span style={{fontWeight: 600, marginLeft: 6}}> E-Profi</span>}
    </div>
};

export default MainText;