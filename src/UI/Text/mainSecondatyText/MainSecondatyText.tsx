import s from "@/UI/Text/mainSecondatyText/mainSecondatyText.module.scss";
import type {FC, ReactNode} from "react";

interface IMainText {
    marginBottom?: number;
    children: ReactNode;
    eprofi?: boolean;
    fontWeight?: number;
}
const MainSecondatyText: FC<IMainText> = (
    {
        marginBottom,
        eprofi,
        fontWeight,
        children
    }) => {
    return <div
        className={s.textEnterToSite}
        style={{fontWeight: fontWeight, marginBottom: marginBottom}}
    >
        {children}
        {eprofi && <span style={{fontWeight: 600, marginLeft: 6}}> E-Profi</span>}
    </div>
};

export default MainSecondatyText;