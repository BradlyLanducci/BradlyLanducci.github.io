import { useNavigate } from 'react-router-dom';
import { NavButton } from "./nav_button";

import About from "../pages/about"
import Vain from "../pages/vain"
import Music from "../pages/music"

import ProfilePic from "../assets/profile_pic.jpg"

export const Pages: Record<string, React.ComponentType> = {
    "about": About,
    "vain_audio": Vain,
    "music": Music
};

export const NavBar = () => {
    const navigate = useNavigate();

    const rootStyle: Record<string, any> = {
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "fit-content"
    };

    const profilePicStyle: Record<string, any> = {
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "192px",
        height: "auto",
        objectFit: "contain"
    };

    const imageContainerStyle: Record<string, any> = {
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        height: "164px",
    };

    const navBarStyle: Record<string, any> = {
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        height: "fit-content"
    };


    const routeTo = (path: string) => {
        navigate(`/${path}`);
    };

    return <div style={rootStyle}>
        <div style={imageContainerStyle}>
            <img src={ProfilePic} style={profilePicStyle} />
        </div>
        <div style={navBarStyle}>
            {
                Object.entries(Pages).map(([key, _]) => (
                    <NavButton key={key} text={key} onClick={routeTo} />
                ))
            }
        </div>
    </div>;
};
