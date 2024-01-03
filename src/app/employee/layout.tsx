import type {FC, ReactNode} from 'react';
import TheHeader from "@/modules/TheHeader/TheHeader";

interface ILayaut {
    children: ReactNode;
}
const Layout: FC<ILayaut> = ({children}) => {
    return (
        <div>
            <TheHeader />
            {children}
        </div>
    );
};

export default Layout;