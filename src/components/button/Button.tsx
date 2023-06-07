import React from 'react';

type ButtonType = {
    onClick: () => void,
    children: any,
    height?: string,
    className?: string,
    disabled?: boolean,
    bg?: string,
    opacity?: string,
    border?: string,
    bColor?: string,
}

export const Button: React.FC<ButtonType> = (params) => {
    const {onClick, children, height = '48', className, disabled = false, bg = "primary1", opacity = "100", border, bColor, } = params;
  return (
    <button disabled={disabled} onClick={onClick} className={`hpx-${height} button ${className} ${disabled ? "disabled-button bg-primary-dark-brand" : `bg-${bg}`} opacity-${opacity} ${border ? `border-${border} border-color-${bColor} b-solid` : ""}`}>
        <span>
            {children}
        </span>
    </button>
  );
}