'use client'
import {registrationFetch} from "@/modules/SignInForm/api/registration";
import {IReg} from "@/modules/SignInForm/models/IReg";
import {useState} from "react";


export const useRegHook = async (event: any) => {
    const [loading, setLoading] = useState<boolean>(true)
    setLoading(true)
    const formData = new FormData(event.currentTarget);
    const res = await registrationFetch({
        category_id: formData.get('categories'),
        email: formData.get('email'),
        password: formData.get('password'),
        password_confirmation: formData.get('password_confirmation'),
        agreement: formData.get('policy_checkbox')
    } as IReg)
    setLoading(false)
    return {res, loading}
}