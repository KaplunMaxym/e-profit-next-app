"use client";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import type { FormEventHandler } from "react";
import s from '@/modules/LoginForm/loginForm.module.scss'
import {Input, Button, Label, InputReminder} from "@/UI";
import {logoMain} from '@/assets'
import Image from "next/image";

const LoginForm = () => {
    const router = useRouter();

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const response: any = await signIn("credentials", {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false,
        });
        console.log(response)
        if (response.ok === true) {
            console.log(response)
            router.push("/");
        }
    };

    return (
        <div className={s.container}>
            <div className={s.container__div}>
                <div className={s.logoSvg}><Image src={logoMain} alt={'logo'} priority /></div>
                <div className={s.textEnterToSite}>Увійдіть на сайт</div>
                <form className={s.authForm} onSubmit={handleSubmit}>
                    <Label>Електронна пошта</Label>
                    <Input type="email" name="email"/>
                    <Label>Пароль</Label>
                    <Input type="password" name="password"/>
                    <InputReminder type='checkbox'/>
                    <Button type="submit" color={'#FFF135'}>Увійти</Button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm