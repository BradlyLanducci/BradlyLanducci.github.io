export const Theme = {
    Color: {
        TextLight: "#e6e6de",
        TextDark: "black"
    },
    MainFontSize: "18px"
}

export const getPageWidth = () =>
    window.innerWidth <= 768 ? "90vw" : "40vw";
