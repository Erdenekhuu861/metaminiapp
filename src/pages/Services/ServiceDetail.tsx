import { Button, PopUp, Text } from "../../components";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useEffect, useState } from "react";
import axios from "axios";
const bgImg = require("../../assets/pics/PopUpBG.png")

export const ServiceDetail = () => {
    const path = window.location.pathname;
    const id = path.split("/")[path.split("/").length - 1]
    const navigate = useNavigate();
    const [open, setOpen] = useState(false)
    const [data, setData] = useState<any>([])

    const dummy = {
        title: "E - Mongolia",
        description: "136K үйлчилгээ авсан",
        avatar: "https://picsum.photos/40/40",
        img: "https://picsum.photos/155/88",
        services: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "],
        popup: "https://picsum.photos/164/113",
    }

    useEffect(() => {
        axios({
            method: 'post',
            url: `${process.env.REACT_APP_AWS_URL}/getservice`,
            data: { id: `${id}` }
        }).then((response: any) => {
            console.log(response.data[0])
            setData(response.data[0]);
        });
    }, [])

    const BackButton = () => {
        navigate(-1);
    }

    const Download = () => {
        navigate(`/?download=${id}&type=service`);
    }

    return (
        <div className='w-100 vh-100 flex col pl-24 pr-24 relative'>
            <div className="flex align-center hpx-44 mb-6 pa-8">
                <BiArrowBack color="white" fontSize={"20"} onClick={BackButton} className="mr-20" />
                <Avatar src={data.avatar} className="mr-8" />
                <Text weight="700" size="16" color="dark-light">{data.title}</Text>
            </div>
            <div>
                <div className="w100 hpx-200 absolute left-0" style={{ backgroundImage: `url(${data.img})` }} />
            </div>
            <div className="mt-272">
                <Text weight="700" size="16" ls="0.15" >
                    Эдгээр үйлчилгээнүүдийг та металанд дахь орчноосоо авах боломжтой юм
                </Text>
                <div className="flex col mt-12">
                    {data.description ? data.description.map((e: any) => {
                        return (
                            <div className="flex row align-center">
                                <div className="c-white opacity-64">&#8226;&#160;&#160;</div>
                                <Text opacity="64">
                                    {e}
                                </Text>
                            </div>
                        )
                    }) : <></>}
                </div>
            </div>
            <div className="footer-button absolute bottom-0 hpx-96 flex align-center justify-center left-0 w100">
                <Button onClick={() => setOpen(true)} className="vw-92">
                    <Text weight="600" color={"dark-text"}>Зорчих</Text>
                </Button>
            </div>
            <PopUp open={open} setOpen={setOpen} >
                <div className="relative bg-dark-surface vw-90 vh-50 br-16 flex align-center col z-index-3">
                    <div className="pb-32 pt-48 w100 flex justify-center" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover" }}>
                        <img src={data.popup} />
                    </div>
                    <div className="flex col align-center">
                        <Text color="dark-light" weight="700" size="22">{data.title}</Text>
                        <Text color="primary-opacity" size="16" className="mt-12">{`Owner: ${data.title}`}</Text>
                    </div>
                    <div className="absolute w100 bottom-0 flex row pt-16 pl-16 pr-16 pb-32 justify-evenly">
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