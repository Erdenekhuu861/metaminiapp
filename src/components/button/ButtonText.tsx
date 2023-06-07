import React from 'react';
import { Text } from '../text';

type ButtonTextType = {
    onClick: () => void,
    children: any,
    height?: string,
    className?: string,
    fontSize?: string,
    disabled?: boolean,
    color?: string,
    weight?: string
}

export const ButtonText: React.FC<ButtonTextType> = (params) => {
    const {onClick, children, height = '48', className, fontSize = "12", disabled = false, color = 'primary', weight = '400'} = params;
  return (
    <button onClick={onClick} className={`hpx-${height} ${className} btn-text bg-transparent`} disabled={disabled}>
        <Text size={fontSize} color={color} weight={weight}>
            {children}
        </Text>
    </button>
  );
}