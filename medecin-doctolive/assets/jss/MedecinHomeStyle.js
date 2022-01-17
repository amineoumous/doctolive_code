
import { 
    container,
} from "./variables.js";
    
  const profilePageStyle = {
    container,
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
  
        backgroundImage: `url(/img/backgroundpoints.png)`,
        backgroundRepeat: "repeat no-repeat",
        backgroundPosition: "bottom",
        // backgroundSize: "200%",
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
                fontFamily: "Roboto,arial,sans-serif",
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
                backgroundColor: "#0596de",
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
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50%",
        width: "100vw",
        paddingTop: "72px !important",
        paddingBottom: "64px !important",
        "& .right-content" : {
            backgroundColor:"#fff", 
            padding: 32, 
            borderRadius: 15, 
            boxShadow: "0 1px 4px 0 rgba(5,150,222,.2)",
            "& h3": {
                marginBottom: 16,
            },
            "& form": {
                marginTop: 16,
                padding: 8,
            },
        }
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
  }
  
  export default profilePageStyle;
  