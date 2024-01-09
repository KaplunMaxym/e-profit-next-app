import {FC, ReactNode} from "react";
import s from '@/UI/Layouts/Page/DefaultPage/pageDefault.module.scss'

interface IDefaultPage {
    children: ReactNode;

}

const MainPageLayout: FC<IDefaultPage> = ({children}) => {
    return (
        <div className={s.container}>
            {children}
        </div>
    );
};

export default MainPageLayout;