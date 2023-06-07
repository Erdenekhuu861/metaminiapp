import { Button, CardRecommendServices, CardServiceBig, CardServiceSmall, Footer, Input, Text, Title } from "../../components";
import { Avatar, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CheckIcon from '@mui/icons-material/Check';
import { BiArrowBack } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import axios from "axios"

export const NewPassword = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [haveNumber, setHaveNumber] = useState(false);
    const [haveSpecial, setHaveSpecial] = useState(false);
    const [haveUpperCase, setHaveUpperCase] = useState(false);
    const [enoughLength, setEnoughLength] = useState(false);
    const [same, setSame] = useState(false);
    const [focus, setFocus] = useState("none");

    const BackButton = () => {
        navigate(-1);
    }
    console.log(focus)

    useEffect(() => {
        const passwordArr = password.split("");
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        setHaveSpecial(specialChars.test(password));
        setHaveNumber(/[0-9]/.test(password));
        setHaveUpperCase(/[A-Z]/.test(password));
        setEnoughLength(password.length >= 8);
    }, [password])

    useEffect(() => {
        console.log(repeatPassword)
        if (password === repeatPassword && password !== "") {
            console.log("sda");
            setSame(true);
            setDisabled(false);
        } else {
            setSame(false);
            setDisabled(true);
        }
    }, [password, repeatPassword])

    const ConfirmButton = () => {
        axios({
            method: 'post',
            url: `${process.env.REACT_APP_AWS_URL}/forgot`,
            data: { Password: password, Username: localStorage.getItem("user") },
        }).then(() => {
            navigate("/profile/settings/changepasswordverify");
        })

    }

    return (
        <div className='w-100 pt-12 flex col pl-24 pr-24' >
            <div className="flex align-center hpx-44 mb-6 pa-8">
                <BiArrowBack color="white" fontSize={"20"} onClick={BackButton} className="mr-20" />
            </div>
            <Stack direction={"column"} spacing={2} className="flex col mt-40">
                <Input onFocus={() => setFocus("password")} placeholder="Шинэ нууц үг" onChange={e => setPassword(e.target.value)} />
                <Input onFocus={() => setFocus("repeat")} placeholder="Шинэ нууц үг давтах" onChange={e => setRepeatPassword(e.target.value)} />
                <div className={`d-${focus === "password" ? "block" : "none"}`}>
                    <Stack direction={"column"} spacing={2}>
                        <div className={`flex align-center opacity-${haveNumber ? "100" : "24"}`}>
                            <CheckIcon sx={{ height: 16, color: "#DCCFFF" }} />
                            <Text color="dark-light">Тоо</Text>
                        </div>
                        <div className={`flex align-center opacity-${haveSpecial ? "100" : "24"}`}>
                            <CheckIcon sx={{ height: 16, color: "#DCCFFF" }} />
                            <Text color="dark-light">Тусгай тэмдэгт</Text>
                        </div>
                        <div className={`flex align-center opacity-${haveUpperCase ? "100" : "24"}`}>
                            <CheckIcon sx={{ height: 16, color: "#DCCFFF" }} />
                            <Text color="dark-light">Том жижиг, үсэг орсон</Text>
                        </div>
                        <div className={`flex align-center opacity-${enoughLength ? "100" : "24"}`}>
                            <CheckIcon sx={{ height: 16, color: "#DCCFFF" }} />
                            <Text color="dark-light">8с дээш орон</Text>
                        </div>
                    </Stack>
                </div>
                <div className={`d-${focus === "repeat" ? "block" : "none"}`}>
                    <Stack direction={"column"} spacing={2}>
                        <div className={`flex align-center opacity-${same ? "100" : "24"}`}>
                            <CheckIcon sx={{ height: 16, color: "#DCCFFF" }} />
                            <Text color="dark-light">Нууц үг таарч байна</Text>
                        </div>
                    </Stack>
                </div>
                <div className="footer-button absolute left-0 bottom-0 hpx-96 flex align-center justify-center w100">
                    <Button onClick={ConfirmButton} disabled={disabled} className="vw-92">
                        <Text weight="600" color={disabled ? `disabled-button-text` : "dark-text"}>Код илгээх</Text>
                    </Button>
                </div>
            </Stack>
        </div>
    );
}