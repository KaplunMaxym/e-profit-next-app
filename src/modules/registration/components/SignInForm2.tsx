'use client';

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import type {FormEventHandler, MouseEventHandler} from "react";
import {registrationFetch} from "@/modules/registration/api/registration";
import {IReg, IRegResponse} from "@/modules/registration/models/IReg";
import Error from "next/error";
import axios, {AxiosResponse} from "axios";

export const SignInForm2 = () => {
    const router = useRouter();
    const test = async () => {
        'use client';
        // e.preventDefault();
        const res = await registrationFetch({
            category_id: '2',
            email: 'vsev.diachun2002@gmail.com',
            password: 'Wertwert1@%',
            password_confirmation: 'Wertwert1@%',
            agreement: 'on'
        } as IReg)

        console.log(res)
    }

    return (
        <>
            <form className="login-form" onSubmit={(e) => test()}>
                <input type="email" name="email" required/>
                <input type="password" name="password" required/>
                <input type="password" name="password_confirmation" required/>
                {/*<input type="submit"/>*/}
                <button type="submit">Sign In</button>
            </form>
            <button onClick={test}>Sign In</button>
        </>
    );

}