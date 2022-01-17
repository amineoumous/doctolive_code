
import { 
    container,

} from "./variables.js";
    
  const profilePageStyle = theme => ({
    container,
    h1: {
        margin:" 0 0 16px",
        fontSize: 32,
        lineHeight: "40px",
        fontWeight: 700,
        color: "#fff",
        "-webkit-text-fill-color": "#fff",
    },
    h2: {
        margin:" 0 0 8px",
        fontSize: 20,
        color: "#757575",
        lineHeight: "40px",
        fontWeight: 700,
        color: "#fff",
        "-webkit-text-fill-color": "#fff",
    },
    section: {
        paddingTop: 64,
        paddingBottom: 24,
        "& .section": {
            marginBottom: 24,
            marginTop: 64
        },
    },
    callToAction : {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        "-webkit-box-orient": "vertical",
        "-webkit-box-direction": "normal",
        marginTop: 64,
        flex: "0 0 auto",
        textDecoration: "none",
        color: "#435f71",
        paddingTop: 16,
    },
    calltoActionContent: {
        minHeight: "50%",
        backgroundColor: "#f2fafd",
        flex: "1 0 auto",

    },
    calltoActionCard: {
        display: "flex",
        flexWrap: "wrap",
       
    },
    calltoActionContentWrap: {
        textAlign:"center",  
        backgroundRepeat: "repeat no-repeat",
        backgroundPosition: "bottom",
        padding: 16,
        backgroundSize: "contain",
        "& .fixed-width" : {
            margin: "auto",
            maxWidth: 544,
            "& h2" :{
                fontSize: 18,
                marginTop: 48,
                lineHeight: "24px",
                textAlign: "center",
                fontWeight: 700,
                color: "#224358",
            },
            "& .text-body" :{
                fontSize: 14,
                marginTop: 16,
                lineHeight: "24px",
                textAlign: "center",
                fontWeight: 400,
                color: "#224358",
            },
            "& .button" :{
                fontSize: 14,
                color: "#fff",
                height: 40,
                border: 0,
                outline: "none",
                boxShadow: "none",
                "-webkit-appearance": "none !important",
                "-moz-appearance": "none !important",
                appearance: "none !important",
                textDecoration: "none !important",
                textTransform: "uppercase",
                margin: 0,
                display: "inline-block",
                padding: "0 16px",
                "-webkit-transition": "opacity 500ms, color 100ms, background-color 100ms",
                transition: "opacity 500ms, color 100ms, background-color 100ms",
                backgroundColor: "transparent",
                cursor: "pointer",
                borderRadius: 8,
                backgroundColor: "#1ab9b9",
                marginBottom: 52,
                lineHeight: 40,
                marginTop: 32,
                "& span" : {
                   
                    display: "flex",
                  
                    alignItems: "center",
                  
                    justifyContent: "center",
                    fontWeight: "bold",
                    height: "100%",
                }
            },
        },
        
    },
    calltoActionImage: {
        width: 431,
        position: "absolute",
        bottom: 0,
        left: 0,
        borderBottomLeftRadius: 4,
        overflow: "hidden",
        "& img" : {
            width: "inherit",
            verticalAlign: "bottom"
        }
    },
    sectionTitlle: {
        fontSize: 24,
        lineHeight: "32px",
        textAlign: "center",
        fontWeight: 700,
        color: "#224358",
        margin: "0 16px 32px 16px"

    },
    header : {
        position: "relative",
        background: "-webkit-linear-gradient(top, #1ab9b9 19%, #1ab9b9 100%)",
        background: "linear-gradient(180deg, #1ab9b9 19%, #1ab9b9 100%)",
        display: "block",
       
    },
    backgroundZone : {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
    },
    bakgroudContainer : {
        width: "100%",
        height: "100%",
        minHeight: "450px",
        padding: "80px 0",
        backgroundSize: "25% auto",
        backgroundRepeat: "no-repeat",
        [theme.breakpoints.down("md")]: {
            backgroundSize: "40% auto",
            padding: "40px 0 160px 0",
        },
        [theme.breakpoints.down("xs")]: {
            backgroundSize: "100% auto",
            padding: "40px 0 160px 0",
            height: "991px",
        }
    },
    downloader : {
        "& .downloader-wrapper" : {
            "& h2" : {
                fontSize: 18,
                lineHeight: "24px",
                fontWeight: 700,
                color: "#224358",
                margin: 0,
            },
            "& h3" : {
                fontSize: 14,
                lineHeight: "24px",
                fontWeight: 700,
                color: "#7791a2",
                margin: 0,
                marginBottom: 32,
                marginTop: 8
            },

            "& .appstore" : {
                display: "flex",
                flexWrap: "wrap",
                width: "100%",
                cursor: "pointer",
                "& .appstore-container" : {
                    padding: 16,
                    border: "1px solid #000",
                    borderRadius: 5,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    
    
                    "& .appstore-content" : {
                        maxHeight: 60,
                        width: "100%",
                        display: "flex",
                        justifyContent: "start",

                    }
    
                }
            },
            "& .downloader-image" : {
                "& img": {
                    height: 320
                }
            }
        },
        
    }
  })
  
  export default profilePageStyle;
  