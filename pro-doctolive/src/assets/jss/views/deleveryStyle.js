    import {
        successColor,
        whiteColor,
        grayColor,
        hexToRgb,
        infoColor,
        blackColor,
    } from "assets/jss/Variable.js";

  const deliveryStyle = {
    successText: {
      color: successColor[0]
    },
    label:{

    },

    img: {
        cursor: "pointer",
        marginLeft: "15px",
        transition: "all ease-in 0.3s",
        padding: 15,
        boxShadow:
              "0 12px 20px -10px rgba(" +
              hexToRgb(blackColor) +
              ",.28), 0 4px 20px 0 rgba(" +
              hexToRgb(blackColor) +
              ",.12), 0 7px 8px -5px rgba(" +
              hexToRgb(blackColor) +
              ",.2)",
        "&:hover,&:focus": {
            border: "1px solid",
            borderColor: infoColor[0],
            transform: "scale(1.05)",
            boxShadow:
              "0 12px 20px -10px rgba(" +
              hexToRgb(infoColor[0]) +
              ",.28), 0 4px 20px 0 rgba(" +
              hexToRgb(blackColor) +
              ",.12), 0 7px 8px -5px rgba(" +
              hexToRgb(infoColor[0]) +
              ",.2)"
        }, 
    },
    input:{
        "&.checked + img": {
            border: "1px solid",
            transform: "scale(1.05)",
            borderColor: infoColor[0],
            boxShadow:
              "0px 0px 20px 8px rgba(" +
              hexToRgb(infoColor[0]) +
              ",.3)"
        },
        display: "none",
       
    },
    upArrowCardCategory: {
      width: "16px",
      height: "16px"
    },

    stats: {
      color: grayColor[0],
      display: "inline-flex",
      fontSize: "12px",
      lineHeight: "22px",
      "& svg": {
        top: "4px",
        width: "16px",
        height: "16px",
        position: "relative",
        marginRight: "3px",
        marginLeft: "3px"
      },
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        top: "4px",
        fontSize: "16px",
        position: "relative",
        marginRight: "3px",
        marginLeft: "3px"
      }
    },
    
  };
  
  export default deliveryStyle;
  