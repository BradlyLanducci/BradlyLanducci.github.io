import { useNavigate, useLocation } from 'react-router-dom';
import { NavButton } from "./nav_button";

import { Theme, getPageWidth } from '../theme';

import About from "../pages/about"
import GameDev from "../pages/game_dev"
import Music from "../pages/music"
import AudioDev from "../pages/audio_dev"

import ProfilePic from "../assets/profile_pic.jpg"
import Github from "../assets/github.png"

export const Pages: Record<string, React.ComponentType> = {
    "audio_dev": AudioDev,
    "game_dev": GameDev
};

export const Header = () => {
    const navigate = useNavigate();

    const root: Record<string, any> = {
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "64px",
        width: "100%",
        height: "fit-content"
    };

    const profileContainer: Record<string, any> = {
        backgroundColor: "transparent",
        color: Theme.Color.TextLight,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "200px",
    };

    const profile: Record<string, any> = {
        backgroundColor: "transparent",
        borderRadius: "50%",
        width: "192px",
        height: "192px",
        objectFit: "cover"
    };

    const githubContainer: Record<string, any> = {
        backgroundColor: "transparent",
        color: Theme.Color.TextLight,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "200px",
    };

    const githubPic: Record<string, any> = {
        backgroundColor: "transparent",
        borderRadius: "50%",
        width: "32px",
        height: "32px",
        objectFit: "cover"
    };

    const navBar: Record<string, any> = {
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        height: "fit-content"
    };

    const location = useLocation();
    const selectedPage = location.pathname.replace("/", "");

    const routeTo = (path: string) => {
        navigate(`/${path}`);
    };

    return <div style={root}>
        <div style={profileContainer}>
            <img src={ProfilePic} style={profile} />
            <a href="https://github.com/BradlyLanducci" style={githubContainer}>
                <img src={Github} style={githubPic} />
                /BradlyLanducci
            </a>
        </div>

        <div style={navBar}>
            {
                Object.entries(Pages).map(([key, _]) => (
                    <NavButton key={key} text={key} selected={selectedPage == key} onClick={routeTo} />
                ))
            }
        </div>
    </div >;
};
