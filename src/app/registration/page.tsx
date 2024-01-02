import {SignInForm} from "@/modules/SignInForm/SignInForm";
import {
    ButtonTransparent,
    ChildSubContainerAuth,
    ContainerAuth,
    ElectricPole,
    ImageLogo,
    MainText,
    SubContainerAuth
} from "@/UI";

const Page = () => {
    return (
        <ContainerAuth>
            <SubContainerAuth>
                <ChildSubContainerAuth>
                    <ImageLogo marginBottom={16} />
                    <MainText fontWeight={400} fontSize={26} marginBottom={31} eprofi={true}>Ласкаво просимо до</MainText>
                    <MainText fontSize={20}>Створіть профіль</MainText>
                    <SignInForm />
                    <ButtonTransparent navigate={'/authorization'}>Я вже зареєстрований</ButtonTransparent>
                </ChildSubContainerAuth>
            </SubContainerAuth>
            <ElectricPole />
        </ContainerAuth>
    )
};

export default Page;