import { CardRecommendServices, CardServiceBig, CardServiceSmall, Footer, Header, Text, Title } from "../../components";
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Services = () => {
    const navigate = useNavigate();
    const [servicesData, setServicesData] = useState<any>([]);

    const PushService = (id: string) => {
        navigate(`/services/${id}`);
    }

    useEffect(() => {
        axios({
            method: 'get',
            url: `${process.env.REACT_APP_AWS_URL}/listservice`,
        }).then((response: any) => {
            setServicesData(response.data);
        });
    }, [])

    return (
        <div className='w-100 vh-100 mt-72 flex col pl-24 pr-24'>
            <Header />
            <div className="mt-16">
                <Title onClick={() => { }} arrowColor="#DCCFFF">
                    <Text weight="700" size="16" color="dark-light">Сүүлд авсан үйлчилгээ</Text>
                </Title>
                <div className="overflow-x flex">
                    <Stack spacing={2} direction={"row"}>
                        {servicesData.map((e: any, index: any) => {
                            return (
                                <CardServiceBig key={index} onClick={() => PushService(e.id)} title={e.title} desc={e.description} avatar={e.avatar} />
                            )
                        })}
                    </Stack>
                </div>
            </div>
            <div className='mt-28'>
                <CardRecommendServices data={servicesData}></CardRecommendServices>
            </div>
            <div className="mt-16">
                <Title onClick={() => {}} arrowColor="#DCCFFF">
                    <Text weight="700" size="16" color="dark-light">Бусад үйлчилгээ</Text>
                </Title>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: 8
                }}>
                    {servicesData.map((e: any, index: any) => {
                        return (
                            <CardServiceSmall key={index} onClick={() => PushService(e.id)} title={e.title} desc={e.description} img={e.img} />
                        )
                    })}
                </div>
                <div className="hpx-120 w100" />
            </div>
            <Footer />
        </div>
    );
}