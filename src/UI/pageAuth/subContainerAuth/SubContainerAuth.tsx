import s from "@/UI/pageAuth/subContainerAuth/subContainerAuth.module.scss";
import type {FC, ReactNode} from "react";

interface ISubContainerAuth {
    children?: ReactNode;
}
const SubContainerAuth:FC<ISubContainerAuth> = ({children}) => {
    return (
        <div className={s.subContainerAuth}>
            {children}
        </div>
    );
};

export default SubContainerAuth;