'use client';
import {ILog} from "@/models/models/ILog";
import axios from "axios";

export const authorizationFetch = async ({email, password}: ILog) => {
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