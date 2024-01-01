"use client";
import { useRouter } from "next/navigation";
import {signIn, useSession} from "next-auth/react";
import {FormEventHandler, useEffect} from "react";
import s from '@/modules/LoginForm/loginForm.module.scss'
import {Input, ButtonYellow, Label, InputReminder, ButtonTransparent} from "@/UI";
import {electricPole} from '@/assets'
import Image from "next/image";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import ImageLogo from "../../UI/imageLogo/ImageLogo";

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
            <div className={s.containerLog}>
                <div className={s.containerLog__div}>
                    <ImageLogo marginBottom={80} />
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
                    <ButtonTransparent navigate={'/registration'}>Зареєструватися</ButtonTransparent>
                </div>

            </div>
            <div className={s.containerElectricPole}>
                <Image className={s.electricPole} src={electricPole} alt={'electricPole'} priority={true}/>
            </div>
        </div>
    );
};

export default LoginForm