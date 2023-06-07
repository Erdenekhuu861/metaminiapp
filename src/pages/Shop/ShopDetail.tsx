import { Button, PopUp, Text } from "../../components";
import { Avatar, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Carousel from 'react-material-ui-carousel'
import { BiArrowBack } from "react-icons/bi";
import { useEffect, useState } from "react";
import axios from "axios";

const bgImg = require("../../assets/pics/PopUpBG.png")

export const ShopDetail = () => {
    const [open, setOpen] = useState(false)
    const [data, setData] = useState<any>({});
    const path = window.location.pathname;
    const id = path.split("/")[path.split("/").length - 1]
    const navigate = useNavigate();

    const popup = "https://picsum.photos/164/113";

    const Download = () => {
        navigate(`/?download=${id}&type=shop`);
    }

    const BackButton = () => {
        navigate(-1);
    }

    useEffect(() => {
        axios({
            method: 'post',
            url: `${process.env.REACT_APP_AWS_URL}/getshop`,
            data: { id: `${id}` }
        }).then((response: any) => {
            setData(response.data[0]);
        });
    }, [])

    return (
        <div className='w-100 vh-100 flex col pl-24 pr-24'>
            <div className="flex wpx-125 hpx-44 mb-6 mt-12">
                <BiArrowBack color="white" fontSize={"20"} onClick={BackButton} className="mr-20" />
                <Text weight="700" size="16">{data.title}</Text>
            </div>
            <Carousel next={() => console.log('sda')}>
                <Paper>
                    <img alt="slide" src="https://picsum.photos/385/201" />
                </Paper>
                <Paper>
                    <img alt="slide" src="https://picsum.photos/385/201" />
                </Paper>
                <Paper>
                    <img alt="slide" src="https://picsum.photos/385/201" />
                </Paper>
                <Paper>
                    <img alt="slide" src="https://picsum.photos/385/201" />
                </Paper>
            </Carousel>
            <div>
                <div className="flex align-center">
                    <Avatar src={data.avatar} className="mr-8" />
                    <Text weight="700" size="16" ls="0.15" >{data.title}</Text>
                </div>
                <div className="bg-dark-surface flex col pa-16 absolute left-0 mt-16">
                    <Text size="12" className="mb-4" color="primary-opacity">Тайлбар:</Text>
                    <Text size="16" ls="0.5" color="dark-light">Дэлхийд өрсөлдөх чанартай бүтээгдэхүүнийг бид өөрийн эх орондоо үйлдвэрлэнэ.</Text>
                </div>
            </div>
            <div className="footer-button absolute bottom-0 hpx-96 flex align-center justify-center left-0 w100">
                <Button onClick={() => setOpen(true)} className="vw-92">
                    <Text weight="600" color={"dark-text"}>Дэлгүүрээр зочлох</Text>
                </Button>
            </div>
            <PopUp open={open} setOpen={setOpen} >
                <div className="relative bg-dark-surface vw-90 vh-50 br-16 flex align-center col z-index-3">
                    <div className="pb-32 pt-48 w100 flex justify-center" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover" }}>
                        <div className="wpx-164 hpx-113" style={{backgroundImage: `url(${popup})`, backgroundSize: "cover", backgroundPosition: "center"}} />
                    </div>
                    <div className="flex col align-center">
                        <Text color="dark-light" weight="700" size="22">KHUR</Text>
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