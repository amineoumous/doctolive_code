import { 
  container,
  title,
  boxShadow,
  blackColor,
  successColor,
  whiteColor,
  grayColor,
  primaryColor,
  dangerColor,
  hexToRgb,
 } from "assets/jss/variables.js";

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
  pills: {
    float: "left",
    position: "relative",
    display: "block",
    borderRadius: "30px",
    minWidth: "120px",
    textAlign: "center",
    padding: "10px 15px",
    opacity: "1",
    display: "inline-flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: "12px",
    lineHeight: "24px",
    fontWeight: "500",
    textTransform: "uppercase",
    margin: "0 15px",
    transition:
      "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow:
      "0 16px 38px -12px rgba(" +
      hexToRgb(blackColor) +
      ", 0.56), 0 4px 25px 0px rgba(" +
      hexToRgb(blackColor) +
      ", 0.12), 0 8px 10px -5px rgba(" +
      hexToRgb(blackColor) +
      ", 0.2)",
    "&.active": {
      color: "#FFFFFF",
      backgroundColor: primaryColor[0],
      boxShadow:
      "0 14px 26px -12px rgba(" +
      hexToRgb(primaryColor[0]) +
      ", 0.42), 0 4px 23px 0px rgba(" +
      hexToRgb(blackColor) +
      ", 0.12), 0 8px 10px -5px rgba(" +
      hexToRgb(primaryColor[0]) +
      ", 0.2)"
    },
    "&:hover": {
      boxShadow:
      "0 14px 26px -12px rgba(" +
      hexToRgb(primaryColor[0]) +
      ", 0.42), 0 4px 23px 0px rgba(" +
      hexToRgb(blackColor) +
      ", 0.12), 0 8px 10px -5px rgba(" +
      hexToRgb(primaryColor[0]) +
      ", 0.2)"
    },
    "&,&:focus": {
      outline:0
    }
  },
  tabIcon: {
    width: "30px",
    height: "30px",
    display: "block",
    margin: "15px 0 !important",
    "&, & *": {
      letterSpacing: "normal !important"
    }
  },
  activateElement:{
    color: whiteColor,
    boxShadow:
    "0 2px 2px 0 rgba(" +
    hexToRgb(successColor[0]) +
    ", 0.14), 0 3px 1px -2px rgba(" +
    hexToRgb(successColor[0]) +
    ", 0.2), 0 1px 5px 0 rgba(" +
    hexToRgb(successColor[0]) +
    ", 0.12)",
    textTransform: "uppercase",
    letterSpacing: "0",
    willChange: "box-shadow, transform",
    borderRadius: "30px",
    marginLeft: 12,
    cursor: "pointer",
    position: "relative",
    padding: "12px 30px",
    transition:
      "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    lineHeight: "1.42857143",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    backgroundColor: successColor[0],
    "&:hover,&:focus": {
      outline: 0,
      backgroundColor: successColor[0],
      boxShadow:
        "0 14px 26px -12px rgba(" +
        hexToRgb(successColor[0]) +
        ", 0.42), 0 4px 23px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.12), 0 8px 10px -5px rgba(" +
        hexToRgb(successColor[0]) +
        ", 0.2)"
    },
  },
  deleteElement:{
    color: whiteColor,
    boxShadow:
    "0 2px 2px 0 rgba(" +
    hexToRgb(dangerColor[0]) +
    ", 0.14), 0 3px 1px -2px rgba(" +
    hexToRgb(dangerColor[0]) +
    ", 0.2), 0 1px 5px 0 rgba(" +
    hexToRgb(dangerColor[0]) +
    ", 0.12)",
    textTransform: "uppercase",
    letterSpacing: "0",
    willChange: "box-shadow, transform",
    borderRadius: "30px",
    margin: "12px 24px",
    cursor: "pointer",
    position: "relative",
    padding: "12px 30px",
    transition:
      "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    lineHeight: "1.42857143",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    backgroundColor: dangerColor[0],
    "&:hover,&:focus": {
      outline: 0,
      backgroundColor: dangerColor[0],
      boxShadow:
        "0 14px 26px -12px rgba(" +
        hexToRgb(dangerColor[0]) +
        ", 0.42), 0 4px 23px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.12), 0 8px 10px -5px rgba(" +
        hexToRgb(dangerColor[0]) +
        ", 0.2)"
    },
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
