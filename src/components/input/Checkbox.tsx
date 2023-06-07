import React, { useState } from 'react';
import { Text } from "../text";
import { BsCheckLg } from "react-icons/bs"

type CheckboxType = {
  placeholder: string,
  height?: string,
  className?: string,
  bgColor?: string,
  color?: string,
}

export const Checkbox: React.FC<CheckboxType> = (params) => {

  const { placeholder } = params;
  const [checked, setChecked] = useState(false);

  return (
    <div className='flex align-center'>
      <label className='flex align-center'>
        <input type='checkbox' className='checkbox ac-primary mr-10 wpx-11 hpx-11' onChange={(e) => { setChecked(e.target.checked); console.log(e.target.checked) }} />
        <span className={`custom-checkbox ${checked ? "bg-primary" : "bg-transparent"} flex justify-center align-center`}>
          <BsCheckLg />
        </span>
      </label>
      <Text opacity='64' size='12' >{placeholder}</Text>
    </div>
  );
}