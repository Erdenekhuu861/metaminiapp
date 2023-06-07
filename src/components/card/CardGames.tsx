import React from 'react';
import { Text } from "../../components";

type CardGamesType = {
    onClick: () => void,
    bg?: string,
    img?: string,
    title: string,
    desc: string,
}

export const CardGames: React.FC<CardGamesType> = (params) => {
    const { onClick, img, title, desc } = params;
    return (
        <div onClick={onClick} className={`wpx-208 hpx-203 br-12`} style={{ backgroundImage: `url(${img})` }}>
            <div className='flex h100 pl-16 pr-16 col justify-end' style={{ background: "linear-gradient(180deg, rgba(16, 19, 24, 0) 0%, #101318 100%)" }}>
                <Text color='dark-light' weight='600'>{title}</Text>
                <Text color='primary-opacity' size='12' className='mb-11'>{desc}</Text>
            </div>
        </div>
    );
}