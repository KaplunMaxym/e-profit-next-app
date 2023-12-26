"use client";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import type {FormEventHandler, MouseEventHandler} from "react";
import {registrationFetch} from "@/modules/registration/api/registration";
import {IReg, IRegResponse} from "@/modules/registration/models/IReg";
import Error from "next/error";
import axios, {AxiosResponse} from "axios";

export const SignInForm = () => {
    const router = useRouter();

    const test = async () => {
        // e.preventDefault();
        try {
            const res = await registrationFetch({
                category_id: '2',
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
    // const test2 = setTimeout(() => {
    //     test()
    // }, 1)




    // registrationFetch({
    //     category_id: '2',
    //     email: 'vsev.diachun2002@gmail.com',
    //     password: 'Wertwert1@%',
    //     password_confirmation: 'Wertwert1@%',
    //     agreement: 'on'
    // } as IReg).then(data => console.log(JSON.parse(data as any)))

    // const res: AxiosResponse<IRegResponse, IReg> = await registrationFetch({
    //     category_id: 2,
    //     email: 'vsev.diachun2002@gmail.com',
    //     password: 'Wertwert1@%',
    //     password_confirmation: 'Wertwert1@%',
    //     agreement: 'on'
    // } as IReg)
    // console.log(res)

    // const url = 'http://127.0.0.1:8000/api/register-web';
    // const apiKey = 'd4d12fb2a814682bbdc0cba801cb5919edf1273a61007d82ca0bf331c59d7986';
    //
    // const headers = {
    //     'api-key': apiKey,
    //     'Content-Type': 'application/json',
    // };
    //
    // const body = {
    //     category_id: '2',
    //     email: 'vsev.diachun2002@gmail.com',
    //     password: 'Wertwert1@%',
    //     password_confirmation: 'Wertwert1@%',
    //     agreement: 'on',
    // };
    //
    // try {
    //     const response = await fetch(url, {
    //         method: 'POST',
    //         headers: headers,
    //         body: JSON.stringify(body),
    //     }as any);
    //
    //
    //
    //     const data = await response.json();
    //     console.log(data);
    // } catch (error) {
    //     console.error(error);
    // }
    const handleSubmit:   FormEventHandler<HTMLFormElement> | undefined = (e) => {
        e.preventDefault();
        console.log(123);
        // const formData = new FormData(event.currentTarget);
        // registrationFetch({
        //     category_id: '2',
        //     email: 'vsev.diachun2002@gmail.com',
        //     password: 'Wertwert1@%',
        //     password_confirmation: 'Wertwert1@%',
        //     agreement: 'on'
        // } as IReg).then(data => console.log(JSON.parse(data as any)))

        // registrationFetch({
        //     category_id: '2',
        //     email: 'vsev.diachun2002@gmail.com',
        //     password: 'Wertwert1@%',
        //     password_confirmation: 'Wertwert1@%',
        //     agreement: 'on'
        // } as IReg).then(data => console.log(data))


        // const url = 'http://127.0.0.1:8000/api/register-web';
        // const apiKey = 'd4d12fb2a814682bbdc0cba801cb5919edf1273a61007d82ca0bf331c59d7986';
        //
        // const headers = {
        //     'api-key': apiKey,
        //     'Content-Type': 'application/json',
        // };
        //
        // const body = {
        //     category_id: '2',
        //     email: 'vsev.diachun2002@gmail.com',
        //     password: 'Wertwert1@%',
        //     password_confirmation: 'Wertwert1@%',
        //     agreement: 'on',
        // };
        //
        // try {
        //     const response = await fetch(url, {
        //         method: 'POST',
        //         headers: headers,
        //         body: JSON.stringify(body),
        //     }as any);
        //
        //
        //
        //     const data = await response.json();
        //     console.log(data);
        // } catch (error) {
        //     console.error(error);
        // }

        // const url = 'http://127.0.0.1:8000/api/register-web';
        // const apiKey = 'd4d12fb2a814682bbdc0cba801cb5919edf1273a61007d82ca0bf331c59d7986';
        //
        // const headers = {
        //     'api-key': apiKey,
        //     'Content-Type': 'application/json',
        // };
        //
        // const response = await fetch(url, {
        //     method: "POST",
        //     headers: headers,
        //     body: JSON.stringify({
        //         category_id: 2,
        //         email: 'vsev.diachun2002@gmail.com',
        //         password: 'Wertwert1@%',
        //         password_confirmation: 'Wertwert1@%',
        //         agreement: 'on'})
        // })
        // console.log(response)

        // const res: AxiosResponse<IRegResponse, IReg> = await registrationFetch({
        //     category_id: 2,
        //     email: formData.get("email"),
        //     password: formData.get("password"),
        //     password_confirmation: formData.get("password_confirmation"),
        //     agreement: 'on'
        // } as IReg)
        // console.log(res)



        // if (res) {
        //     // router.push({
        //     //     pathname: `/verification`,
        //     //     query: { data: JSON.stringify(res) },
        //     // } as any);
        //     console.log(res)
        // } else {
        //     console.error('Помилка:');
        // }
    };

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
};