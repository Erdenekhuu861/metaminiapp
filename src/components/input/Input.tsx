import React from 'react';

type InputType = {
  placeholder: string,
  height?: string,
  className?: string,
  bgColor?: string,
  color?: string,
  onChange: (e:any) => void,
  failed?: boolean,
  disabled?: boolean,
  value?: string,
  onFocus?: (e:any) => void,
  ref?: any,
}

export const Input: React.FC<InputType> = (params) => {
  const { bgColor = "dark", color = 'dark-light', placeholder, onChange, failed, disabled, value, className, onFocus, ref } = params;
  return (
    <div className={`w100 flex ${className}`}>
      <input ref={ref} onFocus={onFocus} disabled={disabled} onChange={onChange} className={`pl-16 pr-8 flex-1 hpx-56 br-12 b-0 ${failed ? "input-failed" : "input"} bg-${bgColor} c-${color}`} placeholder={placeholder} value={value} />
    </div>
  );
}