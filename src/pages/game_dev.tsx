import { Theme, getPageWidth } from "../theme";

import BananaManorigins1 from "../assets/bananaman_origins_2.png"
import BananaManorigins2 from "../assets/bananaman_origins_1.png"

const Game = () => {
    const style: Record<string, any> = {
        display: "flex",
        flexDirection: "column",
        color: Theme.Color.TextLight,
        width: getPageWidth(),
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
        width: getPageWidth(),
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

    const link: Record<string, any> = {
        color: Theme.Color.TextLight,
        fontSize: Theme.MainFontSize,
        display: "inline"
    };

    const image: Record<string, any> = {
        paddingTop: "16px",
        width: getPageWidth(),
    };

    return <div style={style}>
        <div style={article}>
            <h1 style={articleTitle}>
                Anguish
            </h1>
            <div>
                Another passion of mine is game development. Ever since I was a kid I was writing quests for
                imaginary games. I've recently gone back to my roots and been working on an action RPG with
                a story focus. I've created some dev logs that focus on some more technical aspects I find
                interesting.
            </div>
        </div>

        <div style={article}>
            <iframe style={video} src="https://www.youtube.com/embed/FvE-7vLOMBs?si=VvmyYH8PpTjJ8zY9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div style={article}>
            <iframe style={video} src="https://www.youtube.com/embed/z9uwSX7ehvQ?si=zONIiXNRspNkEy_O" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

        <div style={article}>
            <h1 style={articleTitle}>
                2D Game Engine
            </h1>
            <div>
                When I'm itching to do technical game dev work I work on my <a href="https://github.com/BradlyLanducci/anguish_engine" style={link}>C++ 2D Game Engine</a> which features:
                <ul>
                    <li>Collision detection and handling, spritesheet animations using OpenGL, and object memory management</li>
                    <li>Object tree architecture with built in memory management.</li>
                    <li>OpenGL texture rendering</li>
                    <li>Spritesheet animations</li>
                    <li>Audio effects pipeline</li>
                    <li>Input handling</li>
                </ul>
            </div>
        </div>
        <div style={article}>
            <h2 style={articleTitle}>
                BananaMan Origins
            </h2>
            <div>
                I've started to use this game engine for game jams. It's a lot more difficult to work with since it has no UI, but my partner and I managed to make a submission to a <a href="https://itch.io/jam/micro-jam-061" style={link}>48 Hour Microjam</a> called
                <a href="https://therealbananaboys.itch.io/revenge-on-monkey-island" style={link}> Revenge on Monkey Island</a>. This was a super fun experience and proved that the engine could in fact make a game!
            </div>
            <img src={BananaManorigins1} style={image} />
            <img src={BananaManorigins2} style={image} />
        </div>
    </div>;
};

export default Game;
