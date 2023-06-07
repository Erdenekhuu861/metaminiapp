import React from 'react';
import { IconRightArrow } from "../../assets";

type TitleType = {
    onClick: () => void,
    children: any,
    height?: string,
    className?: string,
    disabled?: boolean,
    bg?: string,
    opacity?: string,
    arrowColor?: string,
}

export const Title: React.FC<TitleType> = (params) => {
    const { onClick, children, height = '48', className, opacity = "100", arrowColor } = params;
    return (
        <button onClick={onClick} className={`hpx-${height} bg-transparent w100 border-0 flex justify-between align-center ${className} opacity-${opacity} mb-12`}>
            <div className="flex align-center">
                {children}
            </div>
            <IconRightArrow bg={arrowColor} />
        </button>
    );
}