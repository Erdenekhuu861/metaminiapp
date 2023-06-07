import { useNavigate } from "react-router-dom";
import { Text } from "../../components"
import DownloadIcon from '@mui/icons-material/Download';
const logo = require("../../assets/pics/Logo.png");

export const Header = () => {
    const path = window.location.pathname;
    const navigate = useNavigate();

    const pushDownload = () => {
        navigate("?downloader=");
    }

    switch (path) {
        case "/":
            return (
                <div className="fixed top-0 left-0 bg-background-color vw-100 flex row justify-between align-center mb-20 pt-8 pb-8 z-index-2">
                    <img src={logo} alt="logo" className="wpx-125 hpx-44 ml-16" />
                    <div onClick={pushDownload} className="flex justify-center align-center border-1 border-color-dark-stroke b-solid br-40 wpx-40 hpx-40 mr-16">
                        <DownloadIcon sx={{ color: "#DCCFFF", fontSize: "18px" }} />
                    </div>
                </div>
            )
        case "/shop":
            return (
                <div className="fixed top-0 left-0 bg-background-color vw-100 flex row justify-between align-center hpx-44 mb-6 pt-8 pb-8 z-index-10">
                    <Text weight="700" size="22" color="dark-light ml-16">Худалдаа</Text>
                    <div onClick={pushDownload} className="flex justify-center align-center border-1 border-color-dark-stroke b-solid br-40 wpx-40 hpx-40 mr-16">
                        <DownloadIcon sx={{ color: "#DCCFFF", fontSize: "18px" }} />
                    </div>
                </div>
            )
        case "/services":
            return (
                <div className="fixed top-0 left-0 bg-background-color vw-100 flex row justify-between align-center hpx-44 mb-6 pt-8 pb-8 z-index-10">
                    <Text weight="700" size="22" color="dark-light ml-16">Үйлчилгээ</Text>
                    <div onClick={pushDownload} className="flex justify-center align-center border-1 border-color-dark-stroke b-solid br-40 wpx-40 hpx-40 mr-16">
                        <DownloadIcon sx={{ color: "#DCCFFF", fontSize: "18px" }} />
                    </div>
                </div>
            )
        case "/event":
            return (
                <div className="fixed top-0 left-0 bg-background-color vw-100 flex row justify-between align-center hpx-44 mb-6 pt-8 pb-8 z-index-10">
                    <Text weight="700" size="22" color="dark-light ml-16">Эвент</Text>
                    <div onClick={pushDownload} className="flex justify-center align-center border-1 border-color-dark-stroke b-solid br-40 wpx-40 hpx-40 mr-16">
                        <DownloadIcon sx={{ color: "#DCCFFF", fontSize: "18px" }} />
                    </div>
                </div>
            )
        case "/profile":
            return (
                <div className="fixed top-0 left-0 bg-background-color vw-100 flex row justify-between align-center hpx-44 mb-6 pt-8 pb-8 z-index-10 ml-16">
                    <Text weight="700" size="22" color="dark-light">Профайл</Text>
                </div>
            )
        default:
            return <></>
    }
}