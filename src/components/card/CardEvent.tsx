import React from 'react';
import { Text } from "../../components";
import { IconCalendar } from '../../assets';

type CardEventType = {
    onClick: () => void,
    bg?: string,
    img?: string,
    title: string,
    desc: string,
    avatar?: string,
    organizer: string,
    date: string[],
}

export const CardEvent: React.FC<CardEventType> = (params) => {
    const { onClick, bg = "dark-surface", img, title, desc, date } = params;
    return (
        <div onClick={onClick} className={`bg-${bg} flex col justify-between br-12`}>
            <div className='btr-12 hpx-148' style={{backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center"}}/>
            <div className='flex row pl-16 pt-12 pr-16 pb-12 justify-between'>
                <div className='flex col'>
                    <Text color='dark-light' weight='700' size='16' ls='0.15'>{title}</Text>
                </div>
                <div className='wpx-67 hpx-88 br-8 bg-soft-surface'>
                    <div className='flex justify-center pa-8 br-12' style={{ borderBottom: "1px solid rgba(88, 63, 153, 0.2)" }}>
                        <Text size='12' color='dark-light' ls='0.4'>Пүрэв</Text>
                    </div>
                    <div className='pa-8 flex col align-center'>
                        <Text weight='700' size='16' ls='0.15' color='dark-light'>25</Text>
                        <Text size='12' ls='0.4' color='primary-opacity'>6-сар</Text>
                    </div>
                </div>
            </div>
        </div>
    );
}