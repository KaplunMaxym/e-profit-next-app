"use client";
import { useRouter } from "next/navigation";
import {signIn, useSession} from "next-auth/react";
import {FormEventHandler, useEffect} from "react";
import s from '@/modules/LoginForm/loginForm.module.scss'
import {Input, ButtonYellow, Label, InputReminder, ButtonTransparent} from "@/UI";
import {logoMain} from '@/assets'
import Image from "next/image";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

const LoginForm = () => {
    const router: AppRouterInstance = useRouter();
    const session: any = useSession()
    useEffect(() => {
        if(session?.data?.user?.email?.code === 200){
            router.push("/");
        }
    }, [session, router]);
    console.log(session)
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        const formData: FormData = new FormData(event.currentTarget);
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
                    <Label>vsev.diachun2002@gmail.com</Label>
                    <Input type="email" name="email"/>
                    <Label>Пароль</Label>
                    <Label>Wertwert1@%</Label>
                    <Input type="password" name="password"/>
                    <InputReminder type='checkbox'/>
                    <ButtonYellow type="submit">Увійти</ButtonYellow>
                </form>
                <ButtonTransparent>Зареєструватися</ButtonTransparent>
            </div>
        </div>
    );
};

export default LoginForm