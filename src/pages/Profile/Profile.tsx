import { CardRecommendServices, CardServiceBig, CardServiceSmall, Footer, Header, Text, Title } from "../../components";
import { Avatar, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IconFile, IconGear, IconQuestion, IconSignOut, IconUser, IconUserLine, IconUsers } from "../../assets";

const logo = require('../../assets/pics/ProfileBG.png')

export const Profile = () => {
    const navigate = useNavigate();

    const profileDummyData: { username: string, description: string, avatar: string, img: string, id: string } = {
        id: "#12381021883",
        username: "Bilguun World",
        description: "136K үйлчилгээ авсан",
        avatar: "https://picsum.photos/80/80",
        img: "https://picsum.photos/155/88",
    }

    const signOut = () => {
        localStorage.clear();
        navigate("/");
    }

    return (
        <div className='w-100 mt-72 flex col pl-24 pr-24'>
            <Header />
            <div className="flex justify-center align-center col pa-32" style={{ backgroundImage: `url(${logo})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <div className="border-2 border-color-primary-stroke b-solid br-100">
                    <Avatar sx={{ width: 80, height: 80 }} />
                </div>
                <Text weight="700" size="16" color="dark-light" className="mt-16">{profileDummyData.username}</Text>
                <Text color="dark-light" className="mt-4">{profileDummyData.id}</Text>
            </div>
            <div>
                <Title onClick={() => navigate("/profile/information")} arrowColor="#DCCFFF" >
                    <IconUserLine />
                    <Text color="dark-light" className="ml-8">Хувийн мэдээлэл</Text>
                </Title>
                <Title onClick={() => console.log("sda")} arrowColor="#DCCFFF" >
                    <IconUsers />
                    <Text color="dark-light" className="ml-8">Найзууд</Text>
                </Title>
                <Title onClick={() => navigate("/profile/settings")} arrowColor="#DCCFFF" >
                    <IconGear />
                    <Text color="dark-light" className="ml-8">Тохиргоо</Text>
                </Title>
                <Title onClick={() => console.log("sda")} arrowColor="#DCCFFF" >
                    <IconFile />
                    <Text color="dark-light" className="ml-8">Үйлчилгээний нөхцөл</Text>
                </Title>
                <Title onClick={() => console.log("sda")} arrowColor="#DCCFFF" >
                    <IconQuestion />
                    <Text color="dark-light" className="ml-8">Тусламж</Text>
                </Title>
                <Title onClick={signOut} arrowColor="#DCCFFF" >
                    <IconSignOut />
                    <Text color="dark-light" className="ml-8">Гарах</Text>
                </Title>
            </div>
            <Footer />
        </div>
    );
}