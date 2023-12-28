import {ILogResponse} from "@/modules/authorization/models/ILog";
import {ICredentialsAuth} from "@/configs/models/Interface";
import {makeRequestService} from "@/services/makeRequestService";

export const authorizationService = async ({credentials}: {credentials: ICredentialsAuth}) => {
    const apiKey = process.env.API_KEY
    const headers = {
        'api-key': apiKey,
        'Content-Type': 'application/json',
    };
    const res: ILogResponse = await makeRequestService(
        "POST",
        "/api/login-web",
        headers,
        {
            email: credentials.email, password: credentials.password
        }
    )

    if (res && res.code === 200) {
        const callBackRes: {email: ILogResponse} = {
            email: res
        }
        return callBackRes;
    }
}