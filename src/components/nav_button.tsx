
export type OnClickFn = (path: string) => void;

interface ButtonProps {
    text: string,
    onClick: OnClickFn
};

export const NavButton = ({ text, onClick }: ButtonProps) => {
    const style: Record<string, any> = {
        backgroundColor: "white",
        padding: "5px",
        width: "fit-content",
        height: "fit-content"
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

    return <div onClick={handleClick} style={style}>{text.length === 0 ? "Bradly Landucci" : capitalize(text)}</div>;
};
