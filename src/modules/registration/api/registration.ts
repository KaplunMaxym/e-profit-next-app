'use client';
import {IReg} from "@/modules/registration/models/IReg";
import axios from "axios";

export const registrationFetch = async ({category_id, email, password, password_confirmation, agreement}: IReg) => {
    const headers = {
        'api-key': 'd4d12fb2a814682bbdc0cba801cb5919edf1273a61007d82ca0bf331c59d7986',
        'Content-Type': 'application/json',
    };
    return await axios.post(
        'http://127.0.0.1:8000/api/register-web',
        {category_id, email, password, password_confirmation, agreement},
        {headers},
    );

}