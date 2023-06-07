import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { Text } from "../../components";
import { LinearProgress, Typography } from "@mui/material";

export const Download = () => {
    const navigate = useNavigate();

    const BackButton = () => {
        navigate(-1);
    }

    const img = "https://picsum.photos/40/40"

    return (
        <div className='w-100 vh-100 flex col pl-24 pr-24 relative'>
            <div className="flex align-center hpx-44 mb-6 pa-8">
                <BiArrowBack color="white" fontSize={"20"} onClick={BackButton} className="mr-20" />
            </div>
            <div className={`bg-dark-surface flex col justify-between br-12`}>
                <div className='flex row pl-16 pt-12 pr-16 pb-12'>
                    <div className="wpx-60 hpx-60 mr-8" style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}></div>
                    <div className='flex col flex-1'>
                        <Text color='dark-light' weight='700' size='16' ls='0.15'>Next</Text>
                        <div className="flex row justify-between align-center">
                            <div className="w100 mr-8">
                                <LinearProgress sx={{
                                    backgroundColor: `#DCCFFF`,
                                    "& .MuiLinearProgress-bar": {
                                        backgroundColor: `#B599FF`
                                    }
                                }} variant="determinate" value={60} />
                            </div>
                            <Text color="dark-light">60%</Text>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}