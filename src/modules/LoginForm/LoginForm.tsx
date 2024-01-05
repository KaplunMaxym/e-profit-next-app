"use client";
import {useSearchParams, useRouter} from "next/navigation";
import {signIn, useSession} from "next-auth/react";
import {FormEventHandler, useEffect, useState} from "react";
import {
    Input,
    ButtonYellow,
    Label,
    InputReminder,
} from "@/UI";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {FormAuth} from "@/components";
import useValidation from "@/hooks/useValidationHook/useValidationHook";

const LoginForm = () => {
    const [activeSubmitBtn, setActiveSubmitBtn] = useState(true);
    const {errors, validateEmail} = useValidation();
    const router: AppRouterInstance = useRouter();
    const session: any = useSession()
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl');
    const [loading, setLoading] = useState<boolean>(false)

    console.log(callbackUrl)
    useEffect(()=>{
        if(errors.email.correct){
            setActiveSubmitBtn(false)
        }else{
            setActiveSubmitBtn(true)
        }
    }, [errors])
    useEffect(() => {
        if(session?.data?.user?.email?.code === 200){
            if(callbackUrl){
                router.push(callbackUrl);
            }else {
                router.push("/");
            }
        }
    }, [callbackUrl, session, router]);
    console.log(session)
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        setLoading(true)
        const formData: FormData = new FormData(event.currentTarget);
        const response: any = await signIn("credentials", {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false,
        });
        console.log(response)
        setLoading(false)
    };
    return (
        <FormAuth onSubmit={handleSubmit}>
            <Label>Електронна пошта</Label>
            <Label>vsev.diachun2002@gmail.com</Label>
            <Input placeholder={'Введіть логін'} onChange={validateEmail} error={errors.email} type="email" name="email"/>
            <Label>Пароль</Label>
            <Label>Wertwert1@%</Label>
            <Input placeholder={'Введіть пароль'} type="password" name="password"/>
            <InputReminder type='checkbox'/>
            <ButtonYellow loading={loading} type="submit" active={activeSubmitBtn}>Увійти</ButtonYellow>
        </FormAuth>
    );
};

export default LoginForm