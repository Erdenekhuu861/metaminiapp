import React from 'react';
import { Text } from "../../components";
import { IconCalendar, IconRightArrow } from '../../assets';
import { Avatar } from '@mui/material';

type CardHomeEventType = {
    onClick: () => void,
    bg?: string,
    img?: string,
    title: string,
    desc: string,
    avatar?: string,
    organizer: string,
}

export const CardHomeEvent: React.FC<CardHomeEventType> = (params) => {
    const { onClick, bg = "dark-surface", img, title, desc, avatar, organizer } = params;
    return (
        <div onClick={onClick} className={`bg-${bg} pa-8 flex col justify-between br-12`}>
            <div className='btr-12 hpx-132 wpx-285' style={{backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center"}}/>
            <div className='flex col pl-8 pt-12 pb-4'>
                <Text color='dark-light' weight='700' size='18' ls='0.15'>{title}</Text>
                <div className='flex align-center mt-8'>
                    <IconCalendar />
                    <Text className='ml-8' color='primary-opacity'>{desc}</Text>
                </div>
            </div>
            <div className='pa-16 flex align-center justify-between mt-4' style={{borderTop: "0.5px solid #252535"}}>
                <div className='flex align-center'>
                    <Avatar src={avatar} sx={{ width: 24, height: 24 }} />
                    <Text className='ml-8' weight='600' color='dark-light'>{organizer}</Text>
                </div>
                <IconRightArrow bg='#DCCFFF' />
            </div>
        </div>
    );
}