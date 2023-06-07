import { BiArrowBack, BiDumbbell } from "react-icons/bi";
import { Button, CardEvent, Footer, PopUp, Text, Title } from "../../components";
import { Avatar, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IconMapPinLine, IconCodeSandBoxLogo, IconCoins, IconCalendar, IconCalendarLine, IconCalendarNumber, IconMapPin } from "../../assets";
import { useEffect, useState } from "react";
import axios from "axios";
const bgImg = require("../../assets/pics/PopUpBG.png")

export const EventDetail = () => {
    const popup = "https://picsum.photos/164/113";
    const navigate = useNavigate();
    const path = window.location.pathname;
    const id = path.split("/")[path.split("/").length - 1]
    const [open, setOpen] = useState(false);
    const [data, setData] = useState<any>({});
    const dummyImg = "https://picsum.photos/390/417";

    useEffect(() => {
        axios({
            method: 'post',
            url: `${process.env.REACT_APP_AWS_URL}/getevent`,
            data: { id: `${id}` }
        }).then((response: any) => {
            setData(response.data[0]);
        });
    }, [])

    const BackButton = () => {
        navigate(-1);
    }

    const Download = () => {
        navigate(`/?download=${id}&type=event`);
    }

    return (
        <div className='vw-100 flex col'>
            <div className="flex col vh-45 pa-16 justify-between" style={{ backgroundImage: `url(${dummyImg})` }}>
                <div onClick={BackButton} className="wpx-40 blur-12 hpx-40 flex justify-center align-center br-40 bg-dark-glassy" style={{ border: "1px solid rgba(255, 255, 255, 0.12)" }}>
                    <BiArrowBack color="white"></BiArrowBack>
                </div>
                <div className="hpx-40 blur-12 flex justify-center align-center br-40 bg-dark-glassy" style={{ border: "1px solid rgba(255, 255, 255, 0.12)" }}>
                    <IconMapPinLine />
                    <Text weight="600" size="12" ls="0.5" color="dark-light">Мета орчинд үзэх</Text>
                </div>
            </div>
            <div className="flex col pa-16">
                <div style={{ borderBottom: "1px solid #1F1E33" }} >
                    <Text weight="700" size="22">{data.title}</Text>
                    <Title onClick={() => console.log('sda')}>
                        <Avatar src={data.avatar} sx={{ width: 24, height: 24 }} />
                        <Text className="ml-8">{data.organizer}</Text>
                    </Title>
                </div>
                <Stack className="pt-16 pb-16" spacing={2} direction={"row"} useFlexGap flexWrap={"wrap"} sx={{ borderBottom: "1px solid #252535" }}>
                    {/* <div className="bg-dark-surface flex col align-center br-8" style={{ padding: "8px 12px" }}>
                        <IconCodeSandBoxLogo color="rgba(255, 255, 255, 0.64)" />
                        <Text color="primary-opacity" size="12" className="mb-8 mt-3">Зүйлс</Text>
                        <Text size="16" weight="700" >{data.items}</Text>
                    </div> */}
                    <div className="bg-dark-surface flex col align-center br-8" style={{ padding: "8px 12px" }}>
                        <IconCoins color="rgba(255, 255, 255, 0.64)" />
                        <Text color="primary-opacity" size="12" className="mb-8 mt-3">Багцийн үнэ</Text>
                        <Text size="16" weight="700" >{data.price ? data.price : "0"}₮</Text>
                    </div>
                    <div className="bg-dark-surface flex col align-center br-8" style={{ padding: "8px 12px" }}>
                        <IconCalendarNumber color="#fff" opacity={0.64} />
                        <Text color="primary-opacity" size="12" className="mb-8 mt-3">Арга хэмжээний өдөр</Text>
                        <Text size="16" weight="700" >3-р сарын 20</Text>
                    </div>
                    <div className="bg-dark-surface flex col align-center br-8" style={{ padding: "8px 12px" }}>
                        <IconMapPinLine color="rgba(255, 255, 255, 0.64)" />
                        <Text color="primary-opacity" size="12" className="mb-8 mt-3">Байршил</Text>
                        <Text size="16" weight="700" >Металанд</Text>
                    </div>
                </Stack>
                <div className="mt-16">
                    <Text color="primary-opacity">{data.description}</Text>
                </div>
                <div className="mt-16 mb-120">
                    <Text weight="700" size="16" >Цагийн хуваарь сонгох</Text>
                    <Stack direction={"column"} spacing={2} className="mt-16" >
                        {data.onsar?.map((e: string) => {
                            return (
                                <div className="bg-dark-surface br-8" style={{ padding: "8px 10px" }}>
                                    <Text color="dark-light">{e}</Text>
                                </div>
                            )
                        })}
                    </Stack>
                </div>
            </div>
            <div className="footer-button fixed bg-background-color bottom-0 hpx-96 flex align-center justify-center left-0 w100">
                <Button onClick={() => setOpen(true)} className="vw-92">
                    <Text weight="600" color={"dark-text"}>Зорчих</Text>
                </Button>
            </div>
            <PopUp open={open} setOpen={setOpen} >
                <div className="relative bg-dark-surface vw-90 vh-50 br-16 flex align-center col z-index-3">
                    <div className="pb-32 pt-48 w100 flex justify-center" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover" }}>
                        <img src={popup} />
                    </div>
                    <div className="flex col align-center">
                        <Text color="dark-light" weight="700" size="22">{data.title}</Text>
                        <Text color="primary-opacity" size="16" className="mt-12">{`Owner: ${data.organizer}`}</Text>
                    </div>
                    <div className="footer-button absolute w100 bottom-0 flex row pt-16 pl-16 pr-16 pb-32 justify-evenly">
                        <div style={{ width: "45%" }}>
                            <Button bg="primary-dark-brand" onClick={() => setOpen(false)}>
                                <Text weight="600" color="dark-light">
                                    Болих
                                </Text>
                            </Button>
                        </div>
                        <div style={{ width: "45%" }}>
                            <Button onClick={Download}>
                                <Text weight="600" color="black">
                                    Зочлох
                                </Text>
                            </Button>
                        </div>
                    </div>
                </div>
            </PopUp>
        </div>
    );
}