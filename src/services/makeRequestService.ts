import axios from "axios";
import {getServerSession} from "next-auth";
import {authConfig} from "@/configs/auth";

export const makeRequestService = async (method: string, paramUrl:string, body: object|null = null) =>{
    const baseURL = process.env.BASE_URL
    const apiKey =  process.env.API_KEY
    const session: any = await getServerSession(authConfig)
    const token: string|null  = (session?.user?.email.token) ?? null;
    const headers = {
        'api-key': apiKey,
        'Content-Type': 'application/json',
        'token': token
    };
    if(method === "POST"){
        const res = await axios.post(
            baseURL + paramUrl,
            body,
            {headers},
        );
        return res.data.response
    }
}