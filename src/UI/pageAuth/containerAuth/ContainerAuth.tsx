import s from "@/UI/pageAuth/containerAuth/containerAuth.module.scss";
import type {FC, ReactNode} from "react";

interface IContainerAuth {
    children?: ReactNode
}
const ContainerAuth:FC<IContainerAuth> = ({children}) => {
    return (
        <div className={s.containerAuth}>
            {children}
        </div>
    );
};

export default ContainerAuth;