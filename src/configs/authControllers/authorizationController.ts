import {ILog} from "@/modules/authorization/models/ILog";
import axios from "axios";
import {Interface, ICredentialsAuth} from "@/configs/models/Interface";

export const authorizationController = async ({credentials}: {credentials: ICredentialsAuth}) => {
    const authorizationFetch = async ({email, password}: ILog) => {
        const headers = {
            'api-key': 'd4d12fb2a814682bbdc0cba801cb5919edf1273a61007d82ca0bf331c59d7986',
            'Content-Type': 'application/json',
        };
        return await axios.post(
            'http://127.0.0.1:8000/api/login-web',
            {email, password},
            {headers},
        );
    }

    const res = await authorizationFetch({
        email: credentials.email,
        password: credentials.password,
    } as ILog)

    if (res.data.response.code === 200) {
        const callBackRes = {
            email: res.data.response
        }
        return callBackRes as Interface;
    }
}