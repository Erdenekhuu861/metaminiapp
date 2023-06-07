import React from 'react';
import { Text, ButtonText } from "../../components";
import { IconRightArrow } from '../../assets';
import { useNavigate } from "react-router-dom";
import { Avatar } from '@mui/material';

type CardServiceBigType = {
    bg?: string,
    data: { title: string, description: string, avatar: string, id: string }[],
}

export const CardRecommendServices: React.FC<CardServiceBigType> = (params) => {
    const navigate = useNavigate();

    const pushService = (id: string) => {
        navigate(`/services/${id}`)
    }

    const { bg = "dark-surface", data } = params;

    return (
        <div className={`px-16 bg-${bg} br-12`}>
            <div className='py-12'>
                <Text weight='700' size='16' ls='0.15' color='dark-light' >Танд санал болгож буй</Text>
            </div>
            <div>
                {data.map((e, index) => {
                    return (
                        <div key={index} className='py-16 flex align-center justify-between' onClick={() => pushService(e.id)} >
                            <div className='flex'>
                                <Avatar alt='avatar' src={e.avatar} className='br-12 mr-12' />
                                <div className='flex col'>
                                    <Text weight='700' size='16' color='dark-light' ls='0.15'>{e.title}</Text>
                                    <Text size='12' ls='0.4' color='primary-opacity'>{e.description[0].length > 20 ? `${e.description[0].substring(0, 20)}...` : e.description[0]}</Text>
                                </div>
                            </div>
                            <IconRightArrow bg='rgba(220, 207, 255, 0.64)' />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}