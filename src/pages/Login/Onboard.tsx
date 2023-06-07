import { useNavigate } from "react-router-dom";
import { Button, ButtonInline, Text } from '../../components';
const logo = require("../../assets/pics/FullLogo1.png");

export const Onboard = () => {
    const navigate = useNavigate();

    const pushSignUp = () => {
        navigate("/signup");
    }

    const pushSignin = () => {
        navigate("/signin");
    }


    return (
        <div className='w-100 vh-100 flex col justify-between' style={{ paddingLeft: '24px', paddingRight: '24px' }}>
            <div className='container' style={{ paddingTop: '25vh', }}>
                <img src={logo} alt='Logo' />

            </div>
            <div className='flex col align-center justify-around vh-38' style={{ width: '100%' }}>
                <Button onClick={pushSignin}>
                    <Text color="black" weight="600">Нэвтрэх</Text>
                </Button>
                <ButtonInline onClick={pushSignUp}>
                    <Text weight="600">Бүртгүүлэх</Text>
                </ButtonInline>
                <div className='flex row justify-between align-center'>
                    <div className='signin-line' />
                    <Text>эсвэл</Text>
                    <div className='signin-line' />
                </div>
                <ButtonInline onClick={pushSignin}>
                    <Text weight="600">Зочноор нэвтрэх</Text>
                </ButtonInline>
                <Text size='12'>V2.0</Text>
            </div>
        </div>
    );
}