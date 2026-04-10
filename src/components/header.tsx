import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { NavButton } from "./nav_button";

import { Theme } from '../theme';

import About from "../pages/about"
import GameDev from "../pages/game_dev"
import Music from "../pages/music"
import Vain from "../pages/vain"

import ProfilePic from "../assets/profile_pic.jpg"

export const Pages: Record<string, React.ComponentType> = {
    "vain_audio": Vain,
    "game_dev": GameDev,
    "music": Music
};

export const Header = () => {
    const navigate = useNavigate();

    const rootStyle: Record<string, any> = {
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "64px",
        width: "100%",
        height: "fit-content"
    };

    const profilePicStyle: Record<string, any> = {
        backgroundColor: "transparent",
        borderRadius: "50%",
        width: "192px",
        height: "192px",
        objectFit: "cover"
    };

    const imageContainerStyle: Record<string, any> = {
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        height: "200px",
    };

    const navBarStyle: Record<string, any> = {
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        height: "fit-content"
    };

    const [selectedPage, setSelectedPage] = useState(Object.keys(Pages)[0])

    const routeTo = (path: string) => {
        navigate(`/${path}`);
        setSelectedPage(path);
    };

    return <div style={rootStyle}>
        <div style={imageContainerStyle}>
            <img src={ProfilePic} style={profilePicStyle} />
        </div>

        <div style={navBarStyle}>
            {
                Object.entries(Pages).map(([key, _]) => (
                    <NavButton key={key} text={key} selected={selectedPage == key} onClick={routeTo} />
                ))
            }
        </div>
    </div >;
};
