"use client";
import {useSearchParams, useRouter} from "next/navigation";
import {signIn, useSession} from "next-auth/react";
import {FormEventHandler, useEffect} from "react";
import {
    Input,
    ButtonYellow,
    Label,
    InputReminder,
} from "@/UI";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import FormAuth from "@/components/Form/formAuth/FormAuth";

const LoginForm = () => {
    const router: AppRouterInstance = useRouter();
    const session: any = useSession()
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl');
    console.log(callbackUrl)
    useEffect(() => {
        if(session?.data?.user?.email?.code === 200){
            if(callbackUrl){
                router.push(callbackUrl);
            }else {
                router.push("/");
            }
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