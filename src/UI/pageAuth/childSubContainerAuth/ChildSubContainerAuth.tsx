import s from "@/UI/pageAuth/childSubContainerAuth/childSubContainerAuth.module.scss";
import type {FC, ReactNode} from "react";

interface IChildSubContainerAuth {
    children?: ReactNode;
}
const ChildSubContainerAuth: FC<IChildSubContainerAuth> = ({children}) => {
    return (
        <div className={s.childSubContainerAuth}>
            {children}
        </div>
    );
};

export default ChildSubContainerAuth;