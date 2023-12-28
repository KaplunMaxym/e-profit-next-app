import axios from "axios";

export const makeRequestService = async (method: string, paramUrl:string, headers: object, body: object|null = null) =>{
    const baseURL = process.env.BASE_URL
    const apiKey =  process.env.API_KEY

    if(method === "POST"){
        const res = await axios.post(
            baseURL + paramUrl,
            body,
            {headers},
        );
        return res.data.response
    }
}