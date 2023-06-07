import React from 'react';
import { Text } from "../../components";

type CardHomeFeaturedType = {
  onClick: () => void,
  bg?: string,
  img: string,
  title: string,
  desc: string,
}

export const CardHomeFeatured: React.FC<CardHomeFeaturedType> = (params) => {
  const { onClick, bg = "dark-surface", img, title, desc } = params;
  return (
    <div onClick={onClick} className={`bg-${bg} pa-8 flex col justify-between br-12`}>
      <div className='br-12 w100 hpx-144' style={{backgroundImage: `url(${img})`}} />
      {/* {img ? <img src={img} alt="card picture" className='br-12' /> : <></>} */}
      <div className='flex col pl-8 pt-12 pb-4'>
        <Text color='dark-light' weight='700' size='18' ls='0.15'>{title}</Text>
        <Text color='primary-opacity'>{desc}</Text>
      </div>
    </div>
  );
}