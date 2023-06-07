import { Button } from '../../components';
import { useState } from "react";

type PopUpType = {
    open: boolean,
    setOpen: Function,
    children: any,
}

export const PopUp: React.FC<PopUpType> = (params) => {
    const { open, children, setOpen } = params;

    return (
        <div>
            <div className={`fixed vw-100 vh-100 top-0 left-0 popup z-index-2 justify-center align-center ${open ? "flex" : "d-none"}`}>
                <div onClick={() => setOpen(false)}  className='absolute vw-100 vh-100 top-0 left-0 z-index-2'></div>
                {children}
            </div>
        </div>
    );
}