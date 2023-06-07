import { Logo, LogoText } from "../../assets";
import { fadeIn, slideInDown, slideInUp } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const styles = StyleSheet.create({
    fadeIn: {
        animationName: fadeIn,
        animationDuration: '10s',
    },
    slideInDown: {
        animationName: slideInDown,
        animationDuration: '2s',
    },
    slideInUp: {
        animationName: slideInUp,
        animationDuration: '2s',
    }
})

export const Splash = () => {
    const navigate = useNavigate();

    setTimeout(() => {
        navigate("/onboard");
    }, 2000)

    return (
        <div className='w-100 vh-100 flex col justify-center align-center' style={{ paddingLeft: '24px', paddingRight: '24px' }}>
            <div className={css(styles.fadeIn, styles.slideInUp)}>
                <Logo />
            </div>
            <div className={css(styles.fadeIn, styles.slideInDown)}>
                <LogoText />
            </div>
        </div>
    );
}