

import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import clsx from 'clsx';

// core components
import styles from "assets/jss/components/cardStyle.js";
import { MdSend } from 'react-icons/md';


var style = {
    searchContainer : {
        marginRight : "15px",
        display:"flex",
        position: "relative",
    },
    box: {

    },
    "@keyframes line-anim ": {
        
        "75%": {
            width: 27,
            right: 27,
            transform: "rotate(0)",
        },
        "100%": {
            width: " calc(100% - 27px)",
            right: 27,
            transform: "rotate(0)",
        },
    },
 
    materialIcons: {
        background: "transparent",
        border: "3px solid white",
        borderRadius: "50%",
        display: "inline-block",
        width: "32px",
        height: "32px",

        '& svg' : {
            transition: "0s",
            color: "transparent",
            verticalAlign: "middle",
            width: "0",
        }
    },
    
    sbx: {
        position: "relative",
        border: "none",
        background: "none",
        color: "white",
        fontFamily: 'Roboto', 
        fontSize: "24px",
        '&:focus ~ #icon svg' :{
            color: "white",
            width: "100%",
            transition: ".2s .4s",
        },
        "&::-moz-placeholder": {
            color: "white",
            opacity: ".6",
            transition: ".2s",
        },
        '&:focus::-webkit-input-placeholder':  {
            textIndent: "100%",
        },
        '&:focus::-moz-placeholder ' :{
            textAlign: "right",
        },
        '&:focus ~ #line ' :{
            animation: `$line-anim .5s both`,
        },
        '&::-webkit-input-placeholder':  {
            color: "white",
            opacity: ".6",
            transition: ".2s",
        },
    },
    
    line: {
        position: "absolute",
        top: 27,
        right: 7,
        margin: "auto",
        width: 24,
        height: 0,
        border:" 1px solid white",
        borderRadius: "3px",
        transition: ".5s",
        // border-top-right-radius: "0",
        // border-bottom-right-radius: 0,
        transform: "rotate(-135deg)",
        transformOrigin: "right",
        zIndex: -1,
    }
    }
const useStyles = makeStyles(style);

export default function SearchInput(props) {
  const classes = useStyles();
  const { className, placeholder, onChange , ...rest } = props;

  return (
    <div {...rest} className={classes.searchContainer}>
        <div style={{position:"relative"}}>
            <input type="text" onChange={onChange} className={clsx(classes.sbx)} id="sbx" name="searchbox" placeholder={placeholder} />
            <span id="icon" className={clsx(classes.materialIcons)}> <MdSend size="20px" />  </span>
        <span className={classes.line} id="line"></span>
        </div>  
        
    </div>
  );
}

SearchInput.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  chart: PropTypes.bool,
  children: PropTypes.node
};

