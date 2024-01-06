import s from "@/components/Form/formAuth/formAuth.module.scss";
import type {FC, FormEventHandler, ReactNode} from "react";

interface IFormAuth {
    onSubmit?: FormEventHandler<HTMLFormElement>;
    children?: ReactNode;
}
const FormAuth: FC<IFormAuth> = ({onSubmit, children}) => {
    return (
        <form className={s.authForm} onSubmit={onSubmit}>
            {children}
        </form>
    );
};

export default FormAuth;