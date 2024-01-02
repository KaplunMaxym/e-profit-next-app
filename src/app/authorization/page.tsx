import LoginForm from "@/modules/LoginForm/LoginForm";
import {
    ButtonTransparent,
    ChildSubContainerAuth,
    ContainerAuth,
    ElectricPole,
    ImageLogo,
    MainText,
    SubContainerAuth
} from "@/UI";
const Authorization = () => {
    return (
        <ContainerAuth>
            <SubContainerAuth>
                <ChildSubContainerAuth>
                    <ImageLogo marginBottom={80} />
                    <MainText fontSize={20}>Увійдіть на сайт</MainText>
                        <LoginForm />
                    <ButtonTransparent navigate={'/registration'}>Зареєструватися</ButtonTransparent>
                </ChildSubContainerAuth>
            </SubContainerAuth>
            <ElectricPole />
        </ContainerAuth>
    );
};

export default Authorization;