import { hexToRgb, grayColor, primaryColor } from "assets/jss/Variable.js";

const fileUpladerStyle = {
    container: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100%",

    },
    input: {
        display: "none",
    },
    label: {
        cursor: "pointer",


    },
    imageContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: 15,
        marginTop: 14,
        borderRadius: 15,
        border: "1px solid rgba(" + hexToRgb(primaryColor[0]) + ", 0.4)",
        "& img": {
            display: "inline-block",
            marginLeft: 15,

        },
        "& p": {
            display: "inline-block",
            margin: 0,
            marginLeft: 15,
            flex: "auto",
            lineHeight: "30px",
            textAlign: "left",

        },
        "& span": {
            display: "inline-block",
            cursor: "pointer",
            marginLeft: 15,
            marginRight: 15,
            padding: "15px 20px",
            borderRadius: 15,
            border: "1px solid rgba(" + hexToRgb(grayColor[0]) + ", 0.4)",
            // border: "1px solid rgba (" + hexToRgb(grayColor[0]) + ", 0.4)",
        },
    },
};

export default fileUpladerStyle;
