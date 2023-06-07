import { CardShop, Footer, Header, Text, Title } from "../../components";
import { IconDownload, IconFire, IconStar } from "../../assets";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const Shop = () => {
    const navigate = useNavigate();
    const [shopData, setShopData] = useState<any>([]);

    const PushDetail = (id: string) => {
        navigate(`/shop/${id}`);
    }

    useEffect(() => {
        axios({
            method: 'get',
            url: `${process.env.REACT_APP_AWS_URL}/listshop`,
        }).then((response: any) => {
            setShopData(response.data);
        });
    }, [])

    return (
        <div className='w-100 vh-100 mt-72 flex col pl-24 pr-24'>
            <Header />
            <Stack spacing={2} direction={"column"}>
                {shopData.map((e: any, index: any) => {
                    return (
                        <CardShop key={index} onClick={() => PushDetail(e.id)} img={e.image} title={e.title} desc={e.description} avatar={e.avatar} />
                    )
                })}
            </Stack>
            <div className="hpx-120 w100" />
            <Footer />
        </div>
    );
}