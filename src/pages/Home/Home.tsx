import { Button, CardGames, CardHomeEvent, CardHomeFeatured, CardServiceBig, CardShop, Footer, Header, PopUp, Text, Title } from "../../components";
import { IconGameController, IconNote, IconPopUp, IconStar, IconStore } from "../../assets";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const logo = require("../../assets/pics/Logo.png");
const map = require("../../assets/pics/Map.png");

const FeaturedDummyData: { title: string, description: string, image: string }[] = [
    {
        title: "HU in the Metaverse",
        description: "Арга хэмжээ тун удахгүй...",
        image: "https://picsum.photos/342/144",
    },
    {
        title: "Metaland New Patch ",
        description: "1.0.4 RELEASED",
        image: "https://picsum.photos/342/144",
    },
    {
        title: "HU in the Metaverse",
        description: "Арга хэмжээ тун удахгүй...",
        image: "https://picsum.photos/342/144",
    }
]

export const Home = () => {
    const navigate = useNavigate();
    const [shopData, setShopData] = useState<any[]>([]);
    const [eventData, setEventData] = useState<any[]>([]);
    const [gamesData, setGamesData] = useState<any[]>([]);
    const [gameId, setGameId] = useState<string>("");
    const [servicesData, setServicesData] = useState<any[]>([]);
    const [open, setOpen] = useState(false);

    const PushFeatured = () => {
        navigate("/featured");
    }

    const PushShop = (id :string) => {
        navigate(`/shop/${id}`);
    }

    const PushEvent = (id :string) => {
        navigate(`/event/${id}`);
    }

    const PushService = (id :string) => {
        navigate(`/services/${id}`);
    }

    const PushGame = () => {
        navigate(`/?download=${gameId}&type=game`);
        setOpen(false);
    }

    const GameButton = (id: string) => {
        setGameId(id);
        setOpen(true);
    }

    useEffect(() => {
        axios({
            method: 'get',
            url: `${process.env.REACT_APP_AWS_URL}/listshop`,
        }).then((response: any) => {
            setShopData(response.data);
        });
        axios({
            method: 'get',
            url: `${process.env.REACT_APP_AWS_URL}/listevent`,
        }).then((response: any) => {
            setEventData(response.data);
        })
        axios({
            method: 'get',
            url: `${process.env.REACT_APP_AWS_URL}/listgames`,
        }).then((response: any) => {
            setGamesData(response.data);
        })
        axios({
            method: 'get',
            url: `${process.env.REACT_APP_AWS_URL}/listservice`,
        }).then((response: any) => {
            setServicesData(response.data);
        })
    }, [])

    return (
        <div className='w-100 vh-100 mt-72 flex col pl-24 pr-24'>
            <Header />
            <div className="w100" style={{ backgroundImage: `url(${map})`, backgroundSize: "cover" }}>
                <div className="flex justify-center align-center w100 vh-47 br-12" style={{backgroundColor: "rgba(30, 30, 30, 0.6)"}}>
                    <Text weight="700" size="26" color="dark-light">Coming Soon</Text>
                </div>
            </div>
            <div className="mt-16">
                <Title onClick={PushFeatured}>
                    <IconStar />
                    <div className="vw-2" />
                    <Text weight="700" size="16">Онцлох</Text>
                </Title>
                <div className="overflow-x flex">
                    <Stack spacing={2} direction={"row"}>
                        {FeaturedDummyData.map((e, index) => {
                            return (
                                <div className="wpx-282">
                                    <CardHomeFeatured key={index} onClick={() => console.log("sda")} img={e.image} title={e.title} desc={e.description} />
                                </div>
                            )
                        })}
                    </Stack>
                </div>
            </div>
            <div className="mt-16">
                <Title onClick={() => console.log("ontsloh")}>
                    <IconStore bg="#0BBFBF" />
                    <div className="vw-2" />
                    <Text weight="700" size="16">Дэлгүүр</Text>
                </Title>
                <div className="overflow-x flex">
                    <Stack spacing={2} direction={"row"}>
                        {shopData.map((e, index) => {
                            return (
                                <CardShop key={index} onClick={() => PushShop(e.id)} img={e.image} title={e.title} desc={e.description} avatar={e.avatar} />
                            )
                        })}
                    </Stack>
                </div>
            </div>
            <div className="mt-16">
                <Title onClick={() => console.log("ontsloh")}>
                    <IconStore bg="#D9166F" />
                    <div className="vw-2" />
                    <Text weight="700" size="16">Эвент</Text>
                </Title>
                <div className="overflow-x flex">
                    <Stack spacing={2} direction={"row"}>
                        {eventData.map((e, index) => {
                            return (
                                <CardHomeEvent key={index} onClick={() => PushEvent(e.id)} img={e.image} title={e.title} desc={`${e.onsar[0]}`} organizer={e.organizer} />
                            )
                        })}
                    </Stack>
                </div>
            </div>
            <div className="mt-16">
                <Title onClick={() => console.log("ontsloh")}>
                    <IconGameController />
                    <div className="vw-2" />
                    <Text weight="700" size="16">Чөлөөт цаг</Text>
                </Title>
                <div className="overflow-x flex">
                    <Stack spacing={2} direction={"row"}>
                        {gamesData.map((e, index) => {
                            return (
                                <CardGames key={index} onClick={() => GameButton(e.id)} img={e.image} title={e.title} desc={e.description} />
                            )
                        })}
                    </Stack>
                </div>
            </div>
            <div className="mt-16">
                <Title onClick={() => console.log("ontsloh")}>
                    <IconNote />
                    <div className="vw-2" />
                    <Text weight="700" size="16">Үйлчилгээ</Text>
                </Title>
                <div className="overflow-x flex">
                    <Stack spacing={2} direction={"row"}>
                        {servicesData.map((e, index) => {
                            return (
                                <CardServiceBig key={index} onClick={() => PushService(e.id)} title={e.title} desc={e.description} avatar={e.avatar} />
                            )
                        })}
                    </Stack>
                </div>
                <div className="hpx-120 w100" />
            </div>
            <PopUp open={open} setOpen={setOpen} >
                <div className="relative bg-dark-surface vw-90 br-16 flex align-center col z-index-3">
                    <div className="flex col align-center py-50 ">
                        <IconPopUp />
                        <Text className="mt-16" weight="700" size="16" center>Та тоголхын тулд Metaland-руу орох шаарлагатай</Text>
                    </div>
                    <div className="footer-button w100 flex row pt-16 pl-16 pr-16 pb-32 justify-evenly">
                        <div style={{ width: "45%" }}>
                            <Button bg="primary-dark-brand" onClick={() => setOpen(false)}>
                                <Text weight="600" color="dark-light">
                                    Болих
                                </Text>
                            </Button>
                        </div>
                        <div style={{ width: "45%" }}>
                            <Button onClick={PushGame}>
                                <Text weight="600" color="black">
                                    Зочлох
                                </Text>
                            </Button>
                        </div>
                    </div>
                </div>
            </PopUp>
            <Footer />
        </div>
    );
}