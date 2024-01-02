"use client";
import { useRouter } from "next/navigation";
import type {FormEventHandler} from "react";
import {registrationFetch} from "@/modules/SignInForm/api/registration";
import {IReg} from "@/modules/SignInForm/models/IReg";
import {useAppDispatch} from "@/hooks/useAppSelector";
import {userSlice} from "@/store/reducers/UserSlice";
import {ButtonYellow, Input, Label, PolicyCheckBox, Category, MainText, ImageLogo, ButtonTransparent, ElectricPole, ContainerAuth, SubContainerAuth, ChildSubContainerAuth, FormAuth} from "@/UI";

export const SignInForm = () => {
    'use client';
    const router = useRouter();
    const dispatch = useAppDispatch()
    const {setEmailByVerification} = userSlice.actions

    const handleSubmit: FormEventHandler<HTMLFormElement> | undefined = async (event) => {
        'use client';
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const res = await registrationFetch({
            category_id: formData.get('categories'),
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
        <ContainerAuth>
            <SubContainerAuth>
                <ChildSubContainerAuth>
                    <ImageLogo marginBottom={16} />
                    <MainText fontWeight={400} fontSize={26} marginBottom={31} eprofi={true}>Ласкаво просимо до</MainText>
                    <MainText fontSize={20}>Створіть профіль</MainText>
                    <FormAuth onSubmit={(event) => handleSubmit(event)}>
                        <Label>Категорії</Label>
                        <Category name={'categories'} data={data} />
                        <Label>Електронна пошта</Label>
                        <Input type="email" name="email"/>
                        <Label>Wertwert1@%</Label>
                        <Label>Пароль</Label>
                        <Input type="password" name="password"/>
                        <Label>Підтвердьте пароль</Label>
                        <Input type="password" name="password_confirmation"/>
                        <PolicyCheckBox />
                        <ButtonYellow type="submit">Зареєструватися</ButtonYellow>
                    </FormAuth>
                    <ButtonTransparent navigate={'/authorization'}>Я вже зареєстрований</ButtonTransparent>
                </ChildSubContainerAuth>
            </SubContainerAuth>
            <ElectricPole />
        </ContainerAuth>
    );
};