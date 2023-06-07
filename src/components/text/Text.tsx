import React from 'react';

type TextType = {
    color?: string,
    children: any,
    size?: string,
    weight?: string,
    opacity?: string,
    center?: boolean,
    className?: string,
    ls?: string,
}

export const Text: React.FC<TextType> = (params) => {
    const { color = 'white', children, size = "14", weight = "400", opacity = "100", center = false, className, ls } = params;
    return (
        <span className={`${className} c-${color} fs-${size} manrope-${weight} opacity-${opacity} ${center ? "text-center" : ""}`} style={{letterSpacing: `${ls}px`}}>
            {children}
        </span>
    );
}