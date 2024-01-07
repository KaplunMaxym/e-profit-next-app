import type {FC, ReactNode} from 'react';
import {TheHeader} from "@/modules";

interface ILayout {
    children: ReactNode;
}
const Layout: FC<ILayout> = ({children}) => {
    return (
        <div>
            <TheHeader />
            {children}
        </div>
    );
};

export default Layout;