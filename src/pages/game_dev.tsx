import { Theme } from "../theme";

const Game = () => {
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

    return <div style={style}>
        <div style={article}>
            <h1 style={articleTitle}>
                Anguish
            </h1>
            <div>
                Orbit was my first entry point to developing audio plugins. Although this is not the first iteration of it.
                At its core it's a simple multi delay line plugin with some novel twists. The UI was masterfully created by
                Vain Audio co-owner Rami Hansen.
            </div>
        </div>

        <div style={article}>
            <iframe style={video} src="https://www.youtube.com/embed/FvE-7vLOMBs?si=VvmyYH8PpTjJ8zY9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div style={article}>
            <iframe style={video} src="https://www.youtube.com/embed/z9uwSX7ehvQ?si=zONIiXNRspNkEy_O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>;
};

export default Game;
