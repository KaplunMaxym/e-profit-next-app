import {LoginForm} from "@/modules";
import {
    ButtonTransparent,
    ChildSubContainerAuth,
    ContainerAuth,
    ElectricPole,
    ImageLogo, MainSecondatyText,
    SubContainerAuth
} from "@/UI";
const Authorization = () => {
    return (
        <ContainerAuth>
            <SubContainerAuth>
                <ChildSubContainerAuth>
                    <ImageLogo marginBottom={80} />
                    <MainSecondatyText>Увійдіть на сайт</MainSecondatyText>
                        <LoginForm />
                    <ButtonTransparent navigate={'/registration'}>Зареєструватися</ButtonTransparent>
                </ChildSubContainerAuth>
            </SubContainerAuth>
            <ElectricPole />
        </ContainerAuth>
    );
};

export default Authorization;