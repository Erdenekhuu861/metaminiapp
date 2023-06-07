import { useNavigate } from "react-router-dom";
import { Text, ButtonStep } from '../../components';
import { BiArrowBack } from "react-icons/bi"
import { useEffect, useState } from "react";
import { Chip, Stack } from '@mui/material';

export const SetInterest = () => {
    const dummyData: string[] = ["Эрүүл мэнд", "Спорт", "Технологи", "Аж ахуй", "Мэдиа", "Аялал", "Үйлдвэрлэл", "Спорт", "Технологи", "Аж ахуй", "Мэдиа", "Аялал", "Үйлдвэрлэл", "Спорт", "Технологи", "Аж ахуй", "Мэдиа", "Аялал", "Үйлдвэрлэл"];

    const navigate = useNavigate();
    const [clicked, setClicked] = useState<string[]>([]);

    const BackButton = () => {
        navigate(-1);
    }

    const PushHome = () => {
        navigate("/");
    }

    useEffect(() => {
        console.log(clicked);
    }, [clicked])

    const handleChipClick = (index: number) => {
        const indexString = `${index}`
        console.log(clicked.filter((e) => {
            return e === indexString
        }))
        const repeated = clicked.filter((e) => {
            return e === indexString
        });
        if (!repeated[0] && clicked.length < 3) {
            setClicked([...clicked, indexString])
        } else {
            setClicked(clicked.filter((e) => {return e !== indexString}))
        }
    }

    return (
        <div className="flex align-center vh-100 col px-16">
            <div className="absolute top-27 left-17">
                <BiArrowBack color="white" fontSize={"20"} onClick={BackButton} />
            </div>
            <div className="w100 flex col justify-center vh-48 mt-150">
                <Text color="dark-light" size="22" weight="700" className="mb-12">Та аль чиглэлийг нь сонирхож байна?</Text>
                <Text color="primary-opacity" className="mb-24">Илүү нарийвчлалтай танд тохирох сонголтуудыг үүсгэхэд туслах болно</Text>
                <Stack direction={"row"} spacing={2} useFlexGap flexWrap="wrap">
                    {dummyData.map((gender, index) => {
                        return (
                            <Chip sx={{
                                color: "#DCCFFF",
                                borderColor: `${clicked.filter((e) => { return e === `${index}` })[0] ? "#B599FF" : "#333047"}`,
                                backgroundColor: `${clicked.filter((e) => { return e === `${index}` })[0] ? "#232239" : "transparent"}`,
                            }} key={index} label={gender} variant="outlined" onClick={() => handleChipClick(index)} />
                        )
                    })}
                </Stack>
            </div>
            <div className="footer-button absolute bottom-0 hpx-96 flex align-center justify-center w100">
                <ButtonStep onClick={PushHome} step={clicked.length / 3} className="vw-92 mb-12">
                    <Text weight="600" color={clicked.length > 1 ? `dark-text` : "disabled-button-text"}>Үргэлжлүүлэх</Text>
                </ButtonStep>
            </div>
        </div>
    );
}