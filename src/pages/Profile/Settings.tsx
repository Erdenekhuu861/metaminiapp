import { Button, CardRecommendServices, CardServiceBig, CardServiceSmall, Footer, Input, Text, Title } from "../../components";
import { Avatar, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IconFile, IconGear, IconLock, IconQuestion, IconSignOut, IconUser, IconUserLine, IconUsers } from "../../assets";
import { BiArrowBack } from "react-icons/bi";
import { useEffect, useState } from "react";

export const Settings = () => {
    const navigate = useNavigate();

    const BackButton = () => {
        navigate(-1);
    }

    return (
        <div className='w-100 pt-12 flex col pl-24 pr-24' >
            <div className="flex align-center hpx-44 mb-6 pa-8">
                <BiArrowBack color="white" fontSize={"20"} onClick={BackButton} className="mr-20" />
                <Text weight="700" size="16" color="dark-light">Тохиргоо</Text>
            </div>
            <Stack>
                <Title onClick={() => navigate("/profile/settings/changepassword")} arrowColor="#DCCFFF">
                    <IconLock />
                    <Text color="dark-light" className="ml-8" >Нууц үг солих</Text>
                </Title>
            </Stack>
        </div>
    );
}