import React from 'react';

type ButtonStepType = {
    onClick: () => void,
    children: any,
    height?: string,
    className?: string,
    disabledBg?: string,
    bg?: string,
    opacity?: string,
    step: number,
}

export const ButtonStep: React.FC<ButtonStepType> = (params) => {
    const { onClick, children, height = '48', className, bg = "primary1", disabledBg = "primary1-disabled", opacity = "100", step } = params;
    return (
        <button disabled={step !== 1 ? true : false} onClick={onClick} className={`hpx-${height} relative button-step ${className} disabled-bg-${disabledBg} opacity-${opacity}`}>
            <div className={`bg-${bg} absolute h100 br-12 left-0`} style={{ width: `${step * 100}%` }} />
            <span className='flex justify-center align-center w100 h100 z-index-1'>
                {children}
            </span>
        </button>
    );
}