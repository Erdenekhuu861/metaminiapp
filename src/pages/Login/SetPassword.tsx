import { useNavigate } from "react-router-dom";
import { Text, Input, Button } from '../../components';
import { BiArrowBack } from "react-icons/bi"
import { useEffect, useState } from "react";

export const SetPassword = () => {
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(true);
    const [nickname, setNickname] = useState("");

    useEffect(() => {
        if(nickname)
            setDisabled(false);
    }, [nickname])

    const BackButton = () => {
        navigate(-1);
    }

    const PushGender = () => {
        navigate("/signup/gender");
    }

    return (
        <div className="flex align-center vh-100 col px-16">
            <div className="absolute top-27 left-17">
                <BiArrowBack color="white" fontSize={"20"} onClick={BackButton} />
            </div>
            <div className="w100 flex col justify-between vh-25 mt-150">
                <Text color="dark-light" size="22" weight="700">Таныг хэн гэж дуудах вэ?</Text>
                <Input onChange={e => setNickname(e.target.value)} placeholder="Нэрээ энд оруулаарай" />
                <Button onClick={PushGender} disabled={disabled}>
                    <Text weight="600" color={disabled ? `disabled-button-text` : "dark-text"}>Үргэлжлүүлэх</Text>
                </Button>
            </div>
        </div>
    );
}