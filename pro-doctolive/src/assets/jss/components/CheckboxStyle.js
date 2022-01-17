import {
    grayColor,
    primaryColor,
    infoColor,
    successColor,
    warningColor,
    dangerColor,
    roseColor,
    whiteColor,
    blackColor,
    hexToRgb
  } from "assets/jss/Variable.js";
  
  const buttonStyle = {
    checkboxLabel: {
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: 300,
        lineHeight: 1,
        margin: "12px 7px",
    },
    span :{
        position: "relative",
        top: 0,
        borderColor: infoColor[0],
        border: "1px solid",
        borderRadius: "50%",
        float: "left",
        height: "14px",
        width: "14px",
        margin: "0 14px 0 0px",
        outlineColor: "#fff",
        // -webkit-transition: all 0.2s ease-in-out,
        // -moz-transition: all 0.2s ease-in-out,
        transition: "all 0.2s ease-in-out",
        zIndex: 1,
    },
    spanText:{
        color: "black"
    },
    input : {
        display: "none",
        '&:checked + span' : {
            borderRadius: "0%",
            top: "-2px",
            borderLeft: "2px solid",
            borderBottom: "4px solid",
            borderTop: 0,
            borderRight: 0,
            // -webkit-transform: rotate(-45deg) scaleY(0.5),
            // -moz-transform: rotate(-45deg) scaleY(0.5),
            // -ms-transform: rotate(-45deg) scaleY(0.5),
            // -o-transform: rotate(-45deg) scaleY(0.5),
            transform: "rotate(-45deg) scaleY(0.5)",
            borderColor: primaryColor[0] + "!important",

        }
    },
  };
  
  export default buttonStyle;
  