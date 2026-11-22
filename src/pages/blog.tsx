import { Theme, getPageWidth } from "../theme";
import { useNavigate } from 'react-router-dom';

import Anguish from "../assets/anguish.png"

interface PostProps {
    title: string,
    image: string,
    endpoint: string
};

const Post = ({ title, image, endpoint }: PostProps) => {
    const navigate = useNavigate();
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1>{title}</h1>
                <img style={{
                    width: '100%',
                }} src={image} alt="Anguish Screenshot" />
                <a style={{ cursor: "pointer", textDecoration: "underline" }} onClick={() => {
                    navigate("/" + endpoint);
                }}>Learn More</a>
            </div>
        </>
    )
}

const Blog = () => {
    const root: Record<string, any> = {
        display: "flex",
        flexDirection: "column",
        color: Theme.Color.TextLight,
        width: getPageWidth(),
        fontSize: Theme.MainFontSize,
        margin: "0 auto",
        flex: 1
    };

    return (
        <>
            <div style={root}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '16px',
                }}>
                    <Post title="Game Dev: Modular Spell System" image={Anguish} endpoint="spell_system" />
                </div>
            </div >
        </>
    )
};

export default Blog;
