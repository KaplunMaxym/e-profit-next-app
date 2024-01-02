'use client';
import {FormEvent} from "react";
import {useRouter} from 'next/navigation'
import {useAppDispatch, useAppSelector} from "@/hooks/useAppSelector";
import {signIn} from "next-auth/react";
import {userSlice} from "@/store/reducers/UserSlice";
import MainText from "@/UI/Text/mainText/MainText";
import {
    ButtonYellow,
    ChildSubContainerAuth,
    ContainerAuth,
    ImageLogo,
    Label,
    SubContainerAuth,
    DigitCode,
    ElectricPole
} from "@/UI";
import FormAuth from "@/components/Form/formAuth/FormAuth";

export const VerificationForm = () => {
    const router = useRouter()
    const {emailByVerification} = useAppSelector(state => state.userReducer)
    const {setEmailByVerification} = userSlice.actions
    const dispatch = useAppDispatch()
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        console.log(emailByVerification, formData.get('verification_code'))
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
        <ContainerAuth>
            <SubContainerAuth>
                <ChildSubContainerAuth>
                    <ImageLogo marginBottom={30} />
                    {/*<MainText fontWeight={400} fontSize={26} marginBottom={31} eprofi={true}>Ласкаво просимо до</MainText>*/}
                    <MainText fontSize={20} fontWeight={400}>Верифікація</MainText>
                    <FormAuth onSubmit={(event) => handleSubmit(event)}>
                        <Label>Код підтвердження</Label>
                        <DigitCode name="verification_code"/>
                        <ButtonYellow type="submit">Продовжити</ButtonYellow>
                    </FormAuth>
                </ChildSubContainerAuth>
            </SubContainerAuth>
            <ElectricPole />
        </ContainerAuth>
    );
};