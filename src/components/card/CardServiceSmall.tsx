import React from 'react';
import { Text, Button } from "../../components";

type CardServiceBigType = {
    onClick: () => void,
    bg?: string,
    title: string,
    desc: string,
    img: string,
}

export const CardServiceSmall: React.FC<CardServiceBigType> = (params) => {
    const { title, img } = params;
    return (
        <div onClick={() => console.log('sda')} className='flex col align-center bg-dark-surface pa-8 br-12'>
            <div className='br-8 w100 hpx-88 mb-8' style={{backgroundImage: `url(${img ? img : "https://dummyimage.com/600x800/"})`, backgroundSize: "cover", backgroundPosition: 'center'}} />
            <Text weight='700' size='16' ls='0.15' color='dark-light' className='mb-8'>{title}</Text>
            <div style={{width: "90%"}} >
                <Button onClick={() => console.log("sda")} border='1' bColor='dark-stroke-12' bg='dark-glassy' height='40'>
                    <Text weight='600' size='12' color='primary1-hover'>Үйлчилгээ авах</Text>
                </Button>
            </div>
        </div>
    );
}