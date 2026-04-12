import { Theme } from "../theme";

import Orbit from "../assets/orbit.png"
import OrangeGate from "../assets/orange_gate.png"
import Fumigate from "../assets/fumigate.png"

const AudioDev = () => {
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

    const centeredLink: Record<string, any> = {
        color: Theme.Color.TextLight,
        margin: "0 auto",
        fontSize: Theme.MainFontSize
    };
    const link: Record<string, any> = {
        color: Theme.Color.TextLight,
        fontSize: Theme.MainFontSize,
        display: "inline"
    };

    return <div style={style}>
        <div style={article}>
            <h1 style={articleTitle}>
                Vain Audio
            </h1>
            <div>
                Founded in 2022, my long-time friend Rami Hansen and I have been building audio software together. I mainly
                focus on DSP, while he handles the UI side. We distribute our work independently and on MuseHub, where we've
                reached over 40,000 downloads.
            </div>
        </div>
        <div style={article}>
            <h1 style={articleTitle}>
                PFT
            </h1>
            <a style={centeredLink} href="https://vainaudio.com/product/pft/">
                Product Page
            </a>
            <iframe style={video} src="https://www.youtube.com/embed/TE79yyfpGpw?si=u442Qb5E6OVEqPAc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <div>
                For this project, I implemented a range of filters, including custom-derived Chebyshev and Butterworth designs,
                along with AM, RM, and comb filtering.
            </div>
        </div>
        <div style={article}>
            <h1 style={articleTitle}>
                Orbit
            </h1>
            <a style={centeredLink} href="https://vainaudio.com/product/orbit/">
                Product Page
            </a>
            <img src={Orbit} style={image} />
            Orbit was my first entry point to developing audio plugins. Although this is not the first iteration of it.
            At its core it's a simple multi delay line plugin with some novel twists.
        </div>
        <div style={article}>
            <h1 style={articleTitle}>
                Fumigate
            </h1>
            <a style={centeredLink} href="https://vainaudio.com/product/fumigate/">
                Product Page
            </a>
            <img src={Fumigate} style={image} />
            <p>
                This plugin is a time-based modulator to create stereo width. Featuring two main modules: The chorus and the stereo
                spreader. I had a lot of fun designing the chorus modes for this one. Notably the barber pole flanger which creates
                an effect similar to a <a href="https://en.wikipedia.org/wiki/Shepard_tone" style={link}>shepherds tone.</a>
            </p>
        </div>
        <div style={article}>
            <h1 style={articleTitle}>
                Orange Gate
            </h1>
            <a style={centeredLink} href="https://vainaudio.com/product/orange-gate/">
                Product Page
            </a>
            <img src={OrangeGate} style={image} />
            A compact two-in-one gate and compressor focused on precision. I implemented both DSP effects from the
            ground up, featuring sample-accurate ADSR envelopes and signal-triggered filtering for tight, responsive
            dynamics control in real time.
        </div>
    </div>;
};

export default AudioDev;
