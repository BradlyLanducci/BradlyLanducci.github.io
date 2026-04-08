import { Theme } from "../theme";

const About = () => {
    const style: Record<string, any> = {
        display: "flex",
        flexDirection: "column",
        color: Theme.Color.TextLight,
        fontSize: Theme.MainFontSize,
        width: Theme.PageWidth,
        margin: "0 auto",
        flex: 1
    };
    return <div style={style}>
        Hi, I'm Bradly, a passionate software developer with experience in audio DSP, high-performance computing, and game development.
        I've worked on developing advanced DSP algorithms for audio plugins alongside Rami Hansen at our company, Vain Audio, delivering
        tools that are both innovative and high-quality.
    </div>;
};

export default About;
