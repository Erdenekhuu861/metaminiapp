import { useNavigate } from "react-router-dom";
import { Text, Input, Button } from '../../components';
import { BiArrowBack } from "react-icons/bi"
import { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import axios from 'axios';

export const SignUp = () => {
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(true);
    const [value, setValue] = useState({
        "Username": "",
        "Email": "",
        "Password": "",
    });
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setpasswordVerify] = useState("");
    const [passwordVerifyFailed, setPasswordVerifyFailed] = useState(false);

    useEffect(() => {
        setValue({
            "Username": username,
            "Email": email,
            "Password": password,
        });

        if (value.Email !== "" && value.Password !== "") {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
        // eslint-disable-next-line
    }, [email, password, passwordVerify])

    const BackButton = () => {
        navigate(-1);
    }

    const PushVerify = () => {
        console.log(value)
        console.log(process.env.REACT_APP_AWS_URL);
        if (password !== passwordVerify) {
            setPasswordVerifyFailed(true);
        } else {
            setPasswordVerifyFailed(false);
            axios({
                method: 'post',
                url: `${process.env.REACT_APP_AWS_URL}/signup`,
                data: value,
            }).then(() => {
                localStorage.setItem("user", value.Email);
                localStorage.setItem("username", value.Username);
                navigate("/signup/verify");
            })

        }
    }

    return (
        <div className="flex justify-center align-center vh-100 col px-16">
            <div className="absolute top-27 left-17">
                <BiArrowBack color="white" fontSize={"20"} onClick={BackButton} />
            </div>
            <div className="w100 flex col align-center justify-between">
                <Text color="dark-light mb-40" size="22" weight="700">Бүртгүүлэх</Text>
                <Stack className="w100" spacing={1} direction={"column"}>
                    <Input onChange={e =>setUsername(e.target.value)} placeholder="Нэвтрэх нэр" />
                    <Input onChange={e =>setEmail(e.target.value)} placeholder="И-мэйл" />
                    <Input onChange={e =>setPassword(e.target.value)} placeholder="Нууц үг" />
                    <Input failed={passwordVerifyFailed} bgColor={passwordVerifyFailed ? "system-error-soft" : "dark"} color={passwordVerifyFailed ? "system-error" : "dark-light"} onChange={e => setpasswordVerify(e.target.value)} placeholder="Нууц үг давтах" />
                    <Button onClick={PushVerify} disabled={disabled}>
                        <Text weight="600" color={disabled ? `disabled-button-text` : "dark-text"}>Бүртгүүлэх</Text>
                    </Button>
                </Stack>
            </div>
        </div>
    );
}