import {SignInForm} from "@/modules";
import {
    ButtonTransparent,
    ChildSubContainerAuth,
    ContainerAuth,
    ElectricPole,
    ImageLogo, MainSecondatyText,
    MainText,
    SubContainerAuth
} from "@/UI";

const Page = () => {
    return (
        <ContainerAuth>
            <SubContainerAuth>
                <ChildSubContainerAuth>
                    <ImageLogo marginBottom={16} />
                    <MainText eprofi={true}>Ласкаво просимо до</MainText>
                    <MainSecondatyText>Створіть профіль</MainSecondatyText>
                    <SignInForm />
                    <ButtonTransparent navigate={'/authorization'}>Я вже зареєстрований</ButtonTransparent>
                </ChildSubContainerAuth>
            </SubContainerAuth>
            <ElectricPole />
        </ContainerAuth>
    )
};

export default Page;