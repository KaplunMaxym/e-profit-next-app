"use client";
import { useRouter } from "next/navigation";
import {signIn, useSession} from "next-auth/react";
import {FormEventHandler, useEffect} from "react";
import s from '@/modules/LoginForm/loginForm.module.scss'
import {Input, ButtonYellow, Label, InputReminder, ButtonTransparent} from "@/UI";
import {logoMain} from '@/assets'
import Image from "next/image";

const LoginForm = () => {
    const router = useRouter();
    const session: any = useSession()
    // if(session?.data?.user?.email?.category_id === 3){
    //     router.push("/education");
    // }
    useEffect(() => {
        if(session?.data?.user?.email?.code === 200){
            router.push("/");
        }
    }, [session, router]);



    console.log(session)
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
            // router.push("/");
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
                    <ButtonYellow type="submit">Увійти</ButtonYellow>
                    {/*<ButtonTransparent>Зареєструватися</ButtonTransparent>*/}
                </form>

            </div>
        </div>
    );
};

export default LoginForm