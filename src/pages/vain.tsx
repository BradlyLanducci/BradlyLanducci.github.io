import { Theme } from "../theme";

import Orbit from "../assets/orbit.png"
import OrangeGate from "../assets/orange_gate.png"
import Fumigate from "../assets/fumigate.png"

const Vain = () => {
    const style: Record<string, any> = {
        display: "flex",
        flexDirection: "column",
        color: Theme.Color.TextLight,
        width: Theme.PageWidth,
        fontSize: Theme.MainFontSize,
        margin: "0 auto",
        flex: 1
    };

    const articleTitle: Record<string, any> = {
        textAlign: "center"
    };

    const article: Record<string, any> = {
        display: "flex",
        flexDirection: "column",
        color: Theme.Color.TextLight,
        width: Theme.PageWidth,
        fontSize: Theme.MainFontSize,
        textAlign: "justify",
        marginBottom: "128px"
    };

    const video: Record<string, any> = {
        display: "flex",
        margin: "0 auto",
        aspectRatio: "16 / 9",
        width: "100%",
        height: "auto"
    };

    const image: Record<string, any> = {
        width: Theme.PageWidth,
    };

    return <div style={style}>
        <div style={article}>
            <h1 style={articleTitle}>
                PFT
            </h1>
            <iframe style={video} src="https://www.youtube.com/embed/TE79yyfpGpw?si=u442Qb5E6OVEqPAc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div>
                Orbit was my first entry point to developing audio plugins. Although this is not the first iteration of it.
                At its core it's a simple multi delay line plugin with some novel twists. The UI was masterfully created by
                Vain Audio co-owner Rami Hansen.
            </div>
        </div>
        <div style={article}>
            <h1 style={articleTitle}>
                Orbit
            </h1>
            <img src={Orbit} style={image} />
            Orbit was my first entry point to developing audio plugins. Although this is not the first iteration of it.
            At its core it's a simple multi delay line plugin with some novel twists. The UI was masterfully created by
            Vain Audio co-owner Rami Hansen.
        </div>
        <div style={article}>
            <h1 style={articleTitle}>
                Fumigate
            </h1>
            <img src={Fumigate} style={image} />
            Orbit was my first entry point to developing audio plugins. Although this is not the first iteration of it.
            At its core it's a simple multi delay line plugin with some novel twists. The UI was masterfully created by
            Vain Audio co-owner Rami Hansen.
        </div>
        <div style={article}>
            <h1 style={articleTitle}>
                Orange Gate
            </h1>
            <img src={OrangeGate} style={image} />
            Orbit was my first entry point to developing audio plugins. Although this is not the first iteration of it.
            At its core it's a simple multi delay line plugin with some novel twists. The UI was masterfully created by
            Vain Audio co-owner Rami Hansen.
        </div>
    </div>;
};

export default Vain;
