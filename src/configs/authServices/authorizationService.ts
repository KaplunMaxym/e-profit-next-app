import {ILogResponse} from "@/models/models/ILog";
import {ICredentialsAuth} from "@/models/config/Interface";
import {makeRequestService} from "@/services/makeRequestService";
export const authorizationService = async ({credentials}: {credentials: ICredentialsAuth}) => {
    const res: ILogResponse = await makeRequestService(
        "POST",
        "/api/login-web",
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