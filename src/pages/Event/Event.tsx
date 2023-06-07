import { useNavigate } from "react-router-dom";
import { CardEvent, Footer, Header, Text } from "../../components";
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

export const Event = () => {
    const [data, setData] = useState<any>([]);
    const navigate = useNavigate();

    const pushDetail = (id: string) => {
        navigate(`/event/${id}`);
    }

    useEffect(() => {
        axios({
            method: 'get',
            url: `${process.env.REACT_APP_AWS_URL}/listevent`,
        }).then((response: any) => {
            setData(response.data);
        });
    }, [])

    return (
        <div className='w-100 vh-100 mt-72 flex col pl-24 pr-24'>
            <Header />
            <Stack className="mt-24" spacing={2} direction={"column"}>
                {data.map((e: any) => {
                    return (
                        <CardEvent onClick={() => pushDetail(e.id)} desc={e.description} title={e.title} organizer={e.organizer} img={e.image} date={e.onsar} />
                    )
                })}
            </Stack>
            <Footer />
        </div>
    );
}