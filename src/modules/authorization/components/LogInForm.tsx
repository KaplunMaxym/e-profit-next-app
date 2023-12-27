"use client";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import type { FormEventHandler } from "react";
import Logo from "@/modules/authorization/assets/svg/Logo";
import s from '@/modules/authorization/styles/auth.module.scss'

export const LogInForm = () => {
    const router = useRouter();

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const response = await signIn("credentials", {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false,
        });
        if (response) {
            console.log(response)
            router.push("/");
        }
    };

    return (
        <div className={s.container}>
            <div className={s.container__div}>
                <Logo className={s.logoSvg} />
                <div className={s.textEnterToSite}>Увійдіть на сайт</div>
                <form className={s.authForm} onSubmit={handleSubmit}>
                    <input type="email" name="email" required/>
                    <input type="password" name="password" required/>
                    <button type="submit">Увійти</button>
                </form>
            </div>
        </div>
    );
};