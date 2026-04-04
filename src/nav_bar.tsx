import { useNavigate } from 'react-router-dom';
import { NavButton, OnClickFn } from "./nav_button";

import About from "./about.tsx"
import Vain from "./vain.tsx"
import Music from "./music.tsx"

export const Pages: Record<string, React.ComponentType> = {
    "about": About,
    "vain_audio": Vain,
    "music": Music
};

export const NavBar = () => {
    const navigate = useNavigate();

    const style: Record<string, any> = {
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

    return <div style={style}>
        {
            Object.entries(Pages).map(([key, _]) => (
                <NavButton key={key} text={key} onClick={routeTo} />
            ))
        }
    </div>;
};
