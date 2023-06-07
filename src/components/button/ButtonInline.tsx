import React from 'react';

type ButtonInlineType = {
    onClick: () => void,
    children: any,
    height?: string,

}

export const ButtonInline: React.FC<ButtonInlineType> = (params) => {
    const {onClick, children, height = '48' } = params;
  return (
    <button onClick={onClick} className={`hpx-${height} button-inline`}>
        <span className='c-white'>
            {children}
        </span>
    </button>
  );
}