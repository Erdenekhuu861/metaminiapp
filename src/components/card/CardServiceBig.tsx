import React from 'react';
import { Text, Button } from "../../components";
import { Avatar } from '@mui/material';
import { IconUser } from '../../assets';

type CardServiceBigType = {
    onClick: () => void,
    bg?: string,
    title: string,
    desc: string,
    avatar: string,
}

export const CardServiceBig: React.FC<CardServiceBigType> = (params) => {
    const { onClick, bg = "dark-surface", title, desc, avatar } = params;
    return (
        <div onClick={onClick} className={`bg-${bg} wpx-283 pa-16 flex col justify-between br-12`}>
            <Avatar src={avatar} />
            <div className='flex col pl-8 pt-12 pb-4'>
                <Text color='dark-light' weight='700' size='18' ls='0.15'>{title}</Text>
                <Text className='flex align-center mt-4' color='primary-opacity' size='12'>
                    <IconUser />
                    <div className='wpx-8' />
                    {desc}
                </Text>
            </div>
            <div className='pb-4 pt-16'>
                <Button onClick={() => console.log("sda")} border='1' bColor='dark-stroke-12' bg='dark-glassy'>
                    <Text weight='600' size='12' color='primary1-hover'>Үйлчилгээ авах</Text>
                </Button>
            </div>
        </div>
    );
}