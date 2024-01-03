"use client";
import { useRouter } from "next/navigation";
import type {FormEventHandler, SetStateAction} from "react";
import {registrationFetch} from "@/modules/SignInForm/api/registration";
import {IReg} from "@/modules/SignInForm/models/IReg";
import {useAppDispatch} from "@/hooks/useAppSelector";
import {userSlice} from "@/store/reducers/UserSlice";
import {ButtonYellow, Input, Label, PolicyCheckBox, Category} from "@/UI";
import FormAuth from "@/components/Form/formAuth/FormAuth";
import useValidation from "@/hooks/useValidationHook/useValidationHook";
import {useEffect, useState} from "react";

export const SignInForm = () => {
    const [selectedCategory, setSelectedCategory] = useState('0');
    const [policyAgreement, setPolicyAgreement] = useState('');
    const [activeSubmitBtn, setActiveSubmitBtn] = useState(true);
    const [loading, setLoading] = useState<boolean>(false)

    console.log(policyAgreement)
    const router = useRouter();
    const dispatch = useAppDispatch()
    const {setEmailByVerification} = userSlice.actions
    const {errors, validateEmail, validatePassword, validatePasswordConfirmation} = useValidation();
    useEffect(()=>{
        if(selectedCategory !== "0" && policyAgreement === 'on' && errors.email.correct && errors.pas.correct && errors.pasConf.correct){
            setActiveSubmitBtn(false)
        }else{
            setActiveSubmitBtn(true)
        }
    }, [selectedCategory, policyAgreement, errors])
    console.log(errors)

    const handleSubmit: FormEventHandler<HTMLFormElement> | undefined = async (event) => {
        event.preventDefault();
        setLoading(true)
        const formData = new FormData(event.currentTarget);
        const res = await registrationFetch({
            category_id: formData.get('categories'),
            email: formData.get('email'),
            password: formData.get('password'),
            password_confirmation: formData.get('password_confirmation'),
            agreement: formData.get('policy_checkbox')
        } as IReg)
        console.log(res)

        if (res.data.response.code === 200) {
            dispatch(setEmailByVerification(res.data.response.email))
            router.push('/verification');
        }
        setLoading(false)
    };
    const data: {id: number, category: string}[] = [
        {id: 1, category: 'Робітник'},
        {id: 2, category: 'Компанія'},
        {id: 3, category: 'Навчальний центр'},
    ]

    return (
        <FormAuth onSubmit={(event) => handleSubmit(event)}>
            <Label>Категорії</Label>
            <Category name={'categories'} data={data} onChange={(value: SetStateAction<string>) => setSelectedCategory(value)} />
            <Label>Електронна пошта</Label>
            <Label>vsev.diachun2002@gmail.com</Label>
            <Input onChange={validateEmail} error={errors.email} placeholder={'Введіть логін'} type="email" name="email"/>
            <Label>Пароль</Label>
            <Label>Wertwert1@%</Label>
            <Input onChange={validatePassword} error={errors.pas} placeholder={'Введіть пароль'} type="password" name="password"/>
            <Label>Підтвердьте пароль</Label>
            <Input onChange={validatePasswordConfirmation} error={errors.pasConf} placeholder={'Введіть пароль'} type="password" name="password_confirmation"/>
            <PolicyCheckBox name={'policy_checkbox'} onChange={(value: SetStateAction<string>) => setPolicyAgreement(value)} />
            <ButtonYellow loading={loading} type="submit" active={activeSubmitBtn}>Зареєструватися</ButtonYellow>
        </FormAuth>
    );
};