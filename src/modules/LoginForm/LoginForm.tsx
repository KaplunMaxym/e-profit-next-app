"use client";
import { useRouter } from "next/navigation";
import {signIn, useSession} from "next-auth/react";
import {FormEventHandler, useEffect} from "react";
import s from '@/modules/LoginForm/loginForm.module.scss'
import {
    Input,
    ButtonYellow,
    Label,
    InputReminder,
    ButtonTransparent,
    ContainerAuth,
    SubContainerAuth,
    ChildSubContainerAuth,
    ImageLogo,
    ElectricPole,
    MainText, FormAuth
} from "@/UI";
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
        <FormAuth onSubmit={handleSubmit}>
            <Label>Електронна пошта</Label>
            <Label>vsev.diachun2002@gmail.com</Label>
            <Input type="email" name="email"/>
            <Label>Пароль</Label>
            <Label>Wertwert1@%</Label>
            <Input type="password" name="password"/>
            <InputReminder type='checkbox'/>
            <ButtonYellow type="submit">Увійти</ButtonYellow>
        </FormAuth>

    );
};

export default LoginForm