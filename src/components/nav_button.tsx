import { Theme, getPageWidth } from "../theme"

export type OnClickFn = (path: string) => void;

interface ButtonProps {
    text: string,
    onClick: OnClickFn,
    selected: boolean
};

export const NavButton = ({ text, onClick, selected }: ButtonProps) => {
    const style: Record<string, any> = {
        backgroundColor: selected ? Theme.Color.TextLight : "transparent",
        color: selected ? Theme.Color.TextDark : Theme.Color.TextLight,
        padding: "16px 32px 16px 32px",
        cursor: "pointer",
        fontSize: "32px",
        display: "flex",
        justifyContent: "center",
        textAlign: "center"
    };

    const barStyle: Record<string, any> = {
        backgroundColor: Theme.Color.TextLight,
        display: "flex",
        width: "100%",
        height: "2px"
    };

    const capitalize = (str: string) => {
        return str.toLowerCase()
            .replace("_", " ")
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

    };

    const handleClick = () => {
        onClick(text);
    };

    return <div>
        <div style={{
            ...barStyle, ...{
                marginTop: "32px"
            }
        }} />

        <div onClick={handleClick} style={style}>{text.length === 0 ? "Bradly Landucci" : capitalize(text)}</div>

        <div style={{
            ...barStyle, ...{
                marginBottom: "32px"
            }
        }} />
    </div>
};
