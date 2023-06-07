import { useNavigate } from "react-router-dom";
import { Text, Button } from '../../components';
import { BiArrowBack } from "react-icons/bi"
import { useEffect, useState } from "react";
import { Chip, Stack } from '@mui/material';

export const SetGender = () => {
    const dummyData: string[] = ["Эр", "Эм", "Бусад"];

    const navigate = useNavigate();
    const [clicked, setClicked] = useState("");
    const [disabled, setDisabled] = useState(true);

    const BackButton = () => {
        navigate(-1);
    }

    const PushInterest = () => {
        navigate("/signup/interest");
    }

    useEffect(() => {
        if (clicked !== "") {
            setDisabled(false);
        }
    }, [clicked])

    return (
        <div className="flex align-center vh-100 col px-16">
            <div className="absolute top-27 left-17">
                <BiArrowBack color="white" fontSize={"20"} onClick={BackButton} />
            </div>
            <div className="w100 flex col justify-between vh-25 mt-150">
                <Text color="dark-light" size="22" weight="700">Таны хүйс</Text>
                <Text color="primary-opacity">Илүү нарийвчлалтай танд тохирох сонголтуудыг үүсгэхэд туслах болно</Text>
                <Stack direction={"row"} spacing={2}>
                    {dummyData.map((gender, index) => {
                        return (
                            <Chip sx={{
                                color: "#DCCFFF",
                                borderColor: `${clicked === `${index}` ? "#B599FF" : "#333047"}`,
                                backgroundColor: `${clicked === `${index}` ? "#232239" : "transparent"}`,
                            }} key={index} label={gender} variant="outlined" onClick={() => setClicked(`${index}`) } />
                        )
                    })}
                </Stack>
            </div>
            <div className="footer-button absolute bottom-0 hpx-96 flex align-center justify-center w100">
                <Button onClick={PushInterest} disabled={disabled} className="vw-92">
                    <Text weight="600" color={disabled ? `disabled-button-text` : "dark-text"}>Үргэлжлүүлэх</Text>
                </Button>
            </div>
        </div>
    );
}