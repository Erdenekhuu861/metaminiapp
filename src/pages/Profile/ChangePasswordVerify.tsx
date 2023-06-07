import { useNavigate } from "react-router-dom";
import { Text, ButtonText } from '../../components';
import { BiArrowBack } from "react-icons/bi"
import { useState } from "react";
import VerificationInput from "react-verification-input";
import axios from 'axios';
const arrowRight = require("../../assets/pics/ArrowArcRight.png");

export const ChangePasswordVerify = () => {
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(true);
    const [confirmationCode, setConfirmationCode] = useState("");

    const time = "02:00";

    const BackButton = () => {
        navigate(-1);
    }

    const PushSetPassword = (val: string) => {
        console.log(confirmationCode);
        axios({
            method: 'post',
            url: `${process.env.REACT_APP_AWS_URL}/confforgot`,
            data: {Username: `${localStorage.getItem("user")}`, ConfirmationCode: val},
        }).then(() => {
            navigate("/profile/settings/newpassword");
        })
    }

    setTimeout(() => {
        setDisabled(false);
    }, 120000);

    return (
        <div className="flex align-center vh-100 col px-16">
            <div className="absolute top-27 left-17">
                <BiArrowBack color="white" fontSize={"20"} onClick={BackButton} />
            </div>
            <div className="w100 flex col align-center justify-between vh-33 mt-200">
                <div className="flex col">
                    <Text className="mb-16" color="dark-light" size="22" weight="700">Баталгаажуулах</Text>
                    <Text color="primary-opacity">{`Таны ${localStorage.getItem("user")} имэйл рүү илгээсэн 6 оронтой кодыг оруулна уу.`}</Text>
                </div>
                <VerificationInput
                    validChars={"0-9"}
                    autoFocus
                    placeholder={""}
                    classNames={{
                        character: "verify-character",
                        characterSelected: "verify-character-selected",
                    }}
                    value={confirmationCode}
                    onChange={e => setConfirmationCode(e)}
                    onComplete={val => PushSetPassword(val)}
                />
                <ButtonText onClick={() => { console.log("sda") }} disabled>
                    <div className="flex justify-center align-center">
                        <img src={arrowRight} alt='arrowRight' />
                        <Text color={disabled ? "disabled-button-text" : "dark-light"} className="ml-8">
                            {disabled ? `Дахин илгээх (${time})` : `Дахин илгээх`}
                        </Text>
                    </div>
                </ButtonText>
            </div>
        </div>
    );
}