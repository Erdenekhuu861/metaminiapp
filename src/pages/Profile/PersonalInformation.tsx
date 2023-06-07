import { Button, CardRecommendServices, CardServiceBig, CardServiceSmall, Footer, Input, Text, Title } from "../../components";
import { Avatar, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IconFile, IconGear, IconQuestion, IconSignOut, IconUser, IconUserLine, IconUsers } from "../../assets";
import { BiArrowBack } from "react-icons/bi";
import { useEffect, useState } from "react";
import axios from "axios";

export const PersonalInformation = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState({
        username: "",
        nickname: "",
        lastname: "",
        firstname: "",
        phone: "",
        email: "",
        sex: "",
    });

    const BackButton = () => {
        navigate(-1);
    }

    useEffect(() => {
        axios({
            method: 'get',
            url: `${process.env.REACT_APP_AWS_URL}/getdata`,
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((response) => {
            setValue({
                ...value,
                ...response.data
            })
        })
    }, [])

    const confirmButton = () => {
        axios({
            method: 'post',
            url: `${process.env.REACT_APP_AWS_URL}/setdata`,
            headers: {
                Authorization: localStorage.getItem("token")
            },
            data: value
        }).then(() => {
            alert("saved")
        })
    }

    return (
        <div className='w-100 pt-12 flex col pl-24 pr-24'>
            <div className="flex align-center hpx-44 mb-6 pa-8">
                <BiArrowBack color="white" fontSize={"20"} onClick={BackButton} className="mr-20" />
                <Text weight="700" size="16" color="dark-light">Хувийн мэдээлэл</Text>
            </div>
            <Stack spacing={1} >
                <div className="opacity-50">
                    <Input placeholder="Нэвтрэх нэр" onChange={(e: any) => setValue({ ...value, username: e.target.value })} value={value.username} disabled={true} />
                </div>
                <Input placeholder="Хоч нэр" onChange={(e: any) => setValue({ ...value, nickname: e.target.value })} value={value.nickname} />
                <Input placeholder="Овог" onChange={(e: any) => setValue({ ...value, lastname: e.target.value })} value={value.lastname} />
                <Input placeholder="Нэр" onChange={(e: any) => setValue({ ...value, firstname: e.target.value })} value={value.firstname} />
                <Input placeholder="Утасны дугаар" onChange={(e: any) => setValue({ ...value, phone: e.target.value })} value={value.phone} />
                <Input placeholder="И-мэйл" onChange={(e: any) => setValue({ ...value, email: e.target.value })} value={value.email} />
                <Input placeholder="Хүйс" onChange={(e: any) => setValue({ ...value, sex: e.target.value })} value={value.sex} />
            </Stack>
            <div className="footer-button fixed bg-background-color bottom-0 hpx-96 flex align-center justify-center left-0 w100">
                <Button onClick={confirmButton} className="vw-92">
                    <Text weight="600" color={"dark-text"}>Хадгалах</Text>
                </Button>
            </div>
        </div>
    );
}