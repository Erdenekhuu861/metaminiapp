import { BiArrowBack } from "react-icons/bi";
import { CardHomeFeatured, Text } from "../../components";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FeaturedDummyData: { title: string, description: string, image: string }[] = [
    {
        title: "HU in the Metaverse",
        description: "Арга хэмжээ тун удахгүй...",
        image: "https://picsum.photos/342/144",
    },
    {
        title: "Metaland New Patch ",
        description: "1.0.4 RELEASED",
        image: "https://picsum.photos/342/144",
    },
    {
        title: "HU in the Metaverse",
        description: "Арга хэмжээ тун удахгүй...",
        image: "https://picsum.photos/342/144",
    },
    {
        title: "HU in the Metaverse",
        description: "Арга хэмжээ тун удахгүй...",
        image: "https://picsum.photos/342/144",
    },
    {
        title: "HU in the Metaverse",
        description: "Арга хэмжээ тун удахгүй...",
        image: "https://picsum.photos/342/144",
    },
    {
        title: "HU in the Metaverse",
        description: "Арга хэмжээ тун удахгүй...",
        image: "https://picsum.photos/342/144",
    },
    {
        title: "HU in the Metaverse",
        description: "Арга хэмжээ тун удахгүй...",
        image: "https://picsum.photos/342/144",
    },
]

export const Featured = () => {
    const navigate = useNavigate();

    const BackButton = () => {
        navigate(-1);
    }

    return (
        <div className='w-100 pt-12 flex col pl-24 pr-24'>
            <div className="flex align-center hpx-56">
                <BiArrowBack color="white" fontSize={"20"} onClick={BackButton} style={{color: "#DCCFFF"}} />
                <Text weight='700' size="16" color="dark-light" className="ml-20" >Онцлох</Text>
            </div>
            <Stack spacing={2}>
                {FeaturedDummyData.map((e, index) => {
                    return (
                        <CardHomeFeatured key={index} onClick={() => console.log("sda")} img={e.image} title={e.title} desc={e.description} />
                    )
                })}
            </Stack>
        </div>
    );
}