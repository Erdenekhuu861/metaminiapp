import { useNavigate } from "react-router-dom";
import { Text, Input, Button, Checkbox, ButtonText, ButtonInline } from '../../components';
import { BiArrowBack } from "react-icons/bi"
import { useEffect, useState } from "react";
import axios from 'axios';

export const SignIn = () => {
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (email !== "" && password !== "") {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
        // eslint-disable-next-line
    }, [email, password])

    const BackButton = () => {
        navigate(-1);
    }

    const PushHome = () => {
        axios({
            method: 'post',
            url: `${process.env.REACT_APP_AWS_URL}/auth`,
            data: { Username: email, Password: password },
        }).then((response) => {
            console.log(response);
            window.localStorage.setItem("token", response.data.Tokens.IdToken)
            window.localStorage.setItem("user", email);
            navigate(`/?idToken=${response.data.Tokens.IdToken}`);
        })
    }

    const PushSignUp = () => {
        navigate("/signup");
    }

    return (
        <div className="flex relative justify-center align-center vh-100 col px-16">
            <div className="flex w100 align-center fixed top-27 left-17">
                <BiArrowBack color="white" fontSize={"20"} onClick={BackButton} />
            </div>
            <div className="w100 flex col align-center justify-between vh-50">
                <div className="mb-40">
                    <Text color="dark-light" size="22" weight="700">Нэвтрэх</Text>
                </div>
                <Input onChange={e => setEmail(e.target.value)} placeholder="И-мэйл / Хэрэглэгчийн нэр" />
                <Input onChange={e => setPassword(e.target.value)} placeholder="Нууц үг" />
                <div className="flex justify-between w100 mt-5">
                    <Checkbox placeholder="Төхөөрөмж сануулах" />
                    <ButtonText onClick={() => { console.log("martaash") }}>Нууц үг мартсан?</ButtonText>
                </div>
                <Button onClick={PushHome} disabled={disabled}>
                    <Text weight="600" color={disabled ? `disabled-button-text` : "dark-text"}>Нэвтрэх</Text>
                </Button>
                <div className='flex row justify-between align-center'>
                    <div className='signin-line' />
                    <Text>эсвэл</Text>
                    <div className='signin-line' />
                </div>
            </div>
            <div className="vw-92 mb-40 fixed bottom-0 mb-40">
                <ButtonInline onClick={PushSignUp}>
                    <Text color="dark-light" weight="600">Бүртгүүлэх</Text>
                </ButtonInline>
                <div className="mt-16"></div>
                <Button onClick={() => console.log("a")} bg={"primary-dark-brand"} >
                    <Text color="dark-light" weight="600">Зочноор нэвтрэх</Text>
                </Button>
            </div>
        </div>
    );
}