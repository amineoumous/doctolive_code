import { 
    container,
    title,
    boxShadow,
    whiteColor,
    grayColor,
    primaryColor,
    dangerColor,
    hexToRgb,
   } from "assets/jss/Variable.js";
  
  import imagesStyle from "assets/jss/imagesStyles.js";
  
  const profilePageStyle = {
    container,
    profile: {
      textAlign: "center",
      "& img": {
        maxWidth: "160px",
        width: "100%",
        margin: "0 auto",
        transform: "translate3d(0, -50%, 0)"
      }
    },
    cardTitleWhite: {
        color: whiteColor,
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "400",
        // fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        padding: "12px 16px",
        "& small": {
          color: grayColor[1],
          fontWeight: "400",
          lineHeight: "1"
        }
      },
    description: {
      margin: "1.071rem auto 0",
      maxWidth: "600px",
      color: "#999",
      textAlign: "center !important"
    },
    name: {
      marginTop: "-80px"
    },
    ...imagesStyle,
    main: {
      background: "#FFFFFF",
      position: "relative",
      zIndex: "3"
    },
    mainRaised: {
      margin: "-60px 30px 0px",
      borderRadius: "6px",
      boxShadow:
        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    title: {
      ...title,
      display: "inline-block",
      position: "relative",
      marginTop: "30px",
      minHeight: "32px",
      textDecoration: "none"
    },
    socials: {
      marginTop: "0",
      width: "100%",
      transform: "none",
      left: "0",
      top: "0",
      height: "100%",
      lineHeight: "41px",
      fontSize: "20px",
      color: "#999"
    },
    navWrapper: {
      margin: "20px auto 50px auto",
      textAlign: "center"
    },
    actions :{
      backgroundColor: primaryColor[0],
      marginRight: 4,
    },
    actionsdelete :{
      backgroundColor: dangerColor[0],
      marginRight: 4,
      color: "white"
    },
    basicInfoContainer: {
      listStyle: "none",
      margin: "0px",
      padding: "0px",
      flexWrap: "wrap",
  
    },
    basicInfo :{
      marginTop: 15,
      paddingLeft: "22px",
      position: "relative",
      paddingLeft: "40px",
      fontSize: "18px",
      color: grayColor[0],
      marginBottom: 16,
      "& svg": {
        marginRight: "16px",
        fontSize: "24px",
        color: primaryColor[0],
      },
    }
  };
  
  export default profilePageStyle;
  