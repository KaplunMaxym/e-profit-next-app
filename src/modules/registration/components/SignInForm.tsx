"use client";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import type {FormEventHandler, MouseEventHandler} from "react";
import {registrationFetch} from "@/modules/registration/api/registration";
import {IReg, IRegResponse} from "@/modules/registration/models/IReg";
import Error from "next/error";
import axios, {AxiosResponse} from "axios";
import {bool} from "prop-types";
import {useAppDispatch} from "@/hooks/useAppSelector";
import {userSlice} from "@/store/reducers/UserSlice";

export const SignInForm = () => {
    'use client';
    const router = useRouter();
    const dispatch = useAppDispatch()
    const {setEmailByVerification} = userSlice.actions


    const test = async () => {
        // e.preventDefault();
        try {
            const res = await registrationFetch({
                category_id: 2,
                email: 'vsev.diachun2002@gmail.com',
                password: 'Wertwert1@%',
                password_confirmation: 'Wertwert1@%',
                agreement: 'on'
            } as IReg);
            console.log(res);
        } catch (error) {
            console.error('Registration failed:', error);
        }
    }

    const handleSubmit: FormEventHandler<HTMLFormElement> | undefined = async (event) => {
        'use client';
        event.preventDefault();
        console.log(123);
        const formData = new FormData(event.currentTarget);
        const res = await registrationFetch({
            category_id: 2,
            email: formData.get('email'),
            password: formData.get('password'),
            password_confirmation: formData.get('password_confirmation'),
            agreement: 'on'
        } as IReg)
        console.log(res)

        if (res.data.response.code === 200) {
            dispatch(setEmailByVerification(res.data.response.email))
            router.push('/verification');
        }
    };

    return (
        <form className="login-form" onSubmit={(event) => handleSubmit(event)}>
            <input type="email" name="email" required/>
            <input type="password" name="password" required/>
            <input type="password" name="password_confirmation" required/>
            <button type="submit">Sign In</button>
        </form>
    );
};