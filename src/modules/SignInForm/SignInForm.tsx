"use client";
import { useRouter } from "next/navigation";
import type {FormEventHandler, MouseEventHandler} from "react";
import {registrationFetch} from "@/modules/SignInForm/api/registration";
import {IReg} from "@/modules/SignInForm/models/IReg";
import {useAppDispatch} from "@/hooks/useAppSelector";
import {userSlice} from "@/store/reducers/UserSlice";
import {ButtonYellow, Input, InputReminder, Label, PolicyCheckBox} from "@/UI";
import s from '@/modules/SignInForm/signInForm.module.scss'
import {logoMain} from '@/assets'
import Image from "next/image";
import Category from "../../UI/category/Category";

export const SignInForm = () => {
    'use client';
    const router = useRouter();
    const dispatch = useAppDispatch()
    const {setEmailByVerification} = userSlice.actions

    const handleSubmit: FormEventHandler<HTMLFormElement> | undefined = async (event) => {
        'use client';
        event.preventDefault();
        console.log(123);
        const formData = new FormData(event.currentTarget);
        const res = await registrationFetch({
            category_id: 2,
            email: formData.get('email'),
            password: formData.get('password'),
            password_confirmation: formData.get('password_confirmation'),
            agreement: 'on'
        } as IReg)
        console.log(res)

        if (res.data.response.code === 200) {
            dispatch(setEmailByVerification(res.data.response.email))
            router.push('/verification');
        }
    };
    const data: {id: number, category: string}[] = [
        {id: 1, category: 'Робітник'},
        {id: 2, category: 'Компанія'},
        {id: 3, category: 'Навчальний центр'},
    ]

    return (
        <>
            <div className={s.container}>
                <div className={s.container__div}>
                    <div className={s.logoSvg}><Image src={logoMain} alt={'logo'} priority/></div>
                    <div className={s.textEnterToSite}>Створіть профіль</div>
                    <form className={s.authForm} onSubmit={handleSubmit}>
                        <Label>Категорії</Label>
                        <Category data={data} />
                        <Label>Електронна пошта</Label>
                        <Input type="email" name="email"/>
                        <Label>Пароль</Label>
                        <Input type="password" name="password"/>
                        <Label>Підтвердьте пароль</Label>
                        <Input type="password" name="password"/>
                        {/*<InputReminder type='checkbox'/>*/}
                        <PolicyCheckBox />
                        <ButtonYellow type="submit">Зареєструватися</ButtonYellow>
                        {/*<ButtonTransparent>Зареєструватися</ButtonTransparent>*/}
                    </form>

                </div>
            </div>
            <form className="login-form" onSubmit={(event) => handleSubmit(event)}>
                <input type="email" name="email" required/>
                <input type="password" name="password" required/>
                <input type="password" name="password_confirmation" required/>
                <button type="submit">Sign In</button>
            </form>
        </>
    );
};