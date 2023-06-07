import { Button, CardRecommendServices, CardServiceBig, CardServiceSmall, Footer, Input, Text, Title } from "../../components";
import { Avatar, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IconFile, IconGear, IconLock, IconQuestion, IconSignOut, IconUser, IconUserLine, IconUsers } from "../../assets";
import { BiArrowBack } from "react-icons/bi";
import { useEffect, useState } from "react";
import axios from "axios"

export const ChangePassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [disabled, setDisabled] = useState(true);

    const BackButton = () => {
        navigate(-1);
    }

    useEffect(() => {
        const emailCheck = /\S+@\S+\.\S+/.test(email);
        setDisabled(!emailCheck);
    }, [email])

    const ConfirmButton = () => {
        axios({
            method: 'post',
            url: `${process.env.REACT_APP_AWS_URL}/forgot`,
            data: {Username: email},
        }).then(() => {
            navigate("/profile/settings/changepasswordverify");
        })
    }

    return (
        <div className='w-100 pt-12 flex col pl-24 pr-24' >
            <div className="flex align-center hpx-44 mb-6 pa-8">
                <BiArrowBack color="white" fontSize={"20"} onClick={BackButton} className="mr-20" />
            </div>
            <div className="flex col mt-40">
                <Text color="dark-light" weight="700" size="22">Нууц үг сэргээх</Text>
                <Text opacity="64" className="mt-8">Имэйл ээ оруулаад нууц үгээ шинэчлэнэ үү</Text>
                <Input onChange={e => setEmail(e.target.value)} placeholder="Имэйл ээ оруулна уу" className="mt-24" />
                <Button onClick={ConfirmButton} disabled={disabled} className="mt-16">Код илгээх</Button>
            </div>
        </div>
    );
}