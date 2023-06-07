import React from 'react';
import { Text } from "../../components";
import { IconHouseLine } from '../../assets/svg/IconHouseLine';
import { IconCalendarLine, IconMapPin, IconStoreLine, IconUserLine } from '../../assets';
import { useNavigate } from 'react-router-dom';

export const Footer: React.FC = (params) => {
    const path = window.location.pathname;

    const navigate = useNavigate();

    const PushHome = () => {
        navigate("/");
    }
    const PushShop = () => {
        navigate("/shop");
    }
    const PushServices = () => {
        navigate("/services");
    }
    const PushEvent = () => {
        navigate("/event");
    }
    const PushProfile = () => {
        navigate("/profile");
    }

    return (
        <div className='flex hpx-80 fixed bottom-0 left-0 justify-center bg-background-color vw-100' style={{borderTop: "1px solid #333047"}}>
            <div className='flex align-center justify-evenly h100 w100'>
                <div onClick={PushHome} className='flex col align-center justify-center wpx-49 h100' style={{borderTop: `${path === "/" ? "2px solid #EDE6FF" : ""}`}}>
                    <IconHouseLine />
                    <div className='hpx-8' />
                    <Text weight='600' size='12' color='white'>Нүүр</Text>
                </div>
                <div onClick={PushShop} className='flex col align-center justify-center wpx-49 h100' style={{borderTop: `${path === "/shop" ? "2px solid #EDE6FF" : ""}`}}>
                    <IconStoreLine />
                    <div className='hpx-8' />
                    <Text weight='600' size='12' color='white'>Дэлгүүр</Text>
                </div>
                <div onClick={PushServices} className='flex col align-center justify-center wpx-49 h100' style={{borderTop: `${path === "/services" ? "2px solid #EDE6FF" : ""}`}}>
                    <IconMapPin />
                    <div className='hpx-8' />
                    <Text weight='600' size='12' color='white'>Үйлчилгээ</Text>
                </div>
                <div onClick={PushEvent} className='flex col align-center justify-center wpx-49 h100' style={{borderTop: `${path === "/event" ? "2px solid #EDE6FF" : ""}`}}>
                    <IconCalendarLine />
                    <div className='hpx-8' />
                    <Text weight='600' size='12' color='white'>Эвент</Text>
                </div>
                <div onClick={PushProfile} className='flex col align-center justify-center wpx-49 h100' style={{borderTop: `${path === "/profile" ? "2px solid #EDE6FF" : ""}`}}>
                    <IconUserLine />
                    <div className='hpx-8' />
                    <Text weight='600' size='12' color='white'>Профайл</Text>
                </div>
            </div>
        </div>
    );
}