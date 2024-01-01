'use client';
import {FormEvent} from "react";
import {useRouter} from 'next/navigation'
import {useAppDispatch, useAppSelector} from "@/hooks/useAppSelector";
import {signIn} from "next-auth/react";
import {userSlice} from "@/store/reducers/UserSlice";
import s from "@/modules/VerificationForm/verificationForm.module.scss";
import Image from "next/image";
import {electricPole} from "@/assets";
import MainText from "../../UI/mainText/MainText";
import {ButtonYellow, ImageLogo, Input, Label} from "@/UI";

export const VerificationForm = () => {
    const router = useRouter()
    const {emailByVerification} = useAppSelector(state => state.userReducer)
    const {setEmailByVerification} = userSlice.actions
    const dispatch = useAppDispatch()


    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        const response = await signIn("credentials", {
            email: emailByVerification,
            verification_code: formData.get('verification_code'),
            redirect: false,
        });
        if (response) {
            console.log(response)
            dispatch(setEmailByVerification(''))
            router.push("/");
        }
    }

    return (
        <div className={s.container}>
            <div className={s.containerVer}>
                <div className={s.containerVer__div}>
                    <ImageLogo marginBottom={30} />
                    {/*<MainText fontWeight={400} fontSize={26} marginBottom={31} eprofi={true}>Ласкаво просимо до</MainText>*/}
                    <MainText fontSize={20} fontWeight={400}>Верифікація</MainText>
                    <form className={s.authForm} onSubmit={(event) => handleSubmit(event)}>
                        <Label>Код підтвердження</Label>
                        <Input type="text" name="verification_code"/>
                        <ButtonYellow type="submit">Продовжити</ButtonYellow>
                    </form>
                </div>
            </div>
            <div className={s.containerElectricPole}>
                <Image className={s.electricPole} src={electricPole} alt={'electricPole'} />
            </div>
        </div>
    );
};