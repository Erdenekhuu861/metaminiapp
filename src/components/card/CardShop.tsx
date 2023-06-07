import React from 'react';
import { Text } from "../../components";
import { Avatar } from '@mui/material';

type CardShopType = {
    onClick: () => void,
    bg?: string,
    img?: string,
    title: string,
    desc: string,
    avatar?: string,
}

export const CardShop: React.FC<CardShopType> = (params) => {
    const dummyImg = "https://dummyimage.com/342/144/"
    const { onClick, bg = "dark-surface", img, title, desc, avatar } = params;

    return (
        <div onClick={onClick} className={`bg-${bg} flex col justify-between br-12`}>
            <div style={{backgroundImage: `url(${img ? img : dummyImg})`, backgroundSize: "cover"}} className='w100 hpx-172 btr-12' />
            <div className='flex pl-16 pt-16 pb-12'>
                <Avatar src={avatar} />
                <div className='flex col ml-8'>
                    <Text color='dark-light' weight='700' size='18' ls='0.15'>{title}</Text>
                    <Text color='primary-opacity'>{desc}</Text>
                </div>
            </div>
        </div>
    );
}